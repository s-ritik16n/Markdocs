import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'react-bootstrap';
import { Button as Btn } from 'react-bootstrap';
import Button from './Button';

export default class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.escEvent = this.escEvent.bind(this);
  }

  componentDidUpdate() {
    // document.addEventListener("keypress", this.escEvent);
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log("info -");
    console.log(info);
  }

  escEvent(event) {
    if (event.keyCode == 27) this.props.onHide();
  }

  render = () => {
    return (
      <Modal onKeyUp={this.escEvent} show={this.props.show} bsSize='large' aria-labelledby={this.props.id}>
        <Modal.Header>
          <Modal.Title id={this.props.id}>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.body}
        </Modal.Body>
        <Modal.Footer>
          <Btn onClick={this.props.onHide}>Close</Btn>
          <Button type="submit" toolTip={this.props.toolTip} buttonText={this.props.buttonText} bsStyle={this.props.bsStyle || "default"} icon="" handleClick={this.props.handleClick} data={this.props.data} callback={this.props.callback} options={this.props.options}/>
        </Modal.Footer>
      </Modal>
    );
  }
}
