import { Data } from "./Data"
import { Api } from "./Api"

const colors: number[] = [
    0xFF70cbf2,
    0xFFf27a86,
    0xFFf6c28b,
    0xFF57c0b3
]

export default class Guild extends Data {
    user: string

    constructor(user: string) {
        super()
        this.user = user
    }

    async assign(user: string, is_owner: boolean = false, color: number = colors[Math.floor(Math.random() * colors.length)], api: Api) {
        const assign = new GuildUsers(user, is_owner, color)

        return await api.createDoc(assign)
    }
}

export class GuildUsers extends Data {
    user: string
    is_owner: boolean
    color: number

    constructor(user: string, is_owner: boolean, color: number) {
        super()
        this.user = user
        this.is_owner = is_owner
        this.color = color
    }
}
