'use strict'

import { Container, Flex, View } from "@lenra/components"

export default (data, { user }) => {
  return Container(
    Flex([
      View("homeButton"),
      Flex([
        ...data.map((item) => {
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
      View("settingsButton"),
    ])
  )
}
