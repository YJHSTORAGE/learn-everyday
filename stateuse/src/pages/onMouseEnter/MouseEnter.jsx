import React, { Component } from 'react';

class  MouseEnter extends Component {

  constructor() {
    super();

  }

  onMouseEnter =( event ) => {
    console.log('onMouseEnter传入的时间是什么呢?',event)
    console.log('onMouseEnter传入的时间是什么呢?',event.currentTarget)
    console.log('onMouseEnter传入的时间是什么呢?',event.currentTarget.dataset)
    console.log('onMouseEnter传入的时间是什么呢?',event.currentTarget.dataset.index)
  }

   render() {
     return (
       <div>
        <div data-index="0" onMouseEnter={this.onMouseEnter}>1</div>
        <div data-index="1" onMouseEnter={this.onMouseEnter}>2</div>
        <div data-index="2" onMouseEnter={this.onMouseEnter}>3</div>
        <div data-index="3" onMouseEnter={this.onMouseEnter}>4</div>
       </div>
     )
   }
}

export default MouseEnter;
