import { Component, Flex, Flexible, IComponent, View } from "@lenra/components"
import { Api } from "../classes/Api"
import { data, props } from "../classes/types"
import { views } from "../index.gen"

export default function ([user]: data, _props: props): Component<IComponent> | IComponent {
    return Flex([
        View("guildMenu")
            .coll("guild_users")
            .query({
                "user": user.id
            }).props({ user }),
        Flexible(
            View("navigation")
                .coll("guilds")
                .query({
                    "_id": user.selectedGuild ?? "null"
                }).props({ user })
        )
    ]).direction("horizontal")
        .crossAxisAlignment("center")
        .fillParent(true)
}
