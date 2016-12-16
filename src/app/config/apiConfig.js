(function () {
	'use strict';

	var apiConfig = function ($httpProvider){

		$httpProvider.interceptors.push('authInterceptor');

	};

	module.exports = apiConfig;
}());
