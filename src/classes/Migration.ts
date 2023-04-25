import { Api } from "./_Api"
import { Data } from "./_Data"

export default class Migration extends Data {
    name: string
    date: Date
    path: string
    version?: string
    appliedDate?: Date

    constructor(name: string, date: Date, path: string, version?: string, appliedDate?: Date) {
        super()
        this.name = name
        this.date = date
        this.path = path
        this.version = version
        this.appliedDate = appliedDate
    }

    gt(migration: Migration) : boolean {
        let this_date: Date
        if (!(this.date instanceof Date))
            this_date = new Date(this.date)
        let other_date: Date
        if (!(other_date instanceof Date))
            other_date = new Date(other_date)
        return this_date > other_date
    }
    lt(migration: Migration) : boolean {
        let this_date: Date
        if (!(this.date instanceof Date))
            this_date = new Date(this.date)
        let other_date: Date
        if (!(other_date instanceof Date))
            other_date = new Date(other_date)
        return this_date < other_date
    }
    eq(migration: Migration) : boolean {
        return this.path == migration.path
    }
}

export interface MigrationFile {
    up: (api: Api) => Promise<void>
    down: (api: Api) => Promise<void>
}
