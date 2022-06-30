import React from "react";
import "./Home.css";
// import geeta from '../public/Images/geeta.jpeg';
const imagesize = {
  width: 100,
  height: 50,
  // borderradius :50,
};

const Home = () => {
  return (
    <div className="container front-tab ">
      <ul className="nav nav-tabs  " id="myTab" role="tablist">
        <li className="nav-item " role="presentation">
          <button
            className="nav-link active text-danger"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Geeta
          </button>
        </li>
        <li className="nav-item " role="presentation">
          <button
            className="nav-link text-danger"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Quran
          </button>
        </li>
        <li className="nav-item  " role="presentation">
          <button
            className="nav-link text-danger"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Bible
          </button>
        </li>
      </ul>
      <div className="tab-content geeta-wallpaper mx-auto" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <img
            className="img-fluid"
            stye={imagesize}
            src="https://i.pinimg.com/originals/7f/84/4b/7f844bcc7dd8d1612a1792c3755ed952.jpg"
            alt=""
            srcset=""
          />
          <div className="search-box">
            <form class="d-flex position-absolute ">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                search1
              </button>
            </form>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <img
            className="img-fluid"
            stye={imagesize}
            src="https://www.parhlo.com/wp-content/uploads/2019/04/Quran-1.jpg.webp"
            alt=""
            srcset=""
          />
          <div className="search-box">
            <form class="d-flex position-absolute ">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                search2
              </button>
            </form>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <img
            className="img-fluid"
            stye={imagesize}
            src="https://www.religiousstudiesproject.com/wp-content/uploads/2020/10/mosaic-1925825_1280.jpg"
            alt=""
            srcset=""
          />

          <div className="search-box mx-auto">
            <form class="d-flex position-absolute">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search3
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
