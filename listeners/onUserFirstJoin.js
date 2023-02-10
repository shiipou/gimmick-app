'use strict'

import * as userService from '../services/user.js'


export default async (props, event, api) => {
    console.debug("New user joined for the first time.")
    return userService.create(api, {
        id: "@me"
    })
}
