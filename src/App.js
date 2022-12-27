import "./App.css";
import headshot from "./img/headshot.png";
import resume from "./img/resume.svg";
import email from "./img/email.svg";
import github from "./img/github.svg";
import linkedin from "./img/linkedin.svg";
import filePath from "./img/resume.pdf";

function App() {
  return (
    <div className="App">
      <div className="everything">
        <div className="header">
          <div className="words">
            <h1 id="name">Tanishq Jain</h1>
            <p id="school">Student at Georgia Institute of Technology</p>
          </div>
          <div className="pic">
            <img id="facePic" src={headshot} alt="face"></img>
          </div>
        </div>
        <div className="testing">
          <div className="icons">
            <img
              alt="resumeee"
              id="resume"
              src={resume}
              onClick={(event) => {
                event.preventDefault();
                window.open(filePath);
              }}
            ></img>
            <img
              alt="e-mail"
              id="email"
              src={email}
              onClick={() => (window.location = "mailto:tjain44@gatech.edu")}
            ></img>
            <img
              alt="git"
              id="github"
              src={github}
              onClick={() =>
                (window.location = "https://github.com/tanishqj123")
              }
            ></img>
            <img
              alt="linked"
              id="linkedin"
              src={linkedin}
              onClick={() =>
                (window.location =
                  "https://www.linkedin.com/in/tanishq-jain-data/")
              }
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
