import { promises as fs } from "fs"
import * as path from "path"

import { Api } from "./_Api"
import { Data } from "./_Data"
import { name as appName, version as appVersion } from '../../package.json'

import Migration, { MigrationFile } from "./Migration"

// const appName: string = "Gimmick"
// const appVersion: string = "0.0.1"

export default class App extends Data {
    name: string
    version: string
    date: Date
    maintenance: boolean

    constructor(name: string, version: string, date: Date) {
        super()
        this.name = name
        this.version = version
        this.date = date
        this.maintenance = false
    }

    static async migrate(api: Api) : Promise<void> {
        let app:App | undefined = await api.executeQuery(App, {}).then((apps:App[])=>apps[0])
        if (!app) {
            console.info("App is not registered, registering...")
            app = (await api.createDoc(new App(appName, appVersion, new Date()))) as App
        }
        await app.migrate(api!)
    }
    
    async migrate(api: Api, migrationDir: string = path.join(__dirname, "../../migrations")) : Promise<void> {
        console.info("Checking App migrations...")
        const appliedMigrations = await api.executeQuery(Migration, {})

        // check if migrationDir exist
        if (!(await fs.stat(migrationDir)).isDirectory()){
            return
        }

        // get all migrations
        const migrationPaths:string[] = (await fs.readdir(migrationDir)).filter(file => file.endsWith(".js"))
        
        const migrations:Migration[] = migrationPaths.map(migration => {
            const basename:string = path.basename(migration)
            const separator:number = basename.indexOf("_", basename.indexOf("_") + 1)
            const name: string = path.basename(basename.slice(separator + 1), ".js")
            const date: Date = parseDate(basename.slice(0, separator))
            return new Migration(name, date, migration)
        }).sort((a:Migration, b:Migration) => a.gt(b) ? -1 : 1)

        // get first migration that is not applied
        const firstMissingMigration:Migration = migrations.find(migration => !appliedMigrations.find(appliedMigration => appliedMigration.eq(migration)))
        
        if (firstMissingMigration) {
            // check if there is a migration already applied after this one
            const nextAppliedMigration:Migration = appliedMigrations.find(appliedMigration => appliedMigration.date > firstMissingMigration.date)
            if (nextAppliedMigration) {
                throw new Error(`There is a migration already applied after the first missing migration ( ${firstMissingMigration.name} ): ${nextAppliedMigration.name}. Please fix this before running migrations.`)
            }

            console.info("App version is not up to date, running migrations...")
            // Add in app data the maintenance mode
            this.maintenance = true
            await api.updateDoc(this)

            // run all migrations that are not applied
            for (const migration of migrations) {
                if (migration.date >= firstMissingMigration.date) {
                    console.info("Running migration:", migration.name, migration.date)

                    const migrationFile: MigrationFile = await import(path.join(migrationDir, migration.path))

                    await migrationFile.up(api)

                    migration.version = appVersion
                    migration.appliedDate = new Date()
                    await api.createDoc(migration)

                    console.info("Migration applied:", migration.name, migration.date)
                }
            }

            this.version = appVersion
            this.maintenance = false
            await api.updateDoc(this)
        } else {
            console.info("App version is up to date:", appVersion)
        }
    }
}

function parseDate(date_str: string) : Date {
    const date_parts = date_str.split(/[\._:-]/) // split the string at each possible separator
    const year = parseInt(date_parts[0])
    const month = parseInt(date_parts[1]) - 1 // months are zero-indexed in JS, so subtract 1
    const day = parseInt(date_parts[2])
    const hour = parseInt(date_parts[3])
    const minute = parseInt(date_parts[4])

    const dateTime = new Date(year, month, day, hour, minute)
    return dateTime
}