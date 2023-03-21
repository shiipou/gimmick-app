import { props, event } from "../classes/types";
import { Api } from "../classes/Api";
import User from "../classes/User"

export default async (_props: props, event: event, api: Api) => {
    const user = await api.executeQuery(User, { id: '@me' }).then((res) => res[0])

    if (!event.value.username)
        throw new Error("Username is required to check if it is available.")

    user.username = event.value.username

    do {
        user.tag = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
    } while(!(await tag_available(api, user.username, user.tag)))

    user.navigation = "home"

    return await api.updateDoc(user)
}

async function tag_available(api: Api, username: string, tag: string) {
    return api.executeQuery(User, {
        "username": username,
        "tag": tag
    }).then((value) => {
        return value[0] == undefined;
    })
}
