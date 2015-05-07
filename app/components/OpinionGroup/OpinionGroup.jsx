import React from "react";
import { Link } from "react-router";

import OverviewWallAvatar from '../OverviewWallAvatar/OverviewWallAvatar.jsx';
import "./OpinionGroup.css"

export default class OpinionGroupr extends React.Component {
  constructor(props) { super(props)
      this.state = { 
          showFull: false
      }
  }

  _onToggleShowFull(){
      this.setState({ 
          showFull: !this.state.showFull
      });
  }

  render () {
      var {data} = this.props;
      var {showFull} = this.state;
      var boundToggleShowFull = this._onToggleShowFull.bind(this, null);
      var legislatorItems = data.legislators.map((item, key)=>{
        return (
          <OverviewWallAvatar data={item} key={key}/>
        )
      });
      
      var memberItem = (showFull) ? <div className="OpinionGroup-members">{legislatorItems}</div>:"";
      return (
          <div className="OpinionGroup">
              <div className="OpinionGroup-title"
                   onClick={boundToggleShowFull}>{data.opinion}</div>
              <div>{data.count}</div>
              <div>{data.percentage}%</div>
              <div>{memberItem}</div>
          </div>

      )
  }
}


