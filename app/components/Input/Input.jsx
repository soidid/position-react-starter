import React from "react";
import { Link } from "react-router";
import "./Input.css";

import Icon from '../Icon/Icon.jsx';

export default class Input extends React.Component {
  render() {
    var { handleInputChange, handleSetInput, currentTerm } = this.props;
        var examples = ['吳育昇','蔡正元','國民黨'];
        var exampleButtons = examples.map((item,key)=>{
            var boundClick = handleSetInput.bind(this, item);

            return <div className="Input-keyword"
                        onClick={boundClick}
                        key={key}>{item}</div>;
        });

        var boundClearInput = handleSetInput.bind(this, "");
        var boundClearInputItem = (currentTerm) ? <div className="Input-clearInput"
                onClick={boundClearInput}>x</div> :"";
        
        return (
          <div className="Input">
            <input className="Input-textInput"
                   onChange={handleInputChange}
                   placeholder={"搜尋立委姓名或選區"}
                   value={currentTerm}/>
                {boundClearInputItem}
            <div className="Input-hint">大家都在找：
                {exampleButtons}
            </div>
            
          </div>
        )
  }
}

