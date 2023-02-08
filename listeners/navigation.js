'use strict'

const userService = require("../services/user")

module.exports = async (props, event, api) => {
    var userData = await userService.get(api)

    return userService.update(api, {
        ...userData,
        navigation: props.page
    })
}
