module.exports = angular.module('zimletCrunchmail.applications', [])

.factory('apiApplications', require('applications/apiApplications.factory'))
.directive('cmCreateAppApiDialog', require('applications/createAppApiDialog.directive'))
.directive('cmCreateAppSmtpDialog', require('applications/createAppSmtpDialog.directive'))
.directive('cmFormRegen', require('applications/formRegen.directive'))
.directive('cmApplications', require('applications/applications.directive'));
