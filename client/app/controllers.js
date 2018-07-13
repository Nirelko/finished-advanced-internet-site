import angular from 'angular';

const MODULE_NAME = 'advanced.controllers';

angular.module(MODULE_NAME, ['advanced.services']);

require('./shell/shell');
require('./main/main');
require('./admin/admin');
require('./about/about');
require('./register/register');
require('./login/login');
require('./statistics/statistics');

export default MODULE_NAME;