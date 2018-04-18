import React from 'react';
import ReactDOM from 'react-dom';

export default class Button extends React.Component {
  constructor(props){
    super(props);
  }

  render = () => {
    return (
      <button onClick={(e) => {this.props.handleClick(e, this.props.data)}}>{this.props.text}</button>
    );
  }
}
