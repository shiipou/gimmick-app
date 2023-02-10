'use strict'

const GuardsModule = require('./_guards')

module.exports = ([user], {page, guards}) => {
  if(user.username == null) {
    return {
      type: "view",
      name: "register"
    }
  }

  return GuardsModule([], {page, guards})
}
