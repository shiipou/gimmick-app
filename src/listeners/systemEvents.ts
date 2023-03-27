import { Api } from '../classes/_Api'
import { event, props } from '../classes/_types'
import App from '../classes/App'
import User from '../classes/User'

export async function onEnvStart(_props: props, _event: event, api: Api) {
    console.info("App is starting!")

    await App.migrate(api)

    return {}
}

export async function onUserFirstJoin(_props: props, _event: event, api: Api) {
    console.info("User is joining for the first time!")
    
    return api.createDoc(new User())
}

export async function onSessionStart(_props: props, _event: event, api: Api) {

}

export async function onSessionStop(_props: props, _event: event, api: Api) {

}

export async function onUserLeave(_props: props, _event: event, api: Api) {

}

export async function onEnvStop(_props: props, _event: event, api: Api) {

}
