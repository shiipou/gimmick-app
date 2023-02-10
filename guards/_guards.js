'use strict'

module.exports = (data, {page, guards = []}) => {
  let nextView = page
  let otherGuards
  
  if(guards instanceof Array && guards.length > 0) {
    [nextView, ...otherGuards] = guards
  }

  return {
    type: "view",
    name: nextView.name,
    coll: nextView.coll,
    query: nextView.query,
    props: {
      "page": page,
      "guards": otherGuards
    }
  }
}
