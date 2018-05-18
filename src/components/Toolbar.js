import React from 'react';
import ReactDOM from 'react-dom';
import GlyphButton from './GlyphButton';
import Button from './Button';
import * as utils from '../utils';
import * as adutils from '../advanced-utils';
import { ButtonGroup, ButtonToolbar, DropdownButton, MenuItem, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Button as Btn } from 'react-bootstrap';
import ModalComponent from './ModalComponent';
import DropDown from './DropDown';
import * as jsx from '../JSX';
import {
  FaBold,
  FaItalic,
  FaHeader,
  FaChain,
  FaFileImageO,
  FaListUl,
  FaListOl,
  FaTable,
  FaEllipsisH,
  FaFileCodeO,
  FaIndent,
  FaBolt,
  FaStrikethrough,
  FaSquareO,
  FaSquare
} from 'react-icons/lib/fa';
import {
  MdClearAll,
  MdCode,
  MdContentCopy,
  MdFileDownload
} from 'react-icons/lib/md';

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log("info -");
    console.log(info);
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
    if (this.props.showTableModal) {
      this.setState({showTableModal: true});
    } else if (this.props.showLinkModal) {
      this.setState({showLinkModal: true});
    }
  }

  state = {
    showLinkModal: false,
    showImageModal: false,
    showClearModal: false,
    showTableModal: false
  }

  linkModalJSX         = jsx.linkModalJSX;
  imageModalJSX        = jsx.imageModalJSX;
  clearModalJSX        = jsx.clearModalJSX;
  tableModalJSX        = jsx.tableModalJSX;

  getToast = (text) => {
    const new_toast = toast(text, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: true,
      type: toast.TYPE.INFO,
      closeButton: false
    });
    return new_toast;
  };


  linkModalListener = (event) => {
    event.preventDefault();

    let data = this.props.data;
    let options = {
      "url": jsx.linkUrlInput.value,
      "title": jsx.linkTextInput.value
    };
    utils.link(event, data, this.props.callback, options);
    this.setState({showLinkModal: false});
  }


  imageModalListener = (event) => {
    event.preventDefault();

    let data = this.props.data;
    let options = {
      "image_URL": jsx.imageUrlInput.value,
      "alt_text": jsx.imageAltTextInput.value
    };
    utils.image(event, data, this.props.callback, options);
    this.setState({showImageModal: false});
  }


  clearModalListener = (event) => {
    event.preventDefault();
    utils.clearText(event, this.props.data, this.props.callback);
    this.setState({showClearModal: false});
  }


  tableModalListener = (event) => {
    event.preventDefault();
    if (isNaN(jsx.tableRowInput.value) || isNaN(jsx.tableColInput.value)) {
      this.setState({showTableModal: false});
      this.getToast("Invalid Input!");
      return;
    }
    let options={
      "rows": jsx.tableRowInput.value,
      "cols": jsx.tableColInput.value
    }
    utils.table(event, this.props.data, this.props.callback, options);
    this.setState({showTableModal: false});
  }


  render = () => {

    let linkModalClose      = () => this.setState({showLinkModal: false});
    let imageModalClose     = () => this.setState({showImageModal: false});
    let clearModalClose     = () => this.setState({showClearModal: false});
    let tableModalClose     = () => this.setState({showTableModal: false});

    return (
      <ButtonToolbar>
        <ButtonGroup>
          <Button callback={this.props.callback} handleClick={utils.bold} toolTip="Strong Text (Alt + B)" data={this.props.data} icon={<FaBold />}/>
          <Button callback={this.props.callback} handleClick={utils.italic} toolTip="Italic Text (Alt + I)" data={this.props.data} icon={<FaItalic />}/>
          <Button callback={this.props.callback} handleClick={utils.strikeThrough} toolTip="Strike Through (Alt + S)" data={this.props.data} icon={<FaStrikethrough />}/>
        </ButtonGroup>
        <ButtonGroup>
          <DropDown
            bsStyle="default"
            keyProp="dropdown-header"
            title={<FaHeader />}
            id="split-button-basic-0"
            utils={utils.headers}
            options={
              [
                {"headerType": 1},
                {"headerType": 2},
                {"headerType": 3},
                {"headerType": 4},
                {"headerType": 5},
                {"headerType": 6}
              ]
            }
            text={
              ["H1", "H2", "H3", "H4", "H5", "H6"]
            }
            data={this.props.data}
            callback={this.props.callback}
          />
          <ButtonGroup>
            <Button handleClick={() => this.setState({showLinkModal: true})} bsStyle="default" icon={<FaChain/>} toolTip="Link (Alt + L)"/>
            <ModalComponent
              toolTip="Add"
              buttonText="Add"
              callback={this.props.callback}
              handleClick={this.linkModalListener}
              data={this.props.data}
              show={this.state.showLinkModal}
              onHide={linkModalClose}
              id="link-modal"
              title="Add Link"
              body={this.linkModalJSX}
            />
          </ButtonGroup>
          <ButtonGroup>
            <Button handleClick={() => this.setState({showTableModal: true})} bsStyle="default" icon={<FaTable />} toolTip="Table (Alt + T)" />
            <ModalComponent
              toolTip="Add"
              buttonText="Add"
              callback={this.props.callback}
              handleClick={this.tableModalListener}
              data={this.props.data}
              show={this.state.showTableModal}
              onHide={tableModalClose}
              id="table-modal"
              title="Add Table"
              body={this.tableModalJSX}
              />
          </ButtonGroup>
          <Button callback={this.props.callback} handleClick={utils.rule} toolTip="Horizintal Rule (Alt + H)" data={this.props.data} icon={<FaEllipsisH />}/>
          <Button callback={this.props.callback} handleClick={utils.blockQuote} toolTip="Block Quote (Alt + Q)" data={this.props.data} icon={<FaIndent />}/>
          <ButtonGroup>
            <Button handleClick={() => this.setState({showImageModal: true})} bsStyle="default" icon={<FaFileImageO/>} toolTip="Image (Alt + P)"/>
            <ModalComponent
              toolTip="Add"
              buttonText="Add"
              callback={this.props.callback}
              handleClick={this.imageModalListener}
              data={this.props.data}
              show={this.state.showImageModal}
              onHide={imageModalClose}
              id="image-modal"
              title="Add Image"
              body={this.imageModalJSX}
              />
          </ButtonGroup>
        </ButtonGroup>
        <ButtonGroup>
          <Button callback={this.props.callback} handleClick={utils.ulList} toolTip="Unordered List (Alt + U)" data={this.props.data} icon={<FaListUl/>}/>
          <Button callback={this.props.callback} handleClick={utils.olList} toolTip="Ordered List (Alt + O)" data={this.props.data} icon={<FaListOl/>}/>
          <Button callback={this.props.callback} handleClick={utils.completeTask} toolTip="Task list (completed) (Alt + X)" data={this.props.data}  icon={<FaSquareO/>}/>
          <Button callback={this.props.callback} handleClick={utils.incompleteTask} toolTip="Task list (incomplete Alt + C)" data={this.props.data}  icon={<FaSquare/>}/>
        </ButtonGroup>
        <ButtonGroup>
          <Button callback={this.props.callback} handleClick={utils.code} toolTip="Code (Alt + L)" data={this.props.data} icon={<MdCode />}/>
          <Button callback={this.props.callback} handleClick={utils.codeBlock} toolTip="Code Block (Alt + D)" data={this.props.data} icon={<FaFileCodeO />}/>
        </ButtonGroup>
        <ButtonGroup>
          <Button callback={this.props.callback} handleClick={utils.copy} options={{"id": "mainTextArea", raiseToast:this.getToast, copyDone: "Copied to Clipboard!", copyFailed:"Copying failed!"}} toolTip="Copy" data={this.props.data} icon={<MdContentCopy />}/>
          <ButtonGroup>
            <Button handleClick={() => this.setState({showClearModal: true})} bsStyle="default" icon={<MdClearAll />} toolTip="Clear Screen (Alt + CLR)"/>
            <ModalComponent
              toolTip="Clear screen"
              buttonText="Yes"
              callback={this.props.callback}
              handleClick={this.clearModalListener}
              data={this.props.data}
              show={this.state.showClearModal}
              onHide={clearModalClose}
              id="clear-modal"
              title="Clear Screen"
              body={this.clearModalJSX}
              bsStyle="primary"
              />
          </ButtonGroup>
          <Button callback={this.props.callback} handleClick={adutils.download} toolTip="Download" data={this.props.data} icon={<MdFileDownload />}/>
        </ButtonGroup>
    </ButtonToolbar>);
  }
}
