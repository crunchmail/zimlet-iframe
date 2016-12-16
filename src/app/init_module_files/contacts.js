module.exports = angular.module('zimletCrunchmail.contacts', [])

.factory('recipientsMessage', require('contacts/contacts.factory'))

.directive('cmContacts', require('contacts/contacts.directive'));
