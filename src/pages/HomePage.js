import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    //     console.log(id);
    toast.success("Created a New Room.!");
  };

  const joinRoom = () => {
    if (!roomId || !userName) {
      toast.error("Room ID & UserName is required!");
      return;
    }
    navigate(`/editor/${roomId}`, {
      state: {
        userName,
      },
    });
  };

  const handleInputEnter = (e) => {
    //     console.log("event", e.code);
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    //   <h1>HomePage</h1>;
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          className="homePageLogo"
          src="/code-sync.png"
          alt="code-synce-logo"
        />

        <h4 className="mainLabel">Paste invitation Room ID</h4>
        <div className="inputGroup">
          <input
            type={"text"}
            className="inputBox"
            placeholder="Enter Room ID"
            onChange={(e) => {
              setRoomId(e.target.value);
            }}
            value={roomId}
            onKeyUp={handleInputEnter}
          />
          <input
            type={"text"}
            className="inputBox"
            placeholder="Enter UserName"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            // onpaste="return false;"
            // ondrop="return false;"
            // autocomplete="off"
            value={userName}
            onKeyUp={handleInputEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If u don't hva an invite then create{" "}
            <a onClick={createNewRoom} href="/" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          built with love ❤️ By{" "}
          <a href="https://github.com/BHuvan-A25?tab=overview&from=2023-01-01&to=2023-01-31">
            BHuvan
          </a>
        </h4>
      </footer>
    </div>
  );
};

export default HomePage;
