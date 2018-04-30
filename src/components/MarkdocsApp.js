import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './Toolbar';
import Editor from './Editor';
import Preview from './Preview';
import Button from './Button';
import {preview} from '../advanced-utils';
import ToggleButton from './ToggleButton';
import {Button as Btn} from 'react-bootstrap';

export default class MarkdocsApp extends React.Component {

  state = {
    rawData: "",
    parsedData: "",
    showPreview: false
  }

  constructor(props) {
    super(props);
    this.previewHandler = this.previewHandler.bind(this);
  }

  textHandler = (element) => {
    this.setState({
      rawData: element.value
    });
  }

  setTextData = (data) => {
    this.setState({rawData: data});
  }

  previewHandler = (event, data) => {

    event.preventDefault();
    this.setState((prevState) => {
      return {
        showPreview: !prevState.showPreview,
        parsedData: prevState.showPreview === false
          ? preview(prevState.rawData)
          : {}
      };
    });
  }

  render = () => {
    return (<div className="container-fluid">
      <Toolbar callback={this.setTextData} data={this.state.rawData}/>
      <Button handleClick={this.previewHandler} icon="FaBolt" data={this.state.rawData} toolTip="Toggle Preview"/>
      <Editor data={this.state.rawData} handleChangeEvent={this.textHandler}/>
      <Preview hide={this.state.showPreview} id="preview" value={this.state.parsedData}/>
    </div>);
  }
}
