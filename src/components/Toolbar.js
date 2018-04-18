import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import * as utils from '../utils';
import { ButtonGroup, ButtonToolbar } from 'react-bootstrap';

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <ButtonToolbar>
      <ButtonGroup>
        <Button text="cut" handleClick={utils.cut} data={this.props.data}/>
        <Button text="copy" handleClick={utils.copy} data={this.props.data}/>
        <Button text="paste" handleClick={utils.paste} data={this.props.data}/>
        <Button text="headers" handleClick={utils.headers} data={this.props.data}/>
        <Button text="link" handleClick={utils.link} data={this.props.data}/>
        <Button text="image" handleClick={utils.image} data={this.props.data}/>
        <Button text="lists" handleClick={utils.lists} data={this.props.data}/>
        <Button text="table" handleClick={utils.table} data={this.props.data}/>
        <Button text="line break" handleClick={utils.lineBreak} data={this.props.data}/>
        <Button text="Code block" handleClick={utils.codeBlock} data={this.props.data}/>
        <Button text="Code" handleClick={utils.code} data={this.props.data}/>
        <Button text="Blockquote" handleClick={utils.blockQuote} data={this.props.data}/>
        <Button text="Clear Text" handleClick={utils.clearText} data={this.props.data}/>
      </ButtonGroup>
    </ButtonToolbar>
    );
  }
}
