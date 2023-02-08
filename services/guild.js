'use strict'

const apiServices = require('./api');

const colors = [
    0xFF70CBF2,
    0xFFF27A86,
    0xFFF6C28B,
    0xFFA4A4A4
]

module.exports = {
    async get(api, id) {
        return apiServices.executeQuery(api, "guilds", {
            "_id": id
        }).then((value) => {
            const guild = value.data[0]
            if(!guild) throw new Error(`Guild "${id}" not found.`)
            return guild
        })
    },
    async create(api, data) {
        if(!data) throw new Error("Guild data is required to create a new guild.")
        return apiServices.createDoc(api, "guilds", data).then((value) => value.data)
    },
    async update(api, data) {
        if(!data._id) throw new Error("Guild ID is required to update guild data.")
        return apiServices.updateDoc(api, "guilds", data).then((value) => value.data)
    },
    async assign(api, userId, guild, isOwner=false, color=colors[Math.floor(Math.random() * colors.length)]) {
        return apiServices.createDoc(api, "guild_users", {
            "guild": guild._id,
            "user": userId,
            "isOwner": isOwner,
            "color": color
        }).then((value) => value.data);
    }
}
