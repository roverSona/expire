/**
 *  @fileoverview   Primary route definitions.
 *  @author     Sonam
 *  @date     June 23, 2017
 *  @copyright    Kiwitech
 */

import { Meteor } from 'meteor/meteor';
import React,{Component} from 'react';
import { BrowserRouter} from 'react-router-dom';
import ReactDom from 'react-dom';

import MainLayout from '/imports/client/layouts/MainLayout.jsx';
export default class Routes extends Component{
  render(){
    return(
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      )

  }
};

Meteor.startup(() => {
  const reactTarget = document.createElement('div');
  document.body.appendChild(reactTarget);
  ReactDom.render(< Routes />, reactTarget);
});
