module.exports = angular.module('zimletCrunchmail.user', [])

.factory('apiUser', require('user/apiUser.factory'))

.directive('cmMenuProfile', require('user/menuProfile.directive'))
.directive('cmProfile', require('user/profile.directive'));
