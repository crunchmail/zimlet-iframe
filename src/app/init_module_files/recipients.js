module.exports = angular.module('zimletCrunchmail.recipients', [])

.factory('recipientsMessage', require('recipients/recipients.factory'))
.factory('recipientFilter', require('recipients/recipientFilter.factory'))
.factory('recipientsTreeHelper', require('recipients/recipientsTreeHelper.factory'))
.factory('apiRecipient', require('recipients/apiRecipient.factory'))

.directive('cmRecipientsZimlet', require('recipients/recipientsZimlet.directive'))
.directive('cmRecipientsDuplicate', require('recipients/recipientsDuplicate.directive'))
.directive('cmRecipientsNode', require('recipients/recipientsNode.directive'))
.directive('cmRecipientsTree', require('recipients/recipientsTree.directive'))
.directive('cmRecipients', require('recipients/recipients.directive'));
