'use strict'

const apiServices = require('./api');

module.exports = {
    async get(api) {
        return apiServices.executeQuery(api, "app", { }).then((value) => {
            return value.data[0]
        })
    },
    async create(api, data) {
        if(!data) throw new Error("App data is required to create a new app.")
        return apiServices.createDoc(api, "app", data).then((value) => value.data)
    },
    async update(api, data) {
        if(!data._id) throw new Error("App ID is required to update app data.")
        return apiServices.updateDoc(api, "app", data).then((value) => value.data)
    }
}
