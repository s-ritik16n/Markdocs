import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './Toolbar';
import Editor from './Editor';
import Preview from './Preview';
import Button from './Button';
import { preview } from '../advanced-utils';
import ToggleButton from './ToggleButton';
import { Button as Btn } from 'react-bootstrap';
import { FaToggleOff, FaToggleOn } from 'react-icons/lib/fa';
import { ToastContainer, toast } from 'react-toastify';

export default class MarkdocsApp extends React.Component {

  state = {
    rawData: "",
    parsedData: "",
    showPreview: false
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log("info -");
    console.log(info);
  }

  constructor(props) {
    super(props);
    this.previewHandler = this.previewHandler.bind(this);
  }

  textHandler = (element) => {
    this.setState({
      rawData: element.value
    }, () => {
      if(this.state.showPreview) {
        this.state.parsedData = preview(this.state.rawData);
      }
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
    return (
      <div className="container-fluid">
        <div>
          <Toolbar style="display: inline-Block" callback={this.setTextData} data={this.state.rawData}/>
          <ToastContainer autoClose={2000} />
          <Button handleClick={this.previewHandler} icon={this.state.showPreview ? <FaToggleOff /> : <FaToggleOn/>} data={this.state.rawData} toolTip={this.state.showPreview ? "Turn Preview Off" : "Turn Preview On"}/>
        </div>
        <Editor showPreview={this.state.showPreview} data={this.state.rawData} handleChangeEvent={this.textHandler}/>
        <Preview hide={this.state.showPreview} id="preview" value={this.state.parsedData}/>
      </div>
    );
  }
}
