'use strict'

module.exports = ([app], {page}) => {
  if (!app || app.maintenance) {
    return {
      type: "container",
      child: {
        type: "text",
        value: "Gimmick is currently under maintenance. Please try again later."
      }
    }
  }
  
  let nextPage = page
  if(page instanceof Array) {
    nextPage = page.splice(0, 1)[0]
  }
  return {
    type: "view",
    name: nextPage.name,
    coll: nextPage.coll,
    query: nextPage.query,
    props: {
      "page": page
    }
  }
}
