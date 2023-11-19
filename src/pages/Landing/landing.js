import classes from "./landing.module.css";

const Landing = () => {
  return (
    <>
      <main className={` ${classes.main}`}>
        <div className={`${classes.container}`}>
          <h1 className="center t-bg mb-md">
            I'm Yusuf Bankole, a frontend developer from Lagos Nigeria.
          </h1>
          <p className="center t-md">
            Passionate about high quality solutions for clients, coding to solve
            a problem by doing something better, faster, or easier. I ensure the
            product is involved in a process of continuous improvement and
            refinement to ensure that it is functioning at the highest level
            possible and achieving maximum client satisfaction.
          </p>
        </div>
      </main>
    </>
  );
};

export default Landing;
