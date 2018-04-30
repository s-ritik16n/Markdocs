import React from 'react';
import ReactDOM from 'react-dom';
import {FormControl} from 'react-bootstrap';

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
    console.log("componentDidUpdate - ");
    this.refs.textareaRef.value = this.props.data;
  }

  render = () => {
    return (<div style={this.editorContainer}>
      <textarea onChange={(e) => {
          this.props.handleChangeEvent(this.refs.textareaRef)
        }} ref="textareaRef" placeholder="textarea" style={this.editorStyle}></textarea>
    </div>);
  }
}
