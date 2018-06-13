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
  // this will call the backend API and return a list of Repos

  console.log("called githubLogin");
  if (!code || !state) {
    console.log("Error: code or state not present!!!");
    cb("Error: code or state not present!!!");
    return;
  }
  try {
    axios({
      method: 'post',
      url:'/getrepos_github',
      headers: {"Accept": "application/json"},
      data: {
        code: code,
        state: state
      }
    })
    .then((res) => {
      if (res.success) {
        console.log("got successfull reponse in return");
        console.log(res['res']);
        return cb(null, res['res']);
      } else {
        console.log(res);
        return cb(`error occured in the backend`);
      }
    })
    .catch((err) => {
      console.log(`error in response - ${err}`);
      return cb(`error occured while accessing Github API`);
    })
  } catch (e) {
    console.log(`error in axios promise - ${e}`);
    return cb("Error occured while sending request");
  }
}

export const githubUpload = (event, inputs, cb, options = null) => {
  let file = inputs.file;
  let repo = inputs.repo;
  // call another endpoint in the backend to upload file to Github
  console.log("called githubUpload");
  return;
}
