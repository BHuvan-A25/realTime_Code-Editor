import React, { useEffect } from "react";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/midnight.css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/mode/javascript/javascript";
const Editor = () => {
  useEffect(() => {
    async function init() {
      CodeMirror.fromTextArea(document.getElementById("realtimeEditor"), {
        mode: { name: "javascript", json: true },
        theme: "midnight",
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
      });
    }
    init();
  }, []);
  // const codeMirrorRef = useRef(null);

  return (
    // <CodeMirror/>
    <textarea id="realtimeEditor" defaultValue={"//Code Here"}></textarea>
  );
};
export default Editor;
