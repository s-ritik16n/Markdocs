import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './Toolbar';
import Editor from './Editor';
import Preview from './Preview';

export default class MarkdocsApp extends React.Component {
  render = () => {
    return (
      <div>
        <Toolbar />
        <Editor />
        <Preview />
      </div>
    );
  }
}
