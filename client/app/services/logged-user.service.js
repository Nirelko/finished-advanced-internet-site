import angular from 'angular';

angular.module('advanced.services')
  .service('LoggedUser', $state => {
    let loggedUser;
    const onLogin = [];
    const onLogout = [];

    const login = user => {
      loggedUser = user;
      onLogin.forEach(x => x());
    };

    const logout = () => {
      loggedUser = null;
      onLogout.forEach(x => x());
    };

    const get = () => loggedUser;

    const ensureLogged = () => {
      if (!loggedUser) {
        $state.transitionTo('shell.login', {}, { location: 'replace' });
      }
    };

    return {
      get,
      login,
      onLogin: cb => {
        onLogin.push(cb)
      },
      logout,
      onLogout: cb => {
        onLogout.push(cb)
      },
      ensureLogged
    };
  });