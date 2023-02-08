'use strict'

const migrationsService = require("../services/migrations")
const appService = require("../services/app")


module.exports = async (props, event, api) => {
    console.info("App is starting!")

    appService.get(api).then(migrationsService.migrate(api))
    return {}
}
