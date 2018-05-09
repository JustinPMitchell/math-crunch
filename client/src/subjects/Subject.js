import React, { Component } from 'react';
import SubjectTitle from './SubjectTitle.js';
import SubjectImage from './SubjectImage.js';

class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div className="Subject">
        <SubjectTitle title = {this.props.title}/>
        <SubjectImage image = {this.props.image}/>
      </div>
    );
  }
}

export default Subject;