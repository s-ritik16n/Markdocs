const downloadjs = require('downloadjs');

export const preview = (text) => {
  console.log("preview util - pending");
  return "returned data from preview function";
}

export const download = (event, text, cb, options) => {
  if (text.length > 0) downloadjs(text, "readme.md", "text/plain");
}
