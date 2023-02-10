'use strict'

import * as userService from "../services/user.js"

export default async (props, event, api) => {
    var userData = await userService.get(api)

    return userService.update(api, {
        ...userData,
        navigation: props.page
    })
}
