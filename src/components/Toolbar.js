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
        <Button callback={this.props.callback} handleClick={utils.bold} toolTip="Strong Text" data={this.props.data} icon="FaBold"/>
        <Button callback={this.props.callback} handleClick={utils.italic} toolTip="Italic Text" data={this.props.data} icon="FaItalic"/>
      </ButtonGroup>
      <ButtonGroup>
        <Button callback={this.props.callback} handleClick={utils.headers} toolTip="Headers" data={this.props.data} icon="FaHeader"/>
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
    </ButtonToolbar>
);
  }
}
