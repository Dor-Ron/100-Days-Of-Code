const tagMap = {
//key : new Array(open Regex, open html tag, closing Regex, closing tag)
  bold: [/\[b\]/g, "&ltstrong&gt", /\[\/b\]/g, "&lt/strong&gt"],
  italic: [/\[i\]/g, "&ltem&gt", /\[\/i\]/g, "&lt/em&gt"],
  underline: [/\[u\]/g, "&ltu&gt", /\[\/u\]/g, "&lt/u&gt"],
  noParse: [/\[noparse\]/g, "&ltpre&gt", /\[\/noparse\]/g, "&lt/pre&gt"],
  url: [/\[url\]/g, "&lta&gt", /\[\/url\]/g, "&lt/a&gt"],
  superscript: [/\[sup\]/g, "&ltsup&gt", /\[\/sup\]/g, "&lt/sup&gt"],
  subscript: [/\[sub\]/g, "&ltsub&gt", /\[\/sub\]/g, "&lt/sub&gt"],
  small: [/\[small\]/g, '&ltsmall&gt', /\[\/small\]/g, "&lt/small&gt"],
  quote: [/\[quote\]/g, "&ltblockquote&gt", /\[\/quote\]/g, "&lt/blockquote&gt"],
  strikeThrough: [/\[s\]/g, "&lts&gt", /\[\/s\]/g, "&lt/s&gt"]
};

const button = document.querySelector('input');

button.addEventListener("click", showInput)

function getInput() {
  return document.querySelector('textarea').value;
}

function showInput() {
  let bbCode = getInput();
  for (tag in tagMap) {
    bbCode = bbCode.replace(tagMap[tag][0], tagMap[tag][1]).replace(tagMap[tag][2], tagMap[tag][3]);
  }
  document.getElementById('output').innerHTML = bbCode;
}
