'use strict'

import * as guildService from "../services/guild.js"
import * as userService from "../services/user.js"

export default async ({user}, event, api) => {
    const guild = await guildService.create(api, {
        "name": event.value.name
    })

    await guildService.assign(api, user.id, guild, true)

    return userService.update(api, {
        ...user,
        navigation: "home"
    })
}
