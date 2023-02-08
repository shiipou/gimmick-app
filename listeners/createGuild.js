'use strict'

const guildService = require("../services/guild")
const userService = require("../services/user")

module.exports = async ({user}, event, api) => {
    const guild = await guildService.create(api, {
        "name": event.value.name
    })
    console.log("Created guild", guild)

    await guildService.assign(api, user.id, guild, true)

    return userService.update(api, {
        ...user,
        navigation: "home"
    })
}
