'use strict'

module.exports = ([user], props) => {
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
                "user": user.id
            },
            props: { user }
        },
        {
            type: "flexible",
            child: {
                type: "view",
                name: "navigation",
                coll: "guilds",
                query: {
                    "_id": user.selectedGuild
                },
                props: { user }
            }
        }]
    }
}
