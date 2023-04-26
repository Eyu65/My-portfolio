import React, {useState, createContext} from "react";
import Sidebar from "./Component/Sidebar/Sidebar";
import About from "./Component/About/About";
import TechStack from "./Component/TechStack/TechStack";
import Project from "./Component/Projects/Project";
import WorkExperience from "./Component/WorkExperience/WorkExperience";
import Education from "./Component/Education/Education";
import Testimonial from "./Component/Testimonial/Testimonial";
import Contact from "./Component/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import NavbarMobileView from "./Component/Sidebar/NavbarMobileView";

export const ThemeContext = createContext(null);

const App = ()=>{

  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
<ThemeContext.Provider value={{ theme,changeTheme }}>

  <div id={theme}>
    <NavbarMobileView changeTheme={changeTheme} theme={theme}/>
    <Sidebar changeTheme={changeTheme} theme={theme}/>
    <About />
    <WorkExperience />
    <TechStack />
    <Education />
    <Project />
    
    <Contact />
  </div>
    
    <ScrollToTop 
    smooth = {true}
    top="20"
    color="white"
    height="20"
    width="20"
    style={{ borderRadius: "90px", backgroundColor: "#38004c"}}
    />
</ThemeContext.Provider>
    );
  }

  export default App;
  