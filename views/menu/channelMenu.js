'use strict'

module.exports = (data, {user, guild}) => {
  if(!guild) {
    return {
      type: "text",
      value: ""
    }
  }

  return {
    type: "container",
    decoration: {
      color: 0xFFFFFFFF,
      boxShadow: {
        blurRadius: 8,
        color: 0x1A000000,
        offset: {
          dx: 0,
          dy: 1
        }
      },
    },
    padding: {
      top: 16,
      bottom: 16,
      left: 8,
      right: 8
    },
    child: {
      type: "flex",
      fillParent: true,
      direction: "vertical",
      spacing: 16,
      children: [{
        type: "view",
        name: "guildItem",
        coll: "guilds",
        query: {
          "_id": guild._id
        },
        props: {}
      }, {
        type: "flexible",
        child: {
          type: "flex",
          fillParent: true,
          scroll: true,
          spacing: 8,
          direction: "vertical",
          children: [...data.map((item) => {
            return {
              type: "view",
              name: user.expand ? "channelItem" : "channelShortItem",
              props: {
                  "isSelected": user.selectedGuild == item.guild,
                  "isOwner": item.owner == user.id,
                  "color": item.color
              }
            }
          })]
        }
      }]
    }
  }
}
