import { Api } from '../classes/_Api';
import Guild, { GuildUsers } from '../classes/Guild';
import User from '../classes/User';
import { event, props } from '../classes/_types';

export default async function (user: User, event: event, api: Api) {
    console.log("createGuild", event.value.name)
    const guild = await api.createDoc(new Guild(event.value.name))

    await guild.assign(user._id, true, null, api)
    
    const updated_user = await api.getDoc(User, user._id)
    updated_user.navigation = "home"
    
    return api.updateDoc(updated_user)

    return {};
}