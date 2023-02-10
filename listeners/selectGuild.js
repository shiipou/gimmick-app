'use strict'

const userService = require("../services/user")

module.exports = async ({guild}, event, api) => {
    var user = await userService.get(api)

    let expand = false
    if(user.selectedGuild == guild){
        expand = !user.expand
    }

    return userService.update(api, {
        ...user,
        expand: expand,
        navigation: "home",
        selectedGuild: guild
    })
}
