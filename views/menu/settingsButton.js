'use strict'

module.exports = (data, props) => {
  return {
    type: "actionable",
    onPressed: {
      action: "navigation",
      props: {
        "page": "settings"
      }
    },
    child: {
      type: "container",
      constraints: {
        minWidth: 48,
        minHeight: 48,
        maxWidth: 48,
        maxHeight: 48,
      },
      decoration: {
        color: 0xFFA4A4A4,
        borderRadius: {
          topLeft: {
              x: 20,
              y: 20,
          },
          bottomRight: {
              x: 20,
              y: 20,
          },
          topRight: {
            x: 20,
            y: 20,
          },
          bottomLeft: {
            x: 20,
            y: 20,
          }
        }
      },
      child: {
        type: "icon",
        value: "settings",
        size: 32,
      }
    }
  }
}
