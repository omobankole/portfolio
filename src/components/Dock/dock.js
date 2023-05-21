import { Link } from "react-router-dom";
import {
  Dark,
  Home,
  LinkedIn,
  Mail,
  Projects,
  Twitter,
} from "../../constant/svgs";
import classes from "./dock.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import Avatar from "../../assets/images/Dock/banky.png";
import GithubLight from "../../assets/images/Dock/github-light.png";
import GithubDark from "../../assets/images/Dock/github-dark.png";

const Dock = () => {
  let { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };
  return (
    <div className={`flex ${classes.container}`}>
      <div className={classes.circle}>
        <img src={Avatar} alt="avatar" />
      </div>
      <span className={classes.line}></span>
      <Link to="/" className={classes.home}>
        <p>Home</p>
        <Home />
      </Link>
      <Link to="/projects" className={classes.projects}>
        <p>Projects</p>
        <Projects />
      </Link>
      {/* <a
        className={classes.blog}
        href="https://medium.com/@vicopem"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>My Blog</p>
        <Blog />
      </a> */}
      <a
        className={classes.github}
        href="https://github.com/omobankole"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>GitHub</p>
        {theme === "dark" ? (
          <img src={GithubLight} alt="GitHub" />
        ) : (
          <img src={GithubDark} alt="GitHub" />
        )}
      </a>
      <span className={classes.line}></span>
      <a
        className={classes.linkedIn}
        href="https://www.linkedin.com/in/bankole-yusuf-olatunji/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>LinkedIn</p>
        <LinkedIn />
      </a>
      <a
        className={classes.twitter}
        href="https://twitter.com/omobankole1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Twitter</p>
        <Twitter />
      </a>
      <a
        className={classes.mail}
        href="mailto:oluwabankyusuf1@gmail.com?subject=Hi%Yusuf&body=I%20saw%20your%20portfolio%20"
        rel="noopener noreferrer"
      >
        <p>Mail</p>
        <Mail />
      </a>
      <div className={classes.dark} onClick={handleClick}>
        <p>{theme === "dark" ? "Light" : "Dark"}</p>
        <Dark />
      </div>
    </div>
  );
};

export default Dock;
