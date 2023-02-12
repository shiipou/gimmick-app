'use strict'
// Views

export default async () => {
  return {
    views: {
      main: import('./views/main.js'),
      guards: import('./guards/_guards.js'),
      appGuard: import('./guards/appGuard.js'),
      userGuard: import('./guards/userGuard.js'),
      userData: import('./views/userData.js'),
      layout: import('./views/layout.js'),
      guildMenu: import('./views/menu/guildMenu.js'),
      channelMenu: import('./views/menu/channelMenu.js'),
      channelList: import('./views/menu/channelList.js'),
      guildItem: import('./views/menu/guildItem.js'),
      channelItem: import('./views/menu/channelItem.js'),
      channelShortItem: import('./views/menu/channelShortItem.js'),
      home: import('./views/userData.js'),
      homeButton: import('./views/menu/homeButton.js'),
      settingsButton: import('./views/menu/settingsButton.js'),
      createGuildButton: import('./views/menu/createGuildButton.js'),
      createGuild: import('./views/createGuild.js'),
      navigation: import('./views/navigation.js'),
      register: import('./views/register.js')
    },
    listeners: {
      register: import('./listeners/register.js'),
      createGuild: import('./listeners/createGuild.js'),
      selectGuild: import('./listeners/selectGuild.js'),
      navigation: import('./listeners/navigation.js'),
      onEnvStart: import('./listeners/onEnvStart.js'),
      onSessionStart: import('./listeners/onSessionStart.js'),
      onUserFirstJoin: import('./listeners/onUserFirstJoin.js')
    },
    rootView: 'main'
  }
}
