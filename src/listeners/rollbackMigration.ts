import { props, event } from "../classes/_types";
import { Api } from "../classes/_Api";
import App from "../classes/App"

export default async (_props: props, event: props, api: Api) => {
    console.debug("Rolling back migration", event)
    return App.rollback_migration(api, event.n_migrations)
}