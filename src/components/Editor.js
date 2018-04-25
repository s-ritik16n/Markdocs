import React from 'react';
import ReactDOM from 'react-dom';
import { FormControl } from 'react-bootstrap';

export default class Editor extends React.Component {
  
  editorContainer = {
    height: "82vh"
  }

  editorStyle= {
    height: "100%"
  }
  constructor(props){
    super(props);
  }

  render = () => {
    return (
      <div style={this.editorContainer}>
      <FormControl componentClass="textarea" placeholder="textarea" style={this.editorStyle} />
      </div>
    );
  }
}
