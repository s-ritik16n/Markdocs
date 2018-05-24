import React from 'react';
import ReactDOM from 'react-dom';
import MarkdocsApp from './components/MarkdocsApp';
import OAuth from './components/OAuth';
import {Switch, Route, browserHistory} from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(<MarkdocsApp />, document.getElementById('app'));
