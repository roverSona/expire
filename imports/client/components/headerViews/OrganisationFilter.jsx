import React ,{ Component } from 'react';
import { Organisations } from '/imports/api/OrganisationModel';
import {Tracker} from 'meteor/tracker';
Tracker.autorun(function(){

   const OrganisationList = Organisations;
   console.log(OrganisationList);
});
const renderOrganisations = () => {
  console.log(OrganisationList)
  return (
    OrganisationList.map((organisation)=>{
        return (
            <option>{organisation}</option>
        )
    })
  )
}

export default class OrganizationFilter extends Component {
  render(){
    return(
      <form className="organisation-search pull-left">
        <div className="form-wrap">
          <label>Filter by</label>
          <div className="select-style">
            <select className="form-control">
              <option>Select Organisation</option>
              {renderOrganisations()}
            </select>
          </div>
        </div>
      </form>
    )
  }
}
