// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {
  
  mouseCoordinates = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <div>
        <button onClick={this.mouseCoordinates} >Click for Coordinates</button>
      </div>
    );
  }
}

export default CoordinatesButton;
