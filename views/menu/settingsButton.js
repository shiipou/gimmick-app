'use strict'

import { Actionable, Container, Icon } from "@lenra/components"

export default (data, props) => {
  return Actionable(
    Container(
      Icon("settings")
        .size(32)
    ).constraints({
      minWidth: 48,
      minHeight: 48,
      maxWidth: 48,
      maxHeight: 48
    }).decoration({
      color: 0xFFA4A4A4,
      borderRadius: {
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
      }
    })
  ).onPressed("navigation", {
    page: "home"
  })
}
