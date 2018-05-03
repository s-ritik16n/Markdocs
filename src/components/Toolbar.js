import React from 'react';
import ReactDOM from 'react-dom';
import GlyphButton from './GlyphButton';
import Button from './Button';
import * as utils from '../utils';
import {ButtonGroup, ButtonToolbar, DropdownButton, MenuItem, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import {Button as Btn} from 'react-bootstrap';
import {FaHeader, FaChain, FaFileImageO} from 'react-icons/lib/fa';
import ModalComponent from './ModalComponent';

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    showLinkModal: false,
    showImageModal: false
  }

  linkUrlInput;
  linkTextInput;
  imageUrlInput;
  imageAltTextInput;

  linkModalJSX = (<form>
    <FormGroup controlId="link-modal-title">
      <ControlLabel>Title</ControlLabel>
      <FormControl inputRef={inst => {this.linkTextInput = inst}} type="text"/>
    </FormGroup>
    <FormGroup controlId="link-modal-url">
      <ControlLabel>URL</ControlLabel>
      <FormControl inputRef={inst => {this.linkUrlInput = inst}} type="text"/>
    </FormGroup>
  </form>);

  linkModalListener = (event) => {
    event.preventDefault();
    console.log(this.linkTextInput.value);
    console.log(this.linkUrlInput.value);
    let data = this.props.data;
    let options = {
      "url": this.linkUrlInput.value,
      "title": this.linkTextInput.value
    };
    utils.link(event, data, this.props.callback, options);
    this.setState({showLinkModal: false});
  }

  imageModalJSX = (
    <form>
      <FormGroup controlId="image-modal-title">
        <ControlLabel>Alternate Text</ControlLabel>
        <FormControl inputRef={inst => {this.imageAltTextInput = inst}} type="text" />
      </FormGroup>
      <FormGroup controlId="iamge-modal-url">
        <ControlLabel>Image URL</ControlLabel>
        <FormControl inputRef={inst => {this.imageUrlInput = inst}} type="text"/>
      </FormGroup>
    </form>
  );

  imageModalListener = (event) => {
    event.preventDefault();
    console.log(this.imageAltTextInput.value);
    console.log(this.imageUrlInput.value);
    let data = this.props.data;
    let options = {
      "image_URL": this.imageUrlInput.value,
      "alt_text": this.imageAltTextInput.value
    };
    utils.image(event, data, this.props.callback, options);
    this.setState({showImageModal: false});
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log("info -");
    console.log(info);
  }

  render = () => {

    let linkModalClose      = () => this.setState({showLinkModal: false});
    let imageModalClose     = () => this.setState({showImageModal: false});

    return (<ButtonToolbar>
      <ButtonGroup>
        <Button callback={this.props.callback} handleClick={utils.bold} toolTip="Strong Text" data={this.props.data} icon="FaBold"/>
        <Button callback={this.props.callback} handleClick={utils.italic} toolTip="Italic Text" data={this.props.data} icon="FaItalic"/>
        <Button callback={this.props.callback} handleClick={utils.strikeThrough} toolTip="Strike Through" data={this.props.data} icon="FaStrikethrough"/>
      </ButtonGroup>
      <ButtonGroup>
        <DropdownButton bsStyle="primary" key="dropdown-header" title={<FaHeader />} id={`split-button-basic-0`}>
          <MenuItem eventKey="1" onSelect={(e) => {
              utils.headers(e, this.props.data, this.props.callback, {"headerType": 1})
            }}>
            H1
          </MenuItem>
          <MenuItem eventKey="2" onSelect={(e) => {
              utils.headers(e, this.props.data, this.props.callback, {"headerType": 2})
            }}>
            H2
          </MenuItem>
          <MenuItem eventKey="3" onSelect={(e) => {
              utils.headers(e, this.props.data, this.props.callback, {"headerType": 3})
            }}>
            H3
          </MenuItem>
          <MenuItem eventKey="4" onSelect={(e) => {
              utils.headers(e, this.props.data, this.props.callback, {"headerType": 4})
            }}>
            H4
          </MenuItem>
          <MenuItem eventKey="5" onSelect={(e) => {
              utils.headers(e, this.props.data, this.props.callback, {"headerType": 5})
            }}>
            H5
          </MenuItem>
          <MenuItem eventKey="6" onSelect={(e) => {
              utils.headers(e, this.props.data, this.props.callback, {"headerType": 6})
            }}>
            H6
          </MenuItem>
        </DropdownButton>

        <ButtonGroup>
          <Btn onClick={() => this.setState({showLinkModal: true})} bsStyle="default"><FaChain/></Btn>
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

        <Button callback={this.props.callback} handleClick={utils.table} toolTip="Table" data={this.props.data} icon="FaTable"/>
        <Button callback={this.props.callback} handleClick={utils.rule} toolTip="Horizintal Rule" data={this.props.data} icon="FaEllipsisH"/>
        <Button callback={this.props.callback} handleClick={utils.blockQuote} toolTip="Block Quote" data={this.props.data} icon="FaIndent"/>
        <ButtonGroup>
          <Btn onClick={() => this.setState({showImageModal: true})} bsStyle="default"><FaFileImageO/></Btn>
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
        <Button callback={this.props.callback} handleClick={utils.ulList} toolTip="Unordered List" data={this.props.data} icon="FaListUl"/>
        <Button callback={this.props.callback} handleClick={utils.olList} toolTip="Ordered List" data={this.props.data} icon="FaListOl"/>
      </ButtonGroup>
      <ButtonGroup>
        <Button callback={this.props.callback} handleClick={utils.code} toolTip="Code" data={this.props.data} icon="MdCode"/>
        <Button callback={this.props.callback} handleClick={utils.codeBlock} toolTip="Code Block" data={this.props.data} icon="FaFileCodeO"/>
      </ButtonGroup>
      <ButtonGroup>
        <Button callback={this.props.callback} handleClick={utils.copy} toolTip="Copy" data={this.props.data} icon="MdContentCopy"/>
        <Button callback={this.props.callback} handleClick={utils.clearText} toolTip="Clear" data={this.props.data} icon="MdClearAll"/>
        <Button callback={this.props.callback} handleClick={utils.download} toolTip="Download" data={this.props.data} icon="MdFileDownload"/>
      </ButtonGroup>
    </ButtonToolbar>);
  }
}
