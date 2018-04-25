import React from 'react';
import ReactDOM from 'react-dom';
import {Button as Btn} from 'react-bootstrap';
import {Glyphicon, OverlayTrigger, Tooltip} from 'react-bootstrap';
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
  FaBolt
} from 'react-icons/lib/fa';
import {
  MdClearAll,
  MdCode,
  MdContentCopy,
  MdFileDownload
} from 'react-icons/lib/md';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  getToolTip = (content) => {
    return (<Tooltip id={"tooltip-"+content}>{content}</Tooltip>);
  }

  getIcon = () => {
    switch (this.props.icon) {
      case "FaBold":
        return <FaBold/>
        break;
      case "FaItalic":
        return <FaItalic />
        break;
      case "FaHeader":
        return <FaHeader />;
        break;
      case "FaChain":
        return <FaChain />
        break;
      case "FaFileImageO":
        return <FaFileImageO />;
        break;
      case "FaListUl":
        return <FaListUl />
        break;
      case "FaListOl":
        return <FaListOl />
        break;
      case "FaTable":
        return <FaTable />
        break;
      case "FaEllipsisH":
        return <FaEllipsisH />
        break;
      case "FaFileCodeO":
        return <FaFileCodeO />
        break;
      case "FaIndent":
        return <FaIndent />
        break;
      case "MdClearAll":
        return <MdClearAll />
        break;
      case "MdCode":
        return <MdCode />;
        break;
      case "MdContentCopy":
        return <MdContentCopy />
        break;
      case "MdFileDownload":
        return <MdFileDownload />
        break;
      case "FaBolt":
        return <FaBolt />
        break;
      default : return "Button";
    }
  }

  render = () => {
    return (<OverlayTrigger placement="bottom" overlay={this.getToolTip(this.props.toolTip)}>
      <Btn bsStyle="default" onClick={(e) => {
          this.props.handleClick(e, this.props.data)
        }}>
        {this.getIcon()}
      </Btn>
    </OverlayTrigger>);
  }
}
