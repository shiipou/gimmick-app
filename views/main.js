'use strict'

module.exports = (data, props) => {
  return {
    type: "view",
    name: "guards",
    props: {
      page: {
        name: "layout",
        coll: "users",
        query: {
          "id": "@me"
        }
      },
      guards: [{
        name: "appGuard",
        coll: "app",
        query: { }
      }, {
        name: "userGuard",
        coll: "users",
        query: {
          "id": "@me"
        }
      }]
    }
  }
}
