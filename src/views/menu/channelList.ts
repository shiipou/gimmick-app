'use strict'

import { Text, Container, Flex, View, Flexible } from "@lenra/components"
import { data, props } from "../../classes/types"

export default (channels: data, {user}: props) => {
  return Flex(channels.map((channel) => {
    return View(user.expand ? "channelItem" : "channelShortItem")
      .props({
        "isSelected": user.selectedGuild == channel.guild,
        "isOwner": channel.owner == user.id,
        "color": channel.color
      })
  }))
}
