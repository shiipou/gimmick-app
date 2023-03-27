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
        
}

export interface MigrationFile {
    up: (api: Api) => Promise<void>
    down: (api: Api) => Promise<void>
}
