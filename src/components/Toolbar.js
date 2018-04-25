import React from 'react';
import ReactDOM from 'react-dom';
import GlyphButton from './GlyphButton';
import Button from './Button';
import * as utils from '../utils';
import { ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { Button as Btn } from 'react-bootstrap';


export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }


  render = () => {
    return (

      <ButtonToolbar>
      <ButtonGroup>
        <Button handleClick={utils.bold} toolTip="Strong Text" data={this.props.data} icon="FaBold"/>
        <Button handleClick={utils.italic} toolTip="Italic Text" data={this.props.data} icon="FaItalic"/>
      </ButtonGroup>
      <ButtonGroup>
        <Button handleClick={utils.headers} toolTip="Headers" data={this.props.data} icon="FaHeader"/>
        <Button handleClick={utils.link} toolTip="Link" data={this.props.data} icon="FaChain"/>
        <Button handleClick={utils.table} toolTip="Table" data={this.props.data} icon="FaTable"/>
        <Button handleClick={utils.rule} toolTip="Horizintal Rule" data={this.props.data} icon="FaEllipsisH"/>
        <Button handleClick={utils.blockQuote} toolTip="Block Quote" data={this.props.data} icon="FaIndent"/>
        <Button handleClick={utils.image} toolTip="Image" data={this.props.data} icon="FaFileImageO"/>
      </ButtonGroup>
      <ButtonGroup>
        <Button handleClick={utils.ulList} toolTip="Unordered List" data={this.props.data} icon="FaListUl"/>
        <Button handleClick={utils.olList} toolTip="Ordered List" data={this.props.data} icon="FaListOl"/>
      </ButtonGroup>
      <ButtonGroup>
        <Button handleClick={utils.code} toolTip="Code" data={this.props.data} icon="MdCode"/>
        <Button handleClick={utils.codeBlock} toolTip="Code Block" data={this.props.data} icon="FaFileCodeO"/>
      </ButtonGroup>
      <ButtonGroup>
        <Button handleClick={utils.copy} toolTip="Copy" data={this.props.data} icon="MdContentCopy"/>
        <Button handleClick={utils.clearText} toolTip="Clear" data={this.props.data} icon="MdClearAll"/>
        <Button handleClick={utils.download} toolTip="Download" data={this.props.data} icon="MdFileDownload"/>
      </ButtonGroup>
    </ButtonToolbar>
);
  }
}
