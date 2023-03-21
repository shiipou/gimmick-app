import { Api } from "../classes/Api"
import { event, props } from "../classes/types"
import User from "../classes/User"

export default async ({guild}: props, event: event, api: Api) => {
    var user:User = await api.executeQuery(User, { id: '@me' }).then((res) => res[0])

    let expand:boolean = false
    if(user.selectedGuild == guild){
        expand = !user.expand
    }
    
    user.expand = expand
    user.navigation = "home"
    user.selectedGuild = guild
    
    return api.updateDoc(user)
}
