'use strict'

const GuardsModule = require('./_guards')

module.exports = ([app], {page, guards}) => {
  if (!app || app.maintenance) {
    return {
      type: "container",
      child: {
        type: "text",
        value: "Gimmick is currently under maintenance. Please try again later."
      }
    }
  }
  
  return GuardsModule([], {page, guards})
}
