'use strict'

import * as apiService from './api.js';

const colors = [
    0xFF70CBF2,
    0xFFF27A86,
    0xFFF6C28B,
    0xFFA4A4A4
]

export async function get(api, id) {
    return apiService.executeQuery(api, "guilds", {
        "_id": id
    }).then((value) => {
        const guild = value.data[0];
        if (!guild)
            throw new Error(`Guild "${id}" not found.`);
        return guild;
    });
}

export async function create(api, data) {
    if (!data)
        throw new Error("Guild data is required to create a new guild.");
    return apiService.createDoc(api, "guilds", data).then((value) => value.data);
}

export async function update(api, data) {
    if (!data._id)
        throw new Error("Guild ID is required to update guild data.");
    return apiService.updateDoc(api, "guilds", data).then((value) => value.data);
}

export async function assign(api, userId, guild, isOwner = false, color = colors[Math.floor(Math.random() * colors.length)]) {
    return apiService.createDoc(api, "guild_users", {
        "guild": guild._id,
        "user": userId,
        "isOwner": isOwner,
        "color": color
    }).then((value) => value.data);
}
