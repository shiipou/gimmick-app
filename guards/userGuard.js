'use strict'

module.exports = ([user], {page}) => {
  if(user.username == null) {
    return {
      type: "view",
      name: "register"
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
