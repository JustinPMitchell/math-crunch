import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SubjectTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div className="SubjectTitle">
        <Link to="/subject" onClick={this.props.handleSubjectChange}>{this.props.title}</Link>
      </div>
    );
  }
}

export default SubjectTitle;