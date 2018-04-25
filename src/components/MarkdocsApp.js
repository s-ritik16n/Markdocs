import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './Toolbar';
import Editor from './Editor';
import Preview from './Preview';
import Button from './Button';
import { preview } from '../advanced-utils';
import ToggleButton from './ToggleButton';
import FaBold from 'react-icons/lib/fa/bolt';
import {Button as Btn} from 'react-bootstrap';


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
        <Btn bsStyle="default" onClick={this.previewHandler}><FaBold/></Btn>
        <Editor />
        <Preview hide={this.state.showPreview} id="preview" value={this.state.parsedData} />
      </div>
    );
  }
}
