import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import * as utils from './utils';

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div>
        <Button text="cut" onClick={(event) => utils.cut(event, this.props.text)}/>
        <Button text="copy" onClick={(event) => utils.copy(event, this.props.text)}/>
        <Button text="paste" onClick={(event) => utils.paste(event, this.props.text)}/>
        <Button text="headers" onClick={(event) => utils.headers(event, this.props.text)}/>
        <Button text="link" onClick={(event) => utils.link(event, this.props.text)}/>
        <Button text="image" onClick={(event) => utils.image(event, this.props.text)}/>
        <Button text="lists" onClick={(event) => utils.lists(event, this.props.text)}/>
        <Button text="table" onClick={(event) => utils.table(event, this.props.text)}/>
        <Button text="line break" onClick={(event) => utils.lineBreak(event, this.props.text)}/>
        <Button text="Code block" onClick={(event) => utils.codeBlock(event, this.props.text)}/>
        <Button text="Code" onClick={(event) => utils.code(event, this.props.text)}/>
        <Button text="Blockquote" onClick={(event) => utils.blockQuote(event, this.props.text)}/>
        <Button text="Clear Text" onClick={(event) => utils.clearText(event, this.props.text)}/>
      </div>
    );
  }
}
