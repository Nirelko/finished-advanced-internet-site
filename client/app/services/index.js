import angular from 'angular';
import angularResource from 'angular-resource';

const MODULE_NAME = 'advanced.services';

angular.module(MODULE_NAME, [angularResource]);

require('./user.service');
require('./post.service');
require('./map.service');
require('./logged-user.service');

export default MODULE_NAME;
