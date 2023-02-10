'use strict'

import * as apiService from './api.js';

export async function get(api) {
    return apiService.executeQuery(api, "app", {}).then((value) => {
        return value.data[0];
    });
}

export async function create(api, data) {
    if (!data)
        throw new Error("App data is required to create a new app.");
    return apiService.createDoc(api, "app", data).then((value) => value.data);
}

export async function update(api, data) {
    if (!data._id)
        throw new Error("App ID is required to update app data.");
    return apiService.updateDoc(api, "app", data).then((value) => value.data);
}
