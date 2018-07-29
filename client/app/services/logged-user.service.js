import angular from 'angular';

angular.module('advanced.services')
  .service('LoggedUser', ($state, $q) => {
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
        var deferred = $q.defer();

        if (!loggedUser) {
            deferred.reject(-1);
            $state.transitionTo('shell.login', {}, { location: 'replace' });
        } else {
            console.log(loggedUser);
            deferred.resolve(loggedUser['_id']);
        }

        return deferred.promise;
    };

    return {
      get,
      login,
      onLogin: cb => {
        onLogin.push(cb);
      },
      logout,
      onLogout: cb => {
        onLogout.push(cb);
      },
      ensureLogged
    };
  });