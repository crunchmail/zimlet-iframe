module.exports = angular.module('zimletCrunchmail.contactQueue', [])

.factory('apiContactQueue', require('contactQueue/apiContactQueue.factory'))

.directive('cmListContactForm', require('contactQueue/listContactForm.directive'))
.directive('cmCreateContactForm', require('contactQueue/createContactForm.directive'));
