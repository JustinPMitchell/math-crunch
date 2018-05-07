import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount = () => {
  }

  render(){
    var that = this;
    if(this.props.user && this.props.user.name){
      return (
        <div className='Profile'>
          <h2>{this.props.user.name}</h2>   
          <hr/>      
        </div>);
    }
    else {
      return (
        <div className="Profile">
          <p>This is a profile page. You need to be logged in to view it.</p>
        </div>
      );
    }
  }
}

export default Profile;