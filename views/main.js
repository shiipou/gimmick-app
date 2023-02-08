'use strict'

module.exports = (data, props) => {
  return {
    type: "view",
    name: "navigation",
    coll: "users",
    query: {
      "id": "@me"
    }
  }
}
