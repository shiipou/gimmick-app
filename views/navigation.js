'use strict'

module.exports = ([user], props) => {
    if(user.username == null) {
        user.navigation = "register"
    }

    switch (user.navigation) {
        case "register":
            return {
                type: "view",
                name: "register"
            }
        case "createGuild":
            return {
                type: "view",
                name: "createGuild",
                props: {
                    user
                }
            }
        default:
            return {
                type: "view",
                name: "layout",
                props: {
                    user
                }
            }
    }
}
