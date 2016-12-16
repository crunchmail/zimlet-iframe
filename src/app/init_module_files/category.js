module.exports = angular.module('zimletCrunchmail.category', [])

.factory('apiCategory', require('category/apiCategory.factory'))

.directive('cmCreateCategory', require('category/createCategory.directive'))
.directive('cmListCategories', require('category/listCategories.directive'))
.directive('cmStatCategory', require('category/statCategory.directive'));
