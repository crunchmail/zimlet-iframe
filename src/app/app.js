(function () {
  'use strict';
  /*
  * Get dependencies
  */

  require('init_libraries');

  //Global directives & Factory
  require('./init_module_files/factory');
  require('./init_module_files/filter');
  require('./init_module_files/directives');

  //Load modules
  require('./init_module_files/category');
  require('./init_module_files/message');
  require('./init_module_files/domains');
  require('./init_module_files/dashboard');
  require('./init_module_files/login');
  require('./init_module_files/recipients');
  require('./init_module_files/contactQueue');
  require('./init_module_files/user');
  require('./init_module_files/zimbra');
  require('./init_module_files/debug');
  require('./init_module_files/reports');
  require('./init_module_files/organizations');
  require('./init_module_files/applications');
  require('./config/config');

  //init module angular
  var zimletCrunchmail = angular.module('zimletCrunchmail', [
    'external-libraries',
    'appConfig',
    'zimletCrunchmail.zimbra',
    'zimletCrunchmail.factory',
    'zimletCrunchmail.directives',
    'zimletCrunchmail.message',
    'zimletCrunchmail.domains',
    'zimletCrunchmail.dashboard',
    'zimletCrunchmail.category',
    'zimletCrunchmail.reports',
    'zimletCrunchmail.login',
    'zimletCrunchmail.recipients',
    'zimletCrunchmail.filter',
    'zimletCrunchmail.contactQueue',
    'zimletCrunchmail.user',
    'zimletCrunchmail.debug',
    'zimletCrunchmail.organization',
    'zimletCrunchmail.applications'
  ])
  .directive('placeholder', require('_directives/placeholder.directive'));

  // expose libraries
  zimletCrunchmail.constant('_', require('lodash'));
  zimletCrunchmail.constant('moment', require('moment'));

  //Config files
  zimletCrunchmail.config(require('./routes'));

  //On run
  zimletCrunchmail.run(require('./on_run'));


  //Filter in template to encode url
  zimletCrunchmail.filter('encodeUrl', function($window) {
    return $window.btoa;
  });


}());
