import React from 'react';
import ReactDOM from 'react-dom';
import GlyphButton from './GlyphButton';
import Button from './Button';
import * as utils from '../utils';
import {ButtonGroup, ButtonToolbar} from 'react-bootstrap';
import {Button as Btn} from 'react-bootstrap';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import { FaHeader } from 'react-icons/lib/fa';

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (<ButtonToolbar>
      <ButtonGroup>
        <Button callback={this.props.callback} handleClick={utils.bold} toolTip="Strong Text" data={this.props.data} icon="FaBold"/>
        <Button callback={this.props.callback} handleClick={utils.italic} toolTip="Italic Text" data={this.props.data} icon="FaItalic"/>
      </ButtonGroup>
      <ButtonGroup>
        <DropdownButton bsStyle="primary" key="dropdown-header" title={<FaHeader />} id={`split-button-basic-0`}>
          <MenuItem eventKey="1" onSelect={(e) => {utils.headers(e, this.props.data, this.props.callback, {"headerType":1})}}>
            H1
          </MenuItem>
          <MenuItem eventKey="2" onSelect={(e) => {utils.headers(e, this.props.data, this.props.callback, {"headerType":2})}}>
            H2
          </MenuItem>
          <MenuItem eventKey="3" onSelect={(e) => {utils.headers(e, this.props.data, this.props.callback, {"headerType":3})}}>
            H3
          </MenuItem>
          <MenuItem eventKey="4" onSelect={(e) => {utils.headers(e, this.props.data, this.props.callback, {"headerType":4})}}>
            H4
          </MenuItem>
          <MenuItem eventKey="5" onSelect={(e) => {utils.headers(e, this.props.data, this.props.callback, {"headerType":5})}}>
            H5
          </MenuItem>
          <MenuItem eventKey="6" onSelect={(e) => {utils.headers(e, this.props.data, this.props.callback, {"headerType":6})}}>
            H6
          </MenuItem>
        </DropdownButton>
        <Button callback={this.props.callback} handleClick={utils.link} toolTip="Link" data={this.props.data} icon="FaChain"/>
        <Button callback={this.props.callback} handleClick={utils.table} toolTip="Table" data={this.props.data} icon="FaTable"/>
        <Button callback={this.props.callback} handleClick={utils.rule} toolTip="Horizintal Rule" data={this.props.data} icon="FaEllipsisH"/>
        <Button callback={this.props.callback} handleClick={utils.blockQuote} toolTip="Block Quote" data={this.props.data} icon="FaIndent"/>
        <Button callback={this.props.callback} handleClick={utils.image} toolTip="Image" data={this.props.data} icon="FaFileImageO"/>
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
