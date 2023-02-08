'use strict'
// Views

module.exports = async () => {
  return {
    views: {
      main: require('./views/main'),
      userData: require('./views/userData'),
      layout: require('./views/layout'),
      menu: require('./views/menu'),
      menuItem: require('./views/menuItem'),
      home: require('./views/userData'),
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