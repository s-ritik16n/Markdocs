import React from 'react';
import ReactDOM from 'react-dom';
import {Button as Btn} from 'react-bootstrap';
import {Glyphicon, OverlayTrigger, Tooltip} from 'react-bootstrap';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);

    console.log(error);
    console.log("info -");
    console.log(info);
  }

  getToolTip = (content) => {
    return (<Tooltip id={"tooltip-"+content}>{content}</Tooltip>);
  }

  render = () => {
    return (<OverlayTrigger placement="bottom" overlay={this.getToolTip(this.props.toolTip)}>
      <Btn bsStyle={this.props.bsStyle || "default"} onClick={(e) => {
          this.props.handleClick(e, this.props.data, this.props.callback, this.props.options)
        }}>
        {this.props.icon || this.props.buttonText}
      </Btn>
    </OverlayTrigger>);
  }
}
