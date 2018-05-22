import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonGroup, ButtonToolbar, DropdownButton, MenuItem, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <DropdownButton bsStyle={this.props.bsStyle} key={this.props.keyProp} title={this.props.title} id={this.props.id}>
        {
          this.props.text.map((t, index) => (
            <MenuItem
              eventKey={index.toString()} key={index.toString()}
              onSelect={(e) => {this.props.utils(e, this.props.data, this.props.callback, this.props.options[index])}}
              >
              {t}
            </MenuItem>
          ))
        }
      </DropdownButton>
    );
  }
}
