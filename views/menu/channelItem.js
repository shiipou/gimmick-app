'use strict'

import { Actionable, Container, Text } from "@lenra/components"

export default ([item], props) => {

  return Actionable(
    Container(
      Text(
        item.name
      ).textAlign("center")
        .style({
          fontSize: 18,
          fontWeight: "bold"
        })
    ).borderRadius({
      topLeft: {
        x: 20,
        y: 20
      },
      bottomRight: {
        x: 20,
        y: 20
      },
      topRight: {
        x: 20,
        y: 20
      },
      bottomLeft: {
        x: 20,
        y: 20
      }
    })
  ).onPressed("selectGuild", {
    "guild": item._id
  })
}
