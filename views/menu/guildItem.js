'use strict'

module.exports = ([guild], props) => {

  return {
    type: "actionable",
    onPressed: {
      action: "selectGuild",
      props: {
        "guild": guild._id
      }
    },
    child: {
      type: "container",
      constraints: {
        minWidth: 48,
        minHeight: 48,
        maxWidth: 48,
        maxHeight: 48
      },
      decoration: {
        color: props?.color ?? 0xFF70cbf2,
        borderRadius: {
          topLeft: {
              x: 20,
              y: 20
          },
          bottomRight: {
              x: 20,
              y: 20
          },
          topRight: {
            x: 20,
            y: 20
          },
          bottomLeft: {
            x: 20,
            y: 20
          }
        }
      },
      child: {
        type: "text",
        // Get the first letter of each word, make it uppercase, but limit it to 3 letters
        value: guild.name.replace("_", " ").replace("-", " ").split(" ").map((word) => word[0]).join("").slice(0, 3).toUpperCase(),
        textAlign: "center",
        style: {
          fontSize: 24,
          height: 1.7,
          fontWeight: props?.isSelected ? "bold": "normal",
          fontStyle: props?.isSelected ? "normal": "italic"
        }
      },
    }
  }
}
