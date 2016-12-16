module.exports = angular.module('zimletCrunchmail.message', [])

.factory('apiMessage', require('message/apiMessage.factory'))
.factory('apiAttachments', require('message/apiAttachments.factory'))
.factory('messageDetailsFactory', require('message/messageDetails.factory'))
.factory('createMessageFactory', require('message/createMessage.factory'))

.factory('messageFilter', require('message/messageFilter.factory'))

.directive('cmListMessage', require('message/listMessage.directive'))
.directive('cmSendTestDialog', require('message/sendTestDialog.directive'))
.directive('cmMessageDetails', require('message/messageDetails.directive'))
.directive('cmFormMessage', require('message/formMessage.directive'))
.directive('cmCreateMessage', require('message/createMessage.directive'))
.directive('cmAttachments', require('message/attachments.directive'))
.directive('cmStatsMessage', require('message/statsMessage.directive'));
