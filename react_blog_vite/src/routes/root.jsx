import { Outlet } from "react-router-dom";
import { useState } from "react";
import AboutMe from "../port/AboutMe";
import Career from "../port/Career";
import Copyright from "../port/Copyright";
import Last from "../port/Last";
import Skills from "../port/Skills";
import Stars from "../port/Stars";
import Title from "../port/Title";
import TopMenu from "../port/TopMenu";

export default function Root() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          top: 10,
          left: 20,
          zIndex: 1000,
          background: "none",
          border: "none",
          fontSize: "2rem",
          cursor: "pointer",
          color: "#b9c6e0",
        }}
      >
        ☰
      </button>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: isOpen ? 0 : "-250px",
          width: "250px",
          height: "100%",
          backgroundColor: "#f0f0f0",
          boxShadow: "2px 0 5px rgba(0,0,0,0.3)",
          transition: "left 0.3s ease-in-out",
          padding: "1rem",
          zIndex: 999,
        }}
      >
        <div id = "sidebar">  
        <nav>
          <ul>
            <li><a href={`/`}>홈</a></li>
            <li><a href={`/contacts/1`}>글쓰기</a></li>
            <li><a>Blog 목록</a></li>
            <li><a href={`/javascripts/1`}>- JavaScript</a></li>
          </ul>
        </nav>
        </div>
      </div>

      <div style={{ marginLeft: isOpen ? "250px" : "0", transition: "margin-left 0.3s" }}>
        <div id="detail">
          <Outlet />
        </div>

        <div>
          <TopMenu />
        </div>
        <div>
          <Stars />
        </div>
        <div>
          <Title />
        </div>
        <div>
          <Stars />
        </div>
        <div>
          <AboutMe />
        </div>
        <div>
          <Stars />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Stars />
        </div>
        <div>
          <Career />
        </div>
        <div>
          <Last />
        </div>
        <div>
          <Copyright />
        </div>
      </div>
    </>
  );
}
