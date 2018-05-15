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
          image: "https://cdn.brainpop.com/math/numbersandoperations/icon.png",
          modules : [
            {
              title: "Decimal Places",
              image: "https://www.mathsisfun.com/numbers/images/decimal-number.svg"
            },
            {
              title: "Whole Numbers"
              image: "http://mathswithmisshumes.weebly.com/uploads/4/9/6/1/49613503/281940283.png?250"
            },
            {
              title: "Rounding",
              image: "https://ecdn.teacherspayteachers.com/thumbitem/Rounding-Poster-1381314850/original-397544-1.jpg"
            }
          ]
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
      return (
        <div className="Home">
        </div>
      );
    }
  }
}

export default Home;