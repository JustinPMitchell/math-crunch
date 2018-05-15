import React, { Component } from 'react';
import ModuleTitle from './ModuleTitle.js';
import ModuleImage from './ModuleImage.js';

class Module extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div className="Module">
        <ModuleTitle />
        <ModuleImage />
      </div>
    );
  }
}

export default Module;