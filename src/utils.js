export const bold = (event, text, cb) => {
  text += text.length > 0 ? " **<text_here>**" : "**<text_here>**";
  cb(text);
}

export const italic = (event, text, cb) => {
  text += text.length > 0 ? " *<text_here>*" : "*<text_here>*";
  cb(text);
}

export const headers = (event, text, cb) => {
  console.log("headers util - pending");
  cb(text);
}

export const link = (event, text, cb) => {
  text += text.length > 0 ? " [<title>](<URL>)" : "[<title>](<URL>)";
  cb(text);
}

export const image = (event, text, cb) => {
  text += text.length > 0 ? " \n\n![<alt_text>](<Image_URL>)" : "![<alt_text>](<Image_URL>)";
  cb(text);
}

export const ulList = (event, text, cb) => {
  console.log("Unordered list util - pending");
  cb(text);
}

export const olList = (event, text, cb) => {
  console.log("Ordered list util - pending");
  cb(text);
}

export const table = (event, text, cb) => {
  console.log("table util - pending");
  cb(text);
}

export const rule = (event, text, cb) => {
  text += text.length > 0 ? " \n***\n\n" : "***\n\n";
  cb(text);
}

export const code = (event, text, cb) => {
  text += text.length > 0 ? " `<code_here>`" : "`<code_here>`";
  cb(text);
}

export const codeBlock = (event, text, cb) => {
  text += text.length > 0 ? "\n\n```<language>\n\n<code_here>\n\n```" : "```<language>\n\n<code_here>\n\n```";
  cb(text);
}

export const blockQuote = (event, text, cb) => {
  text += text.length > 0 ? text.split("\n")[text.split("\n").length-1][0] === ">" ? "\n><text_here>" : "\n\n><text_here>" : "><text_here>";
  cb(text);
}

export const copy = (event, text, cb) => {
  console.log("copy util - pending");
  cb(text);
}

export const download = (event, text, cb) => {
  console.log("download util - pending");
  cb(text);
}

export const clearText = (event, text, cb) => {
  // requires one confirmation
  console.log("clear text util - pending");
  cb(text);
}
