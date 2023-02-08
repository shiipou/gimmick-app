'use strict'

const apiServices = require('./api');

module.exports = {
    async get(api, id="@me") {
        return apiServices.executeQuery(api, "users", {
            "id": id
        }).then((value) => {
            const user = value.data[0]
            if(!user) throw new Error(`User "${id}" not found.`)
            return user
        });
    },
    async create(api, data) {
        if(!data) throw new Error("User data is required to create a new user.")
        return apiServices.createDoc(api, "users", data).then((value) => value.data)
    },
    async update(api, data) {
        if(!data._id) throw new Error("User ID is required to update user data.")
        return apiServices.updateDoc(api, "users", data).then((value) => value.data)
    },
    async find(api, username, tag) {
        if(!username) throw new Error("Username is required to find a user.")
        if(!tag) throw new Error("Tag is required to find a user.")
        return apiServices.executeQuery(api, "users", {
            "username": username,
            "tag": tag
        }).then((value) => {
            return value.data[0]
        })
    },
    async available(api, username, tag) {
        if(!username) throw new Error("Username is required to check if it is available.")
        if(!tag) throw new Error("Tag is required to check if it is available.")
        return this.find(api,  username, tag).then((value) => {
            return value == undefined
        })
    }
}
