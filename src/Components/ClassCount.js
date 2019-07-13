import React, { Component } from 'react';

class ClassCount extends Component {
    state = {
      count: 0
  }

  increaseCounter = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    })
  }

  render() {
    const { state: {count},  increaseCounter} = this;
    return (
      <div>
      <button onClick={ increaseCounter }>state count is now {count} </button>
      </div>
    )
  }
}

export default ClassCount;