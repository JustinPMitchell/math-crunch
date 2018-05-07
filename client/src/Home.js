import React, { Component } from 'react';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      user : this.props.user
    }
  }
  render(){
    if(this.props.user !== null && typeof this.state.user !== "undefined"){
      return (
        <div className="Home">
        </div>
      );
    }else{
      console.log("handle no meal data");
      return (
        <div className="Home">
        </div>
      );
    }
  }
}

export default Home;