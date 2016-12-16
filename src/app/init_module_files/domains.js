module.exports = angular.module('zimletCrunchmail.domains', [])

.factory('apiDomains', require('domains/apiDomains.factory'))
.directive('cmCreateDomainDialog', require('domains/dialogCreateDomain.directive'))
.directive('cmEditDomain', require('domains/editDomain.directive'))
.directive('cmListDomains', require('domains/listDomains.directive'));
