import React from "react/addons";
import { Link } from "react-router";
import './CandidatePicker.css';
import classNames from "classnames";
export default class CandidatePicker extends React.Component {
  
  render () {
    
    var candidates = ["賴士葆","苗博雅","阮昭雄","余宛如"];
    var {candidateA, candidateB, clearCandidateHandler, setCandidateHandler} = this.props;
    var options = candidates.map((item,key)=>{
        var img = "";
        try{
          img = require("./images/"+item+".png");
        }catch(e){

        }
        var imgClasses = classNames({
          "CandidatePicker-img" : true,
          "is-active" : item === candidateA || item === candidateB

        });
        var setFunction = (candidateA || candidateB === "") ? setCandidateHandler : "";
        return (
          <div className="CandidatePicker-option"
               key={key}
               onClick={setFunction.bind(this,item)}>
                <img className={imgClasses}
                     src={img}/>
                <div className="CandidatePicker-name">{item}</div>
          </div>
        )
    });
  
    return (
      <div className="CandidatePicker">
          <div>{options}</div>
          <div className="CandidatePicker-btn"
               onClick={clearCandidateHandler}>換人比</div>
      </div>
          
    );
  }
}
