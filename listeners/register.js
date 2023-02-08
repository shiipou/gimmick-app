'use strict'

const userService = require("../services/user")

module.exports = async (props, event, api) => {
    console.log("register listener", event)
    userService.get(api).then(async (user) => {
        let tag = null;
        do {
            tag = Math.floor(Math.random() * 10000);
        } while(await userService.available(api, event.value.username, tag))

        await userService.update(api, {
            ...user,
            username: event.value.username,
            tag: tag,
            navigation: "home"
        })
    })

    return {}
}
