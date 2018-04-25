import React from 'react';
import ReactDOM from 'react-dom';
import { Button as Btn } from 'reactstrap';

export default class Button extends React.Component {
  constructor(props){
    super(props);
  }

  render = () => {
    return (
      <Btn color="default" onClick={(e) => {this.props.handleClick(e, this.props.data)}}>{this.props.text}</Btn>
    );
  }
}
