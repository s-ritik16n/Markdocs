import React from 'react';
import ReactDOM from 'react-dom';
import { FormControl } from 'react-bootstrap';
import '../css/style.css';
let classnames = require('classnames');

export default class Editor extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate = () => {
    console.log("componentDidUpdate");
    this.textareaRef.value = this.props.data;
    setTimeout(() => {
      this.textareaRef.focus();
    }, 500);
  }

  styles = {
    'editorContainer': {
      height: "82vh"
    },
    'editorStyle': {
      height: "100%",
      width : "100%",
      padding: "8px"
    }
  }

  moveCaretAtEnd = (e) => {
    let temp_value = e.target.value;
    e.target.value = '';
    e.target.value = temp_value;
  }

  render = () => {
    let widthClass = classnames({
      'width-50': this.props.showPreview,
      'float-left': this.props.showPreview
    });
    return (
      <div id="mainTextAreaCntr" className={widthClass} style={this.styles["editorContainer"]}>
        <textarea autoFocus onFocus={this.moveCaretAtEnd} id="mainTextArea" onChange={(e) => {
          this.props.handleChangeEvent(this.textareaRef)
        }} ref={(input) => { this.textareaRef = input; }} placeholder="write your markdown here" style={this.styles["editorStyle"]}></textarea>
      </div>
    );
  }
}
