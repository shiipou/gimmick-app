'use strict'

module.exports = (data, {user}) => {
    return {
        type: "flex",
        direction: "horizontal",
        crossAxisAlignment: "center",
        fillParent: true,
        children: [{
            type: "view",
            name: "menu",
            coll: "guild_users",
            query: {
                "user": user._id
            },
            props: { user }
        },
        {
            type: "view",
            name: "home",
            coll: "guild",
            query: {
                "_id": user.selectedGuild
            },
            props: { user }
        }]
    }
}
