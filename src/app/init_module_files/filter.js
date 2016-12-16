module.exports = angular.module('zimletCrunchmail.filter', [])

.filter('csvToJson', require('_filter/csvToJson.filter'))
.filter('errorFix', require('_filter/errorFix.filter'));
