import React from "react";
import experience from "./Data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container ex" id="experince">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-item text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                  <img
                    className="campany"
                    src={`${import.meta.env.BASE_URL}assets/${data.imageSrc}`}
                    alt="Company Logo"
                  />
                </div>
                <div className="right">
                  <h3>{data.role}</h3>
                  <h5>{data.organisation}</h5>
                  <h5>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate}
                      {" -"} {data.endDate}
                      {" , "}
                    </span>{" "}
                    <span style={{ color: "yellow" }}>{data.location}</span>
                  </h5>
                  <span style={{ color: "yellow" }}>
                    <h7>{data.experiences[0]}</h7>,
                    <h7>{data.experiences[1]}</h7>
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
