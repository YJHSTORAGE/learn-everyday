import React, { Component } from 'react';

import MouseEnter from '../onMouseEnter/MouseEnter';

class  UseState extends Component {

  constructor() {
    super();

    this.state={
      showFirst:true
    }
  }

  showCompoent = () => {
    return this.state.showFirst?this.showFirst():this.notShowFirst()
  }

  showFirst = () => {
    return (
      <div>
        <h1>展示第一个</h1>
        <hr></hr>
        <input type="button" value="不展示第一个" onClick={this.handleClick}></input>
      </div>
    )
  }

  notShowFirst = () => {
    return(
      <div>
        <h1>不展示第一个</h1>
        <hr></hr>
        <input type="button" value="展示第一个" onClick={this.handleClick}></input>
      </div>
    )
  }

  handleClick = () => {
    const { showFirst } = this.state
    this.setState({
      showFirst:!showFirst
    })
  }

   render() {
     return (
       <div>
        this.showCompoent()
        <hr />
        <MouseEnter />
       </div>

     )
   }
}

export default UseState;
