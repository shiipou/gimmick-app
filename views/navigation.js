'use strict'

import { Flex, View, Flexible } from "@lenra/components"

export default ([guild], { user }) => {
  return Flex(
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
  ).direction("horizontal")
    .crossAxisAlignment("center")
    .fillParent(true)
}
