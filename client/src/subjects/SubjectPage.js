import React, { Component } from 'react';

class SubjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div className="SubjectPage">
        <h1>{this.props.subject}</h1>
      </div>
    );
  }
}

export default SubjectPage;