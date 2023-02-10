'use strict'

import * as apiService from './api.js';

export async function get(api, id = "@me") {
    return apiService.executeQuery(api, "users", {
        "id": id
    }).then((value) => {
        const user = value.data[0];
        if (!user)
            throw new Error(`User "${id}" not found.`);
        return user;
    });
}

export async function create(api, data) {
    if (!data)
        throw new Error("User data is required to create a new user.");
    return apiService.createDoc(api, "users", data).then((value) => value.data);
}

export async function update(api, data) {
    if (!data._id)
        throw new Error("User ID is required to update user data.");
    return apiService.updateDoc(api, "users", data).then((value) => value.data);
}

export async function find(api, username, tag) {
    if (!username)
        throw new Error("Username is required to find a user.");
    if (!tag)
        throw new Error("Tag is required to find a user.");
    return apiService.executeQuery(api, "users", {
        "username": username,
        "tag": tag
    }).then((value) => {
        return value.data[0];
    });
}

export async function available(api, username, tag) {
    if (!username)
        throw new Error("Username is required to check if it is available.");
    if (!tag)
        throw new Error("Tag is required to check if it is available.");
    return find(api, username, tag).then((value) => {
        return value == undefined;
    });
}
