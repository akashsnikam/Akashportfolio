import React from "react";
import skils from "./Data/skills.json";

const Skils = () => {
  return (
    <>
      <div className="container skills" id="skills">
        <h1>SKILS</h1>
        <div className="items">
          {skils.map((data) => {
            return (
              <>
                <div
                  className="item"
                  key={data.id}
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${data.imageSrc}`}
                    alt=""
                  />
                  <h3>{data.title}</h3>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skils;
