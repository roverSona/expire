/* eslint no-console: 0 */

/**
 *  @fileoverview   Retrieve these URLs so that the client can use them:
 *                    - MONGO_URL: contains access information for the MongoDB server
 *                    - QRE_URL: identifies the host and port for the QRE server *                  
 *                  
 *  @author         Mark H. Linehan
 *  @date           November 16, 2016
 *  @copyright      Quarule, Inc.
 *
 */

import { Meteor } from 'meteor/meteor';

Meteor.methods({

  /**
   * Return the MONGO_URL and QRE_URL, if any
   *
   * Return an empty object when running on the client.
   */
  getURLs: function() {
    if (Meteor.isClient) {
      return {};
    }

    return {
      MONGO_URL: process.env.MONGO_URL,
      QRE_URL: process.env.QRE_URL,
    };
  },

  

});
