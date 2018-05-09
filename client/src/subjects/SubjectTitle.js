import React, { Component } from 'react';

class SubjectTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div className="SubjectTitle">
        {this.props.title}
      </div>
    );
  }
}

export default SubjectTitle;