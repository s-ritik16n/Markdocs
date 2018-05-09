export const bold = (event, text, cb, options = null) => {
  text += text.length > 0 ? " **<text_here>**" : "**<text_here>**";
  cb(text);
}

export const italic = (event, text, cb, options = null) => {
  text += text.length > 0 ? " *<text_here>*" : "*<text_here>*";
  cb(text);
}

export const headers = (event, text, cb, options = null) => {
  if (options.headerType) {
    switch (options.headerType) {
      case 1:
        text += text.length > 0 ? "\n\n# " : "# ";
        break;
      case 2:
        text += text.length > 0 ? "\n\n## " : "## ";
        break;
      case 3:
        text += text.length > 0 ? "\n\n### " : "### ";
        break;
      case 4:
        text += text.length > 0 ? "\n\n#### " : "#### ";
        break;
      case 5:
        text += text.length > 0 ? "\n\n##### " : "##### ";
        break;
      case 6:
        text += text.length > 0 ? "\n\n###### " : "###### ";
        break;
      default: text += text.length > 0 ? "\n\n###### " : "###### ";
    }
  }
  cb(text);
}

export const link = (event, text, cb, options = null) => {
  text += text.length > 0 ? ` [${options.title || '<title>'}](${options.url || '<url>'})` : `[${options.title || '<title>'}](${options.url || '<url>'})`;
  cb(text);
}

export const image = (event, text, cb, options = null) => {
  text += text.length > 0 ? ` \n\n![${options.alt_text || '<alt_text>'}](${options.image_URL || '<Image_URL>'})` : `![${options.alt_text || '<alt_text>'}](${options.image_URL || '<Image_URL>'})`;
  cb(text);
}

export const strikeThrough = (event, text, cb, options = null) => {
  text += text.length > 0 ? " ~~<text_here>~~" : "~~<text_here>~~";
  cb(text);
}

export const ulList = (event, text, cb, options = null) => {
  console.log("Unordered list util - pending");
  cb(text);
}

export const olList = (event, text, cb, options = null) => {
  console.log("Ordered list util - pending");
  cb(text);
}

export const table = (event, text, cb, options = null) => {
  console.log("table util - pending");
  cb(text);
}

export const rule = (event, text, cb, options = null) => {
  text += text.length > 0 ? "\n\n***\n\n" : "***\n\n";
  cb(text);
}

export const code = (event, text, cb, options = null) => {
  text += text.length > 0 ? " `<code_here>`" : "`<code_here>`";
  cb(text);
}

export const codeBlock = (event, text, cb, options = null) => {
  text += text.length > 0 ? "\n\n```<language>\n\n<code_here>\n\n```" : "```<language>\n\n<code_here>\n\n```";
  cb(text);
}

export const blockQuote = (event, text, cb, options = null) => {
  text += text.length > 0 ? text.split("\n")[text.split("\n").length-1][0] === ">" ? "\n><text_here>" : "\n\n><text_here>" : "><text_here>";
  cb(text);
}

export const copy = (event, text, cb, options = null) => {
  console.log("copy util - pending");
  cb(text);
}

export const download = (event, text, cb, options = null) => {
  console.log("download util - pending");
  cb(text);
}

export const clearText = (event, text, cb, options = null) => {
  cb("");
}
