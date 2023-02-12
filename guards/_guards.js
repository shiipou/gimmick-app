'use strict'

import { View } from "@lenra/components"

export default (data, {page, guards = []}) => {
  let nextView = page
  let otherGuards
  
  if(guards instanceof Array && guards.length > 0) {
    [nextView, ...otherGuards] = guards
  }

  return  View(nextView.name)
            .coll(nextView.coll)
            .query(nextView.query)
            .props({
              "page": page,
              "guards": otherGuards
            })
}
