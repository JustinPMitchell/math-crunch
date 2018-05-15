import React, { Component } from 'react';
import Subject from './subjects/Subject.js';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      user : this.props.user,
      subjects : [
        {
          title: "Pre-Algebra",
          image: "https://cdn.brainpop.com/math/numbersandoperations/icon.png"
        },
        {
          title: "Calculus",
          image: "https://i.ytimg.com/vi/XFDM1ip5HdU/maxresdefault.jpg"
        }
      ]
    }
  }
  render(){
    if(this.props.user !== null && typeof this.state.user !== "undefined"){
      return (
        <div className="Home">
          {this.state.subjects.map((subject) => {
            return (
              <Subject title={subject.title} image={subject.image} handleSubjectChange={this.props.handleSubjectChange}/>
            )
          })}



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