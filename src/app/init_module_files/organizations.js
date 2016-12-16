module.exports = angular.module('zimletCrunchmail.organization', [])

.factory('apiOrganization', require('organizations/apiOrganization.factory'))
.directive('cmCreateOrganizationDialog', require('organizations/dialogCreateOrganization.directive'))
.directive('cmEditOrganization', require('organizations/editOrganization.directive'))
.directive('cmInviteUserDialog', require('organizations/inviteUserDialog.directive'))
.directive('cmListOrganizations', require('organizations/listOrganizations.directive'));
