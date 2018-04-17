import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './Toolbar';
import Editor from './Editor';
import Preview from './Preview';
import { preview } from '../advanced-utils';

export default class MarkdocsApp extends React.Component {

  constructor(pros) {
    super(props);
    this.refs.preview.classlist.add("hide");
    this.modData = null;
  }

  previewHandler = (event, data) => {

    event.preventDefault();
    console.log("previewHandler");

    let previewEl = event.target;
    previewEl.toggleClass("hide");

    if(!previewEl.classlist.contains("hide")) {
      this.refs.editor.classlist.add("hide");
      this.modData = preview(data);
    } else {
      this.refs.editor.classlist.remove("hide");
    }
  }

  render = () => {
    return (
      <div>
        <Toolbar />
        <Editor ref="editor"/>
        <Button text="Preview" handleClick={this.previewHandler} data="data"/>
        <Preview ref="preview" value={this.modData} />
      </div>
    );
  }
}
