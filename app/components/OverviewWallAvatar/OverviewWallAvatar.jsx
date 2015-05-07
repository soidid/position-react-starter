import React from "react";
import { Link } from "react-router";

import LegislatorAvatar from '../LegislatorAvatar/LegislatorAvatar.jsx';
import "./OverviewWallAvatar.css"

export default class OverviewWallAvatar extends React.Component {
  render () {
      var {data} = this.props;
      var partyClass = "OverviewWallAvatar-avatar is-"+data.party_eng;
     
      var positionCount = data.positionCount || 0;
      var positionCountItem = (positionCount === 0) ? "":
      <div className="OverviewWallAvatar-opinionCount">{positionCount}</div>;

      return (
          <div className="OverviewWallAvatar">
              <Link to="personIssue" params={{issue:"same-sex-marriage"}}>
                  <div className="OverviewWallAvatar-hoverInfo">有 {positionCount} 個表態紀錄</div>
                  {positionCountItem}
                  <div className={partyClass}>
                      <LegislatorAvatar data={data.name} plain={true} name={true}/>
                  </div>

              </Link>
          </div>

      )
  }
}


