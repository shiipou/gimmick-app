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
      right: 8,
    },
    child: {
      type: "flex",
      fillParent: true,
      direction: "vertical",
      spacing: 16,
      children: [{
        type: "view",
        name: "menuItem",
        props: {
          "item": {
            "icon": "home",
          },
          "action": "navigation",
          "isSelected": user.navigation == "home",
          "props": {
            "page": "home"
          },
          "color": 0xFFA4A4A4
        }
      }, {
        type: "flexible",
        child: {
          type: "flex",
          fillParent: true,
          direction: "vertical",
          children: [...data.map((item) => {
            console.log("Rendering item", item)
            return {
              type: "view",
              name: "menuItem",
              coll: "guild",
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
            name: "menuItem",
            props: {
              item: {
                name: "+",
              },
              color: 0xFFA4A4A4
            }
          }]
        }
      }, {
          type: "view",
          name: "menuItem",
          props: {
            "item": {
              "icon": "settings",
            },
            "action": "navigation",
            "isSelected": user.navigation == "settings",
            "props": {
              "page": "settings"
            },
            "color": 0xFFA4A4A4
        }
      }]
    }
  }
}
