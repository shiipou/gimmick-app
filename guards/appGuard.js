'use strict'

import { Container, Text } from "@lenra/components"

import { default as GuardsModule} from './_guards.js'

export default ([app], {page, guards}) => {
  if (!app || app?.maintenance) {
    return Container(
      Text("Gimmick is currently under maintenance. Please try again later.")
    )
  }

  return GuardsModule([], {page, guards})
}
