'use strict'

import { Container, Flex, Flexible, View } from "@lenra/components"
import { data, props } from "../../classes/types"

export default (data: data, { user }: props) => {
  return Container(
    Flex([
      View("homeButton"),
      Flexible(
        Flex([
          ...data.map((item) => {
            console.log("Item", item)
            return View("guildItem")
              .coll("guilds")
              .query({
                "_id": item.guild
              })
              .props({
                "isSelected": user.selectedGuild == item.guild,
                "isOwner": item.owner == user.id,
                "color": item.color
              })
          }),
          View("createGuildButton"),
        ])
          .scroll(true)
          .spacing(8)
          .direction("vertical"),
      ),
      View("settingsButton"),
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
