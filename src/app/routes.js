(function () {
  'use strict';

  var Routes = function($routeProvider, $locationProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'views/login/login.layout.html',
        bodyClass: 'hide-menu'
      })
      .when('/password-reset', {
        templateUrl: 'views/login/reset.layout.html',
        bodyClass: 'hide-menu'
      })
      .when('/register', {
          templateUrl: './views/user/register.layout.html',
          bodyClass: 'hide-menu'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard/dashboard.layout.html'
      })
      .when('/create-message', {
        templateUrl: 'views/message/createMessage.layout.html'
      })
      .when('/categories', {
        templateUrl: 'views/category/listCategories.layout.html'
      })
      .when('/statscategory/:url', {
        templateUrl: 'views/category/statCategory.layout.html'
      })
      .when('/detailmessage/:url/:status?', {
        templateUrl: 'views/message/messageDetails.layout.html'
      })
      .when('/messages/:status', {
        templateUrl: 'views/message/listMessage.layout.html'
      })
      .when('/statsmessage/:url', {
        templateUrl: 'views/message/statsMessage.layout.html'
      })
      .when('/reports', {
        templateUrl: 'views/reports/listStats.layout.html'
      })
      .when('/profile', {
        templateUrl: 'views/user/profile.layout.html'
      })
      .when('/create-form', {
        templateUrl: 'views/contactQueue/createContactForm.layout.html'
      })
      .when('/edit-form/:url', {
        templateUrl: 'views/contactQueue/createContactForm.layout.html'
      })
      .when('/list-form', {
        templateUrl: 'views/contactQueue/listContactForm.layout.html'
      })
      .when('/list-domains', {
          templateUrl: 'views/domains/listDomains.layout.html'
      })
      .when('/list-organizations', {
          templateUrl: 'views/organizations/listOrganizations.layout.html'
      })
      .when('/applications', {
          templateUrl: 'views/applications/applications.layout.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    };

  module.exports = Routes;
}());
