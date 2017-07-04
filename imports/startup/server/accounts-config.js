/**
 * Configure the Accounts package to prevent users from self-creating their own accounts.
 */

import { Accounts } from 'meteor/accounts-base';


Accounts.config({
  forbidClientAccountCreation : true
});