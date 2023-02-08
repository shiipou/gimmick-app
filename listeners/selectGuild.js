'use strict'

const userService = require("../services/user")

module.exports = async ({guild}, event, api) => {
    var user = await userService.get(api)

    console.log("selectGuild", user, guild)
    
    if(!guild){
        return userService.update(api, {
            ...user,
            navigation: "createGuild"
        })
    }

    if(user.selectedGuild == guild){
        return {}
    }

    return userService.update(api, {
        ...user,
        navigation: "home",
        selectedGuild: guild
    })
}
