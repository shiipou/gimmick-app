'use strict'

const fs = require('fs')
const path = require('path')

const apiServices = require('./api')
const appService = require("./app")

const migrationDir = path.join(__dirname, "../migrations")
const pjson = require('../package.json')

module.exports = {
    async get(api) {
        return apiServices.executeQuery(api, "migrations", { }).then((value) => value.data)
    },
    async create(api, data) {
        if(!data) throw new Error("Migration data is required to create a new migration.")
        return apiServices.createDoc(api, "migrations", data).then((value) => value.data);
    },
    async update(api, data) {
        if(!data._id) throw new Error("Migration ID is required to update migration data.")
        return apiServices.updateDoc(api, "migrations", data).then((value) => value.data);
    },
    migrate(api) {
        return async (app) => {
            if (!app) {
                console.info("App is not registered, registering...")
                app = await appService.create(api, {
                    name: pjson.name,
                    version: pjson.version,
                    date: new Date().toUTCString()
                })
                console.debug("App registered:", app)
            }
    
            console.info("Checking App migrations...")
            // get all already applied migrations
            const appliedMigrations = await this.get(api)
            // get all migrations
            const migrations = (await fs.promises.readdir(migrationDir)).map(migration => {
                const basename = path.basename(migration)
                const separator = basename.indexOf("_", basename.indexOf("_") + 1)
                return {
                    name: basename.slice(separator + 1),
                    date: basename.slice(0, separator),
                    path: migration
                }
            }).sort((a, b) => a.date < b.date ? 1 : -1)
    
            // get first migration that is not applied
            const firstMissingMigration = migrations.find(migration => !appliedMigrations.find(appliedMigration => appliedMigration.date == migration.date))
            if( firstMissingMigration ) {
                // check if there is a migration already applied after this one
                const nextAppliedMigration = appliedMigrations.find(appliedMigration => appliedMigration.date > firstMissingMigration.date)
                if (nextAppliedMigration) {
                    throw new Error("There is a migration already applied after the first missing migration")
                }
    
                console.info("App version is not up to date, running migrations...")
                // Add in app data the maintenance mode
                await appService.update(api, {
                    ...app,
                    maintenance: true
                })
    
                // run all migrations that are not applied
                for (const migration of migrations) {
                    if (migration.date >= firstMissingMigration.date) {
                        console.info("Running migration:", migration.name, migration.date)
                        
                        const migrationFile = require(path.join(migrationDir, migration.path))
                        
                        await migrationFile.up(api)
    
                        await this.create(api, {
                            name: migration.name,
                            date: migration.date,
                            path: migration.path,
                            version: pjson.version,
                            appliedDate: new Date().toUTCString()
                        })
                        console.info("Migration applied:", migration.name, migration.date)
                    }
                }

                await appService.update(api, {
                    ...app,
                    version: pjson.version,
                    maintenance: false
                })
            }else{
                console.info("App version is up to date:", pjson.version)
            }
        }
    }
}
