module.exports = angular.module('zimletCrunchmail.directives', [])

.directive('cmMenu', require('menu/menu.directive'))

.directive('cmIsolateScrolling', require('_directives/isolateScrolling.directive'))
.directive('cmChangeLanguage', require('_directives/changeLanguage.directive'))
.directive('cmPosSticky', require('_directives/posSticky.directive'))
.directive('cmFileReader', require('_directives/fileReader.directive'))
.directive('cmStatusLegend', require('_directives/statusLegend.directive'))
.directive('cmDcharts', require('_directives/dcharts.directive'))
.directive('cmDirDateJs', require('_directives/dirDateJs.directive'))
.directive('cmDropDown', require('_directives/dropDown.directive'))
.directive('cmCsvUpload', require('_directives/csvUpload.directive'))
.directive('cmConfirm', require('_directives/confirm.directive'));
