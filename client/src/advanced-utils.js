const downloadjs = require('downloadjs');
import axios from 'axios';

export const preview = (text) => {
  console.log("preview util - pending");
  return "returned data from preview function";
}

export const download = (event, text, cb, options) => {
  if (text.length > 0) downloadjs(text, "readme.md", "text/plain");
}

export const githubLogin = (code, state, cb, options = null) => {
  // this will call the backend API and return a list of Repos
  console.log("called githubLogin");
  if (!code || !state) {
    cb("Error: code or state not present!!!");
    return;
  }
  return cb(null, 'repos');
}

export const githubUpload = (event, inputs, cb, options = null) => {
  console.log("called githubUpload");
  return;
}
