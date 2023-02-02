import CodeMirror from "@uiw/react-codemirror";
// import { javascript } from "@uiw/codemirror-extensions-javascript";
// import { abcdef } from "@uiw/codemirror-themes-all";
import {
  loadLanguage,
  // langNames,
  /*langs*/
} from "@uiw/codemirror-extensions-langs";
// import { javas } from "@codemirror/lang-javascript";

loadLanguage("javascript");

// console.log(javas.javascript());

// console.log("langNames:", langNames);
// // import React from "react";
const Editor = () => {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      // extensions={[langs.javascript()]}
      // extensions={[javascript({ json: true })]}
      onChange={(value, viewUpdate) => {
        console.log("value:", value);
      }}
    />
  );
};
export default Editor;
