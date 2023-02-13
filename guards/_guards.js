'use strict'

import { View, ViewImpl } from "@lenra/components"

export default (_data, { page, guards = [] }) => {
  let nextView = page
  if (guards instanceof Array && guards.length > 0) {
    let guard = guards[0]
    if (!(guard instanceof ViewImpl)) {
      guard = View(guard.name)
        .coll(guard.coll)
        .query(guard.query)
    }
    nextView = guard.props({ page, guards: guards.slice(1) })
  }
  return nextView
}
