import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './Toolbar';
import Editor from './Editor';
import Preview from './Preview';
import Button from './Button';
import { preview } from '../advanced-utils';

export default class MarkdocsApp extends React.Component {

  state = {
    rawData: "data",
    parsedData: "",
    showPreview: false
  }

  constructor(props) {
    super(props);
    this.previewHandler = this.previewHandler.bind(this);
  }

  previewHandler = (event, data) => {

    event.preventDefault();
    this.setState((prevState) => {
      return {showPreview: !prevState.showPreview, parsedData: prevState.showPreview === false ? preview(prevState.rawData) : {}};
    });
  }

  render = () => {
    return (
      <div className="container-fluid">
        <Toolbar />
        <Editor hide={!(this.state.showPreview)}/>
        <Button text="Preview" handleClick={this.previewHandler} data={this.state.rawData}/>
        <Preview hide={this.state.showPreview} id="preview" value={this.state.parsedData} />
      </div>
    );
  }
}
