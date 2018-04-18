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
    parsedData: "parsed data",
    showPreview: false
  }

  constructor(props) {
    super(props);
    this.previewHandler = this.previewHandler.bind(this);
  }

  componentDidMount() {
    console.log(this.state);
  }

  componentDidUpdate() {
    console.log(this.state);
    if(this.state.showPreview) {
      this.state.parsedData = preview(this.state.rawData);
    }
  }

  previewHandler = (event, data) => {

    event.preventDefault();
    this.setState((prevState) => {
      return {showPreview: !prevState.showPreview}
    });

  }

  render = () => {
    return (
      <div>
        <Toolbar />
        <Editor hide={!(this.state.showPreview)}/>
        <Button text="Preview" handleClick={this.previewHandler} data={this.state.rawData}/>
        <Preview hide={this.state.showPreview} id="preview" value={this.state.parsedData} />
      </div>
    );
  }
}
