import { Api } from "../src/classes/_Api"

export function up(api: Api) {
    console.log("Updating migration 20230502_100100_initial_migration.ts")
}

export function down(api: Api) {
    console.log("Rollback migration 20230502_100100_initial_migration.ts")
}