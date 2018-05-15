import React from 'react';
import ReactDOM from 'react-dom';
import { FormControl } from 'react-bootstrap';
import '../css/style.css';
let classnames = require('classnames');

export default class Editor extends React.Component {

  constructor(props) {
    super(props);
  }

  editorContainer = {
    height: "82vh"
  }

  editorStyle = {
    height: "100%",
    width : "100%",
    padding: "8px"
  }

  componentDidUpdate = () => {
    console.log("componentDidUpdate ..");
    this.refs.textareaRef.value = this.props.data;
    this.refs.textareaRef.focus();
  }

  render = () => {
    let widthClass = classnames({
      'width-50': this.props.showPreview,
      'float-left': this.props.showPreview
    });
    return (
      <div id="mainTextAreaCntr" className={widthClass} style={this.editorContainer}>
        <textarea id="mainTextArea" onChange={(e) => {
          this.props.handleChangeEvent(this.refs.textareaRef)
        }} ref="textareaRef" placeholder="textarea" style={this.editorStyle}></textarea>
      </div>
    );
  }
}
