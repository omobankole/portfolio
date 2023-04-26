import Landing from "./pages/Landing/landing";
import Projects from "./pages/Projects/projects";
import { Routes, Route } from "react-router-dom";
import "./globals/utilities.css";
import "./globals/typography.css";
import { ThemeContext } from "./context/index";
import { useState, useEffect } from "react";


const App = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme === "light") document.body.classList.add("light");
    else document.body.classList.remove("light");
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </ThemeContext.Provider>
  );
};

export default App;
