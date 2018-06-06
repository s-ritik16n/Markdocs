import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './Toolbar';
import Editor from './Editor';
import Preview from './Preview';
import Button from './Button';
import { preview, download, github_login } from '../advanced-utils';
import ToggleButton from './ToggleButton';
import { Button as Btn } from 'react-bootstrap';
import { FaToggleOff, FaToggleOn } from 'react-icons/lib/fa';
import { ToastContainer, toast } from 'react-toastify';
import * as utils from '../utils';
import { getToast } from '../toast';
import axios from 'axios';

export default class MarkdocsApp extends React.Component {
  constructor(props) {
    super(props);
    this.previewHandler = this.previewHandler.bind(this);
  }

  state = {
    rawData: "",
    parsedData: "",
    showPreview: false,
    showTableModal: false,
    showLinkModal: false,
    showImageModal: false,
    showClearModal: false
  }

  keyPressed = [];

  componentDidMount () {
    if (this.props.location.search) {
      let queryString = this.props.location.search;
      queryString = queryString.substring(1);
      queryString = queryString.split("&");
      let code = queryString.split("=");
      let state = queryString.split("=");
      github_login(code[1], state[1]);
    }
    document.addEventListener("keyup", (event) => this.keyUpEvent(event));
    document.addEventListener("keydown", (event) => this.keyDownEvent(event));
  }

  componentDidCatch(error, info) {
    console.log(`error - ${error}`);
    console.log(`info - ${info}`);
    console.log();
  }

  keyUpEvent = (event) => {
    let key1 = this.keyPressed[this.keyPressed.length - 2];
    let key2 = this.keyPressed[this.keyPressed.length - 1];
    this.keyPressed = [];
    if (key1 === "Alt") {

      if (key2.toLowerCase() === "t")             this.setState({showTableModal: true}, () => {this.setState({showTableModal: false})});
      else if (key2.toLowerCase() === "l")        this.setState({showLinkModal: true}, () => {this.setState({showLinkModal: false})});
      else if (key2.toLowerCase() === "b")        utils.bold(event, this.state.rawData, this.setTextData);
      else if (key2.toLowerCase() === "i")        utils.italic(event, this.state.rawData, this.setTextData);
      else if (key2.toLowerCase() === "-")        utils.strikeThrough(event, this.state.rawData, this.setTextData);
      else if (key2.toLowerCase() === "enter")    utils.rule(event, this.state.rawData, this.setTextData);
      else if (key2.toLowerCase() === "q")        utils.blockQuote(event, this.state.rawData, this.setTextData);
      else if (key2.toLowerCase() === "p")        this.setState({showImageModal: true}, () => {this.setState({showImageModal: false})});
      else if (key2.toLowerCase() === "u")        utils.ulList(event, this.state.rawData, this.setTextData);
      else if (key2.toLowerCase() === "o")        utils.olList(event, this.state.rawData, this.setTextData);
      else if (key2.toLowerCase() === "x")        utils.completeTask(event, this.state.rawData, this.setTextData);
      else if (key2.toLowerCase() === "v")        utils.incompleteTask(event, this.state.rawData, this.setTextData);
      else if (key2.toLowerCase() === "'")        utils.codeBlock(event, this.state.rawData, this.setTextData);
      else if (key2.toLowerCase() === "`")        utils.code(event, this.state.rawData, this.setTextData);
      else if (key2.toLowerCase() === "delete")   this.setState({showClearModal: true}, () => {this.setState({showClearModal: false})});
      else if (key2.toLowerCase() === "s")        download(event, this.state.rawData, this.setTextData);
      else if (key2.toLowerCase() === "c")        utils.copy(event, this.state.rawData, this.setTextData, {"id": "mainTextArea", raiseToast: getToast, copyDone: "Copied to Clipboard!", copyFailed:"Copying failed!"})
    }
  }

  keyDownEvent =(event) => {
    this.keyPressed.push(event.key);
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
          <Toolbar showClearModal={this.state.showClearModal} showImageModal={this.state.showImageModal} showLinkModal={this.state.showLinkModal} showTableModal={this.state.showTableModal} style="display: inline-Block" callback={this.setTextData} data={this.state.rawData}/>
          <ToastContainer autoClose={2000} />
          <Button handleClick={this.previewHandler} icon={this.state.showPreview ? <FaToggleOff /> : <FaToggleOn/>} data={this.state.rawData} toolTip={this.state.showPreview ? "Turn Preview Off" : "Turn Preview On"}/>
        </div>
        <Editor showPreview={this.state.showPreview} data={this.state.rawData} handleChangeEvent={this.textHandler}/>
        <Preview hide={this.state.showPreview} id="preview" value={this.state.parsedData}/>
        <Btn href="https://github.com/login/oauth/authorize?client_id=b5422eace97554dec4b5&state=e72e16c7e42f292c6912e7710c838347ae178b4">Upload to github</Btn>
      </div>
    );
  }
}
