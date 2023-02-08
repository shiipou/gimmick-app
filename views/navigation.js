'use strict'

module.exports = ([guild], {user}) => {
  return {
    type: "view",
    name: user.navigation,
    props: {
      user,
      guild
    }
  }
}
