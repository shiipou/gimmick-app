'use strict'

const apiService = require("../services/api")
const userService = require("../services/user")

const colors = [
    0xFF70CBF2,
    0xFFF27A86,
    0xFFF6C28B,
    0xFFA4A4A4
]

module.exports = async ({user}, event, api) => {
    const guild = await apiService.createDoc(api, "guild", {
        "name": event.value.name
    })
    console.log("Created guild", guild._id)

    apiService.createDoc(api, "guild_users", {
        "guild": guild._id,
        "user": user._id,
        "isOwner": true,
        "color": colors[Math.floor(Math.random() * colors.length)]
    })

    return userService.update(api, {
        ...user,
        navigation: "home"
    })
}
