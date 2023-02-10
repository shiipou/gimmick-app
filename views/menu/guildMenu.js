'use strict'

module.exports = (data, {user}) => {
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
        name: "homeButton"
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
              name: "guildItem",
              coll: "guilds",
              query: {
                "_id": item.guild
              },
              props: {
                  "isSelected": user.selectedGuild == item.guild,
                  "isOwner": item.owner == user.id,
                  "color": item.color
              }
            }
          }), {
            type: "view",
            name: "createGuildButton"
          }]
        }
      }, {
          type: "view",
          name: "settingsButton"
      }]
    }
  }
}
