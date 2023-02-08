'use strict'

module.exports = (data, props) => {
  return {
    type: "view",
    name: "appGuard",
    coll: "app",
    query: { },
    props: {
      "page": [{
        "name": "userGuard",
        "coll": "users",
        "query": {
          "id": "@me"
        }
      }, {
        "name": "layout",
        "coll": "users",
        "query": {
          "id": "@me"
        }
      }]
    }
  }
}
