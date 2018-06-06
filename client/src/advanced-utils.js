const downloadjs = require('downloadjs');
import axios from 'axios';

export const preview = (text) => {
  console.log("preview util - pending");
  return "returned data from preview function";
}

export const download = (event, text, cb, options) => {
  if (text.length > 0) downloadjs(text, "readme.md", "text/plain");
}

export const githubLogin = (code, state, cb) => {
  if (!code || !state) {
    cb("Error: code or state not present!!!");
    return;
  }
}
