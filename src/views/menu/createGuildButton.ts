'use strict'

import { Actionable, Container, Text } from "@lenra/components"
import { data, props } from "../../classes/types"

export default (_data: data, _props: props) => {
  return Actionable(
    Container(
      Text("+")
        .textAlign("center")
        .style({
          fontSize: 24,
          height: 1.7
        })
    ).constraints({
      minWidth: 48,
      minHeight: 48,
      maxWidth: 48,
      maxHeight: 48
    }).borderRadius({
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
    }).color(0xFFA4A4A4)
  ).onPressed("navigation", {
    page: "createGuild"
  })
}
