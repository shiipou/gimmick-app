'use strict'

import { Text, Container, Flex, View, Flexible } from "@lenra/components"

export default (data, { user, guild }) => {
  if (!guild) {
    return Text() // Empty text to show nothing in this area (because container must have a child)
  }

  return Container(
    Flex(
      View("guildItem")
        .coll("guilds")
        .query({
          "_id": guild._id
        }).props({}),
      Flexible(
        Flex(data.map((item) => {
          return View(user.expand ? "channelItem" : "channelShortItem")
            .props({
              "isSelected": user.selectedGuild == item.guild,
              "isOwner": item.owner == user.id,
              "color": item.color
            })
        })
        )
      )
    ).direction("vertical")
      .fillParent(true)
      .spacing(16)
  ).padding(16, 8)
    .decoration({
      color: 0xFFFFFFFF,
      boxShadow: {
        blurRadius: 8,
        color: 0x1A000000,
        offset: {
          dx: 0,
          dy: 1
        }
      }
    })
}
