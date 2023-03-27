'use strict'

import { Text, Container, Flex, View, Flexible } from "@lenra/components"
import { data, props } from "../../classes/_types"

export default ([item]: data, { user, guild }: props) => {
  if (!guild) {
    return Text("") // Empty text to show nothing in this area (because container must have a child)
  }

  return Container(
    Flex([
      View("guildItem")
        .coll("guilds")
        .query({
          "_id": guild._id
        }).props({
          color: item?.color
        }),
      Flexible(
        View("channelList")
          .coll("channels")
          .query({
            "guild": guild._id
          })
      )
    ]).direction("vertical")
      .fillParent(true)
      .spacing(16)
  ).padding({
    top: 16,
    bottom: 16,
    left: 8,
    right: 8
  })
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
