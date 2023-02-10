'use strict'

module.exports = ([item], props) => {

  return {
    type: "actionable",
    onPressed: {
      action: "selectGuild",
      props: {
        "guild": item._id
      }
    },
    child: {
      type: "container",
      decoration: {
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
        value: item.name,
        textAlign: "center",
        style: {
          fontSize: 18,
          fontWeight: "bold"
        }
      },
    }
  }
}
