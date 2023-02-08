'use strict'

const { default: axios } = require("axios");
const apiServices = require('./api');

module.exports = {
    get(api, id) {
        return apiServices.executeQuery(api, "guild", {
            "id": id
        }).then((value) => {
            const guild = value.data[0]
            if(!guild) throw new Error(`Guild "${id}" not found.`)
            return guild
        })
    },
    create(api, data) {
        if(!data) throw new Error("guild data is required to create a new guild.")
        return apiServices.createDoc(api, "guild", data);
    },
    async update(api, data) {
        if(!data._id) throw new Error("Guild ID is required to update guild data.")
        return apiServices.updateDoc(api, "guild", data)
    }
}
