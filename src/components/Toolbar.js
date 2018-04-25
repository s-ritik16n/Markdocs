import React from 'react';
import ReactDOM from 'react-dom';
import GlyphButton from './GlyphButton';
import * as utils from '../utils';
import {ButtonGroup, ButtonToolbar} from 'react-bootstrap';
import {Button} from './Button';
import {Button as Btn} from 'react-bootstrap';
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
  FaIndent
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

  render = () => {
    return (<ButtonToolbar>
      <ButtonGroup>
        <Btn bsStyle="default"><FaBold/></Btn>
        <Btn bsStyle="default"><FaItalic/></Btn>
      </ButtonGroup>
      <ButtonGroup>
        <Btn bsStyle="default"><FaHeader/></Btn>
        <Btn bsStyle="default"><FaChain/></Btn>
        <Btn bsStyle="default"><FaTable/></Btn>
        <Btn bsStyle="default"><FaEllipsisH/></Btn>
        <Btn bsStyle="default"><FaIndent/></Btn>
        <Btn bsStyle="default"><FaFileImageO/></Btn>
      </ButtonGroup>
      <ButtonGroup>
        <Btn bsStyle="default"><FaListUl/></Btn>
        <Btn bsStyle="default"><FaListOl/></Btn>
      </ButtonGroup>
      <ButtonGroup>
        <Btn bsStyle="default"><MdCode/></Btn>
        <Btn bsStyle="default"><FaFileCodeO/></Btn>
      </ButtonGroup>
      <ButtonGroup>
        <Btn bsStyle="default"><MdContentCopy/></Btn>
        <Btn bsStyle="default"><MdClearAll/></Btn>
        <Btn bsStyle="default"><MdFileDownload/></Btn>
      </ButtonGroup>
    </ButtonToolbar>);
  }
}
