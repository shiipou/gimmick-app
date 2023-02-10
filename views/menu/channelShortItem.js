'use strict'

import { Actionable, Container, Text } from "@lenra/components"

export default ([item], { user, action = "selectGuild", color, isSelected, isOwner, props }) => {

  return Actionable(
    Container(
      Text(
        item.name.replace("_", " ").replace("-", " ").split(" ").map((word) => word[0]).join("").slice(0, 3).toUpperCase(),
      ).textAlign("center")
        .style({
          fontSize: 18,
          fontWeight: "bold"
        })
    ).constraints({
      minWidth: 24,
      minHeight: 24,
      maxWidth: 24,
      maxHeight: 24
    }).color(color ?? 0xFF70cbf2)
    .borderRadius({
      topLeft: {
        x: 10,
        y: 10
      },
      bottomRight: {
        x: 10,
        y: 10
      },
      topRight: {
        x: 10,
        y: 10
      },
      bottomLeft: {
        x: 10,
        y: 10
      }
    })
  ).onPressed({
    action: "selectGuild",
    props: {
      "guild": item._id
    }
  })
}