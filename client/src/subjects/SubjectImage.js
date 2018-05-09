import React, { Component } from 'react';

class SubjectImage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div className="SubjectImage">
        <img src={this.props.image} />
      </div>
    );
  }
}

export default SubjectImage;