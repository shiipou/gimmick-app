'use strict'

import * as userService from "../services/user.js"

export default async ({guild}, event, api) => {
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
