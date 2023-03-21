import { Data } from "./Data"
import { Api } from "./Api"

export default class User extends Data {
    id: string
    username?: string
    tag?: string
    navigation?: string
    selectedGuild?: string
    expand?: boolean

    constructor(id: string = '@me', username?: string, tag?: string, navigation?: string) {
        super()
        this.id = id
        this.username = username
        this.tag = tag
        this.navigation = navigation
    }
}
