'use strict'

import { View } from "@lenra/components"

import { default as GuardsModule } from '../guards/_guards.js'

export default (data, props) => {
  return GuardsModule([], {
      page: View("layout")
        .coll("users")
        .query({
          "id": "@me"
        }),
      guards: [
        View("appGuard")
          .coll("app")
          .query({}),
        View("userGuard")
          .coll("users")
          .query({
            "id": "@me"
          })
      ]
    })
}
