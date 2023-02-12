'use strict'

import { Flex, View, Flexible } from "@lenra/components"

export default ([user], props) => {
  return Flex(
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
  ).direction("horizontal")
    .crossAxisAlignment("center")
    .fillParent(true)
}
