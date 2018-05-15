import React from 'react';
import ReactDOM from 'react-dom';
import  '../css/style.css';
let classNames = require('classnames');

export default class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    let previewStyle = classNames({
      'float-right': true,
      'width-50': true
    })
    return (
      <div className={previewStyle}>
        {this.props.hide && <div ref="preview">{this.props.value || ""}</div>}
      </div>);
  }
}
