import { Api } from "../classes/_Api"
import { props, event } from "../classes/_types"
import User from "../classes/User"

export default async (props: props, event: event, api: Api) => {
    const user:User = await api.executeQuery(User, { id: '@me'}).then((res) => res[0])
    user.navigation = props.page
    return api.updateDoc(user)
}
