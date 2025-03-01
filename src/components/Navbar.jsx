import React from "react";

const Navbar = () => {
  return (
    <>
      <div className=" nav_bar " data-aos="fade-down" data-aos-duration="1000">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a
              className="navbar-brand left text-white d-flex align-items-center "
              href="#"
            >
              <img
                src={`${import.meta.env.BASE_URL}akash1.jpg`}
                alt="Logo"
                className="logo me-2"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              Akash Nikam
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ backgroundColor: "white", border: "1px solid white" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link active nav_items text-white"
                    aria-current="page"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active nav_items text-white"
                    aria-current="page"
                    href="#about"
                  >
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active nav_items text-white"
                    aria-current="page"
                    href="#experince"
                  >
                    Experience
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active nav_items text-white"
                    aria-current="page"
                    href="#skills"
                  >
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active nav_items text-white"
                    aria-current="page"
                    href="#project"
                  >
                    Project
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active nav_items text-white"
                    aria-current="page"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
