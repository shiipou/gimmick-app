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

const viewsCache = {"appGuard":{"module":"./views/guards/appGuard","key":"default"},"userGuard":{"module":"./views/guards/userGuard","key":"default"},"layout":{"module":"./views/layout","key":"default"},"main":{"module":"./views/main","key":"default"},"channelItem":{"module":"./views/menu/channelItem","key":"default"},"channelList":{"module":"./views/menu/channelList","key":"default"},"channelMenu":{"module":"./views/menu/channelMenu","key":"default"},"channelShortItem":{"module":"./views/menu/channelShortItem","key":"default"},"createGuild":{"module":"./views/menu/createGuild","key":"default"},"createGuildButton":{"module":"./views/menu/createGuildButton","key":"default"},"guildItem":{"module":"./views/menu/guildItem","key":"default"},"guildMenu":{"module":"./views/menu/guildMenu","key":"default"},"homeButton":{"module":"./views/menu/homeButton","key":"default"},"settingsButton":{"module":"./views/menu/settingsButton","key":"default"},"menu":{"module":"./views/menu","key":"default"},"navigation":{"module":"./views/navigation","key":"default"},"register":{"module":"./views/register","key":"default"},"userData":{"module":"./views/userData","key":"default"}};
export async function getView(name): Promise<View> {
    let view = viewsCache[name];
    if (!view) throw new Error(`No view defined for the name '${name}'`);
    if (!(view instanceof Function)) {
        const mod = await import(view.module);
        view = mod[view.key];
    }
    return view;
}
export const views = { appGuard: "appGuard", userGuard: "userGuard", layout: "layout", main: "main", channelItem: "channelItem", channelList: "channelList", channelMenu: "channelMenu", channelShortItem: "channelShortItem", createGuild: "createGuild", createGuildButton: "createGuildButton", guildItem: "guildItem", guildMenu: "guildMenu", homeButton: "homeButton", settingsButton: "settingsButton", menu: "menu", navigation: "navigation", register: "register", userData: "userData" };
