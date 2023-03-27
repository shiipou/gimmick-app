import { Component, Flex, Flexible, IComponent, View } from "@lenra/components"
import { Api } from "../classes/_Api"
import { data, props } from "../classes/_types"
import { views } from "../index.gen"

export default function ([guild]: data, { user }: props): Component<IComponent> | IComponent {
    return Flex([
        View("channelMenu")
            .coll("guild_users")
            .query({
                user: user?.id,
                guild: guild?._id
            })
            .props({ user, guild }),
        Flexible(
            View(user.navigation)
                .coll("channels")
                .query({
                    guild: guild?._id
                })
                .props({
                    user,
                    guild
                })
        )
    ]).direction("horizontal")
        .crossAxisAlignment("center")
        .fillParent(true)
}

