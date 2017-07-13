/* eslint no-console: 0 */
/* eslint import/no-mutable-exports: 0 */

/**
 * Utility functions for accessing information about the environment
 * 
 *  @author         Mark H. Linehan
 *  @date           December, 2016
 *  @copyright      Quarule, Inc.
 */

import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

let userInfo = null;  // {username: <user name>, resumetoken: <resume token>}
let MONGO_URL = null; // standard Mongo connection string format
let QRE_URL = null;   // URL of QRE server

export {userInfo, MONGO_URL, QRE_URL};

export default class Info {


/**
   * Call a server-side method that retrieves the user's name and resume token.
   * This information is needed to authenticate the client to the QRE server.
   * 
   * The result is stored in userInfo
   */
  static getUserInfo() {
    Meteor.userId();  // access the user id, so that this method will be called each time it changes
    Meteor.call("getUserInfo", (error, result) => {
      if (error || result === undefined || result === null) {
        console.log(`getUserInfo produced error "${error}" and result"${result}"`);
      } else {
        check(result, new SimpleSchema({
          username: {
            type: String,
            label: "user name",
            optional: true,
          },
          resumetoken: {
            type: String,
            label: "resume token",
            optional: true,
          },
        }));
        userInfo = result;
      }
    });
  }

/**
   * Call a server-side method that retrieves the MONGO_URL and QRE_URL.  These provide access information
   * for the MONGO and QRE servers:
   *
   *    - The MONGO_URL has a standard "connection string" format as documented at
   *      https://docs.mongodb.com/manual/reference/connection-string/. The default is "mongodb://127.0.0.1:3001/meteor";
   *      
   *    - The QRE_URL should have the format: "http(s)://<DNS or IP address>:<port>".  The default is "http://127.0.0.1:8080".
   *      Note that QRE's Apache application and REST service names are fixed at "QREBridge" and "QREVM",
   *      so should not be included in the QRE_URL.   
   * 
   */
  static getURLs() {
    Meteor.call("getURLs", (error, result) => {
      if (error || result === undefined || result === null) {
        console.log(`getURLs produced error "${error}" and result"${result}"`);
      } else {
        if (result) {
          check(result, new SimpleSchema({
            MONGO_URL: {
              type: String,
              label: 'MONGO_URL',
              optional: true,
            },
            QRE_URL: {
              type: String,
              label: 'QRE_URL',
              optional: true,
            },
          }));
          MONGO_URL = result.MONGO_URL ? result.MONGO_URL : 'mongodb://127.0.0.1:3001/meteor';
          // console.log(`MONGO_URL: ${this.MONGO_URL}`);
          QRE_URL = result.QRE_URL ? result.QRE_URL : 'http://127.0.0.1:8080';
          // console.log(`QRE_URL: ${this.QRE_URL}`);
        }
      }
    });
  }  

} // end of Info
