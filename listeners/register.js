'use strict'

import * as userService from "../services/user.js";

export default async (props, event, api) => {
    const user = await userService.get(api)

    let tag = null;
    do {
        tag = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
    } while(!(await userService.available(api, event.value.username, tag)))

    return await userService.update(api, {
        ...user,
        username: event.value.username,
        tag: tag,
        navigation: "home"
    })
}
