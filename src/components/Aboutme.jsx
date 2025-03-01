import React from "react";

const Aboutme = () => {
  return (
    <>
      <div className="heading-container" id="about">
        <h1 className="heading">ABOUT ME</h1>
      </div>

      <div
        className="description-box"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        {/* Second Section: Summary */}

        <div className="summary">
          <p>
            Hello, I'm Akash Shravan Nikam, a passionate tech enthusiast on a
            journey of innovation and continuous learning. Currently pursuing a
            Bachelor's in Artificial Intelligence and Machine Learning (Honours
            in Cyber Security), I thrive on building cutting-edge tech projects.
          </p>
          <p>
            With hands-on experience as a MERN stack developer, frontend web
            developer, and Python programmer, I have contributed to projects
            like eCommerce full-stack applications and core web applications. My
            tech toolkit includes Java, Python, MERN Stack, SQL, HTML, CSS, and
            JavaScript.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new places, enhancing
            my cricket skills, and immersing myself in podcasts. Let's connect
            and create the future together! 🚀
          </p>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
