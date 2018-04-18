import React from 'react';
import ReactDOM from 'react-dom';

export default class Preview extends React.Component {
  constructor(props){
    super(props);
  }

  render = () => {
    return (
      <div>
        {this.props.hide && <div ref="preview">{this.props.value || ""}</div>}
      </div>
    );
  }
}
