'use strict'

const userService = require('../services/user')


module.exports = async (props, event, api) => {
    console.log("New user joined for the first time.")
    return userService.create(api, {
        id: "@me"
    })
}
