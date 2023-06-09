import { LandingPage } from "./Screens/LandingPage";
import GlobalStyle from "./globalStyles";
import { GrLinkedin } from "react-icons/gr";
import { FiGithub } from "react-icons/fi"; 

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <LandingPage />
      <div className="social-icons">
        <div className="linkedin-icon">
          <GrLinkedin size={26} color="#fff" onClick={() => window.open("https://www.linkedin.com/in/joaom4rcosg/")}/>
        </div>
        <div className="github-icon">
          <FiGithub size={26} color="#fff" onClick={() => window.open("https://github.com/jm4rcos")}/>
        </div>
      </div>
    </div>
  );
}

export default App
