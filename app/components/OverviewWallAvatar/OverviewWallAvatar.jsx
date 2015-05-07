import React from "react";
import { Link } from "react-router";

import LegislatorAvatar from '../LegislatorAvatar/LegislatorAvatar.jsx';
import "./OverviewWallAvatar.css"

export default class OverviewWallAvatar extends React.Component {
  render () {
      var {data} = this.props;
      var partyClass = "OverviewWallAvatar-avatar is-"+data.party_eng;
     
      var positionCouunt = (data.positionCount === 0 || !data.positionCount) ? "":
      <div className="OverviewWallAvatar-opinionCount">{data.positionCount}</div>;

      return (
          <div className="OverviewWallAvatar">
              <Link to="personIssue" params={{issue:"same-sex-marriage"}}>
                  {positionCouunt}
                  <div className={partyClass}>
                      <LegislatorAvatar data={data.name} plain={true} name={true}/>
                  </div>
              </Link>
          </div>

      )
  }
}


