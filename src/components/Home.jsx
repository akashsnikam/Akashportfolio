import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Akash_Nikam.pdf";
import profile from "/assets/akash1.jpg";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Software Developer", "Full Stack Developer", "Student"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div
          className="left"
          data-aos="fade-down-right"
          data-aos-duration="1000"
        >
          <h5>Hello Friends..I am</h5>
          <h3>Akash Nikam</h3>

          <h2 ref={typedRef}></h2>
          <a
            href={pdf}
            download="Akash_Resume.pdf"
            className="btn btn-outline-warning"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={profile} alt="Profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
