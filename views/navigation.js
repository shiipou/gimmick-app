'use strict'

module.exports = ([guild], {user}) => {
  return {
    type: "flex",
    direction: "horizontal",
    crossAxisAlignment: "center",
    fillParent: true,
    children: [{
      type: "view",
      name: "channelMenu",
      props: {
        user,
        guild
      }
    },
    {
      type: "flexible",
      child: {
        type: "view",
        name: user.navigation,
        coll: "channels",
        query: {
          "guild": guild?._id
        },
        props: {
          user,
          guild
        }
      }
    }]
  }
}
