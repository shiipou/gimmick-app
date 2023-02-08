'use strict'

module.exports = ([item], {user, action="selectGuild", color, isSelected, isOwner, item: itemOveride, props}) => {
  if (itemOveride) {
    item = {...item, ...itemOveride}
  }
  console.log("Rendering guild", item, action)

  return {
    type: "actionable",
    onPressed: {
      action: action,
      props: {
        "guild": item._id,
        ...props
      }
    },
    child: {
      type: "container",
      constraints: {
        minWidth: 32,
        minHeight: 32,
        maxWidth: 32,
        maxHeight: 32,
      },
      decoration: {
        color: color ?? 0xFF70cbf2,
        borderRadius: {
          topLeft: {
              x: 10,
              y: 10,
          },
          bottomRight: {
              x: 10,
              y: 10,
          },
          topRight: {
            x: 10,
            y: 10,
          },
          bottomLeft: {
            x: 10,
            y: 10,
          }
        }
      },
      child: item.icon ? {
        type: "icon",
        value: item.icon,
        size: 28,
      } : {
        type: "text",
        // Get the first letter of each word, make it uppercase, but limit it to 3 letters
        value: item.name.replace("_", " ").replace("-", " ").split(" ").map((word) => word[0]).join("").slice(0, 3).toUpperCase(),
        textAlign: "center",
        style: {
          height: 1.9,
          fontWeight: isSelected ? "bold": "normal",
          fontStyle: isSelected ? "normal": "italic"
        }
      },
    }
  }
}
