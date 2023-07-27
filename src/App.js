import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLink from "./components/SocialLink";
import Footer from "./components/Footer"
import { useState } from "react";
import LoadingBar from 'react-top-loading-bar'

function App()
 { 
  const [progress, setProgress] = useState(100);
  return (
    <div>
      <LoadingBar
        color='#0000FF'
        height={5}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <NavBar onMouseOver={() => setProgress(val => val + 10)}  />
      <Home onMouseOver={() => setProgress(val => val + 10)} />
      <About onMouseOver={() => setProgress(val => val + 10)}/>
      <Projects onMouseOver={() => setProgress(val => val + 10)} />
      <Experience onMouseOver={() => setProgress(val => val + 10)} />
      <Contact onMouseOver={() => setProgress(val => val + 10)} />
      <Footer oonMouseOver={() => setProgress(val => val + 10)} />
      <SocialLink onMouseOver={() => setProgress(val => val + 10)} />
      </div>
  );
}

export default App;