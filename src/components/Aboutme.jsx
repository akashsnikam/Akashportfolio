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
        {/* First Section: Personal Info & Education */}
        <div className="info-section">
          <div className="personal-info">
            <h5>Personal Information</h5>
            <div className="information-entry">
              <p>
                <strong>Name:</strong> Akash Shravan Nikam
              </p>
              <p>
                <strong>Email:</strong> akashnikam107@email.com
              </p>
              <p>
                <strong>Phone:</strong> +91 9373692320
              </p>
              <p>
                <strong>DOB:</strong> 10 Sep 2002
              </p>
              <p>
                <strong>Gender:</strong> Male
              </p>
            </div>

            <div className="information-entry">
              <p>
                <strong>GFG Institute Rank :</strong> 24
              </p>
              <p>
                <strong>Project Completed:</strong> 5
              </p>
              <p>
                <strong>Certification:</strong> 5
              </p>
            </div>
          </div>

          <div className="education-info">
            <h5>Education Details</h5>
            <div className="education-entry">
              <p>
                <strong>Course:</strong> Bachelor of Engineering in AIML
              </p>
              <p>
                <strong>College Name:</strong> SSJCOE Dombivali Mumbai
              </p>
              <p>
                <strong>University Name:</strong> University Of Mumbai
              </p>
              <p>
                <strong>Year:</strong> 2022 - 2025
              </p>
              <p>
                <strong>CGPA:</strong> 8.09
              </p>
            </div>
            <div className="education-entry">
              <p>
                <strong>Course:</strong> Diploma in Computer Engineering
              </p>
              <p>
                <strong>College Name:</strong> Snadip Polytechnic Nashik
              </p>
              <p>
                <strong>Year:</strong> 2020 - 2022
              </p>
              <p>
                <strong>Percentage:</strong> 80%
              </p>
            </div>
          </div>
        </div>

        {/* Second Section: Summary */}
        <h5>Summary</h5>
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
