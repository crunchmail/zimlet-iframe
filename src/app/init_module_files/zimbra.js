module.exports = angular.module('zimletCrunchmail.zimbra', [])

.constant('zimbra', require('zimbra/zimbra.constant'))

.factory('zimbraHandler', require('zimbra/zimbraHandler.factory'));
