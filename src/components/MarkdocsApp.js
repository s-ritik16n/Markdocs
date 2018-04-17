import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './Toolbar';
import Editor from './Editor';
import Preview from './Preview';
import { preview } form './advanced-utils';

export default class MarkdocsApp extends React.Component {

  previewHandler(event, text) => {
    event.preventDefault();
    console.log("previewHandler");

    let previewEl = event.target;
    previewEl.toggleClass("show");

    if(previewEl.classlist.contains("show")) {
      this.refs.editor.classlist.add("hide");
      preview(event, text);
    } else {
      this.refs.editor.classlist.remove("hide");
    }
  }

  render = () => {
    return (
      <div>
        <Toolbar />
        <Editor ref="editor"/>
        <Button text="Preview" onCLick={(e) => this.previewHandler(event, text);}/>
      </div>
    );
  }
}
