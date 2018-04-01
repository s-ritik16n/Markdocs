import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

export default class Toolbar extends React.Component {
  render = () => {
    return (
      <div>
        <Button text="cut" />
        <Button text="copy" />
        <Button text="paste" />
        <Button text="headers" />
        <Button text="link" />
        <Button text="image" />
        <Button text="lists" />
        <Button text="table" />
        <Button text="line break" />
        <Button text="Code block" />
        <Button text="Code" />
        <Button text="Blockquote" />
      </div>
    );
  }
}
