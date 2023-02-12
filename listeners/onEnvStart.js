'use strict'

import * as migrationsService from "../services/migrations.js"
import * as appService from "../services/app.js"


export default async (props, event, api) => {
    console.info("App is starting!")

    const app = await appService.get(api)
    return migrationsService.migrate(api, app);
}
