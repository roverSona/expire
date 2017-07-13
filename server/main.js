import { Meteor } from 'meteor/meteor';
import {Quarule} from '../imports/api/GAModel.js';

Meteor.startup(() => {
  // code to run on server at startup
  //console.log(Quarule.find({type:'Run'},{ fields: { GA:1}}).fetch());
});
