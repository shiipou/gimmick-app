'use strict'

import { View } from "@lenra/components"

export default (data, props) => {
  return View("guards")
    .props({
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
