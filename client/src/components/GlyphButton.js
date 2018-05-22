import React from 'react';
import ReactDOM from 'react-dom';
import { Glyphicon } from 'react-bootstrap';

export default class GlyphButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <Glyphicon glyph={this.props.glyph} onClick={(e) => {this.props.handleClick(e, this.props.data)}} />
    );
  }
}
