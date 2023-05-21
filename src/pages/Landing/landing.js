import classes from "./landing.module.css";
import { Text } from "../../constant";
import Dock from "../../components/Dock/dock";
import Star from "../../assets/star.png";
import Construction from "../../assets/images/Landing/construction.gif";

const Landing = () => {
  return (
    <>
      <main className={`relative ${classes.main}`}>
        <div className={classes.text1}>
          <Text />
        </div>
        <div className={classes.star2}>
          <img src={Star} alt="" />
        </div>
        <div className={`${classes.container}`}>
          <h1 className="center t-bg mb-md">
            I'm Yusuf Bankole, a software developer from Lagos Nigeria.
          </h1>
          <p className="center t-md">
            Passionate about high quality solutions for clients, coding to solve
            a problem by doing something better, faster, or easier. I ensure the
            product is involved in a process of continuous improvement and
            refinement to ensure that it is functioning at the highest level
            possible and achieving maximum client satisfaction.
          </p>
        </div>

        <div className={classes.text2}>
          <Text />
        </div>
        <div className={classes.star1}>
          <img src={Star} alt="" />
        </div>
        <div className={classes.dock}>
          <Dock />
        </div>
      </main>
      <main className={`absolute-center ${classes.mobile}`}>
        <img src={Construction} alt="" />
        <h1 className="center">
          Construction is ongoing for the mobile view 🥲
          <br />
          <br />
          Use a desktop or check back later, thank you 💜
        </h1>
      </main>
    </>
  );
};

export default Landing;
