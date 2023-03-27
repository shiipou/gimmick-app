import { View, Listener } from "./classes/_types";

const listenersCache = {"createGuild":{"module":"./listeners/createGuild","key":"default"},"navigation":{"module":"./listeners/navigation","key":"default"},"register":{"module":"./listeners/register","key":"default"},"selectGuild":{"module":"./listeners/selectGuild","key":"default"},"onEnvStart":{"module":"./listeners/systemEvents","key":"onEnvStart"},"onUserFirstJoin":{"module":"./listeners/systemEvents","key":"onUserFirstJoin"},"onSessionStart":{"module":"./listeners/systemEvents","key":"onSessionStart"},"onSessionStop":{"module":"./listeners/systemEvents","key":"onSessionStop"},"onUserLeave":{"module":"./listeners/systemEvents","key":"onUserLeave"},"onEnvStop":{"module":"./listeners/systemEvents","key":"onEnvStop"}};
export async function getListener(name): Promise<Listener> {
    let listener = listenersCache[name];
    if (!listener) throw new Error(`No listener defined for the name '${name}'`);
    if (!(listener instanceof Function)) {
        const mod = await import(listener.module);
        listener = mod[listener.key];
    }
    return listener;
}
export const listeners = { createGuild: "createGuild", navigation: "navigation", register: "register", selectGuild: "selectGuild", onEnvStart: "onEnvStart", onUserFirstJoin: "onUserFirstJoin", onSessionStart: "onSessionStart", onSessionStop: "onSessionStop", onUserLeave: "onUserLeave", onEnvStop: "onEnvStop" };

const viewsCache = {"layout":{"module":"./views/layout","key":"default"},"main":{"module":"./views/main","key":"default"},"menu":{"module":"./views/menu","key":"default"},"navigation":{"module":"./views/navigation","key":"default"},"register":{"module":"./views/register","key":"default"},"userData":{"module":"./views/userData","key":"default"}};
export async function getView(name): Promise<View> {
    let view = viewsCache[name];
    if (!view) throw new Error(`No view defined for the name '${name}'`);
    if (!(view instanceof Function)) {
        const mod = await import(view.module);
        view = mod[view.key];
    }
    return view;
}
export const views = { layout: "layout", main: "main", menu: "menu", navigation: "navigation", register: "register", userData: "userData" };
