'use strict'

import { default as axios } from "axios";

export function getUserGuilds(api, id) {
    return axios.get(`${api.url}/app/colls/${coll}/docs/${id}`, options(api));
}

export function createDoc(api, coll, doc) {
    return axios.post(`${api.url}/app/colls/${coll}/docs`, doc, options(api));
}

export function updateDoc(api, coll, doc) {
    return axios.put(`${api.url}/app/colls/${coll}/docs/${doc._id}`, doc, options(api));
}

export function deleteDoc(api, coll, doc) {
    return axios.delete(`${api.url}/app/colls/${coll}/docs/${doc._id}`, options(api));
}

export function executeQuery(api, coll, query) {
    return axios.post(`${api.url}/app/colls/${coll}/docs/find`, query, options(api));
}

function options(api) {
    return { headers: headers(api) }
}

function headers(api) {
    return { Authorization: `Bearer ${api.token}` }
}
