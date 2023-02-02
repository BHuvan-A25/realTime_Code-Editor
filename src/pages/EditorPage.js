import React, { useState } from "react";
// import { Client } from "../Components/Client";
import Client from "../Components/Client";
import Editor from "../Components/Editor";

const EditorPage = () => {
  const [clients /*setClients*/] = useState([
    { socketId: 1, userName: "BHuvan A" },
    { socketId: 2, userName: "Khushi S" },
    { socketId: 3, userName: "Khushi S" },
    { socketId: 4, userName: "Khushi S" },
  ]);

  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img
              className="logoImage"
              src="/code-sync.png"
              alt="Logo Not Loaded"
            />
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {clients.map((client) => (
              <Client key={client.socketId} userName={client.userName} />
            ))}
          </div>
        </div>
        <button className="btn copyBtn">Copy ROOM ID</button>
        <button className="btn leaveBtn">Leave</button>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
