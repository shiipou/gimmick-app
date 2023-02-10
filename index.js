'use strict'
// Views

module.exports = async () => {
  return {
    views: {
      main: require('./views/main'),
      guards: require('./guards/_guards'),
      appGuard: require('./guards/appGuard'),
      userGuard: require('./guards/userGuard'),
      userData: require('./views/userData'),
      layout: require('./views/layout'),
      guildMenu: require('./views/menu/guildMenu'),
      channelMenu: require('./views/menu/channelMenu'),
      guildItem: require('./views/menu/guildItem'),
      channelItem: require('./views/menu/channelItem'),
      channelShortItem: require('./views/menu/channelShortItem'),
      home: require('./views/userData'),
      homeButton: require('./views/menu/homeButton'),
      settingsButton: require('./views/menu/settingsButton'),
      createGuildButton: require('./views/menu/createGuildButton'),
      createGuild: require('./views/createGuild'),
      navigation: require('./views/navigation'),
      register: require('./views/register')
    },
    listeners: {
      register: require('./listeners/register'),
      createGuild: require('./listeners/createGuild'),
      selectGuild: require('./listeners/selectGuild'),
      navigation: require('./listeners/navigation'),
      onEnvStart: require('./listeners/onEnvStart'),
      onSessionStart: require('./listeners/onSessionStart'),
      onUserFirstJoin: require('./listeners/onUserFirstJoin')
    },
    rootView: 'main'
  }
}
