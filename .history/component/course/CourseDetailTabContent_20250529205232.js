import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";

const CourseDetailTabContent = ({ courseData }) => {
  const [activeKey, setActiveKey] = useState("overview");

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  return (
    <Tab.Container activeKey={activeKey} onSelect={handleSelect}>
      <div>
        <Nav
          variant="pills"
          className="nav nav-pills"
          id="pills-tab"
          role="tablist"
        >
          <Nav.Item>
            <Nav.Link eventKey="overview">Overview</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="instructors">Judges</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="reviews" id="reviews">
              Reviews
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Tab.Content id="pills-tabContent">
        <Tab.Pane eventKey="overview">
          <div className="tf__course_overview">
            <h3>Description</h3>
            <p>
            "Spotlight - From Street to Stardom," a first-of-its-kind music talent and innovation 
            reality television series designed to discover, nurture, and showcase exceptional talent
             within the music industry. This includes Singing, Dancing, DJing, and Music Production.
            </p>
            <p>
         A key differentiator is our commitment to direct 
              career progression, actively connecting trained and mentored music talent with industry experts 
              and entities like record labels, music publishers, booking agencies, and sound production houses
               for immediate professional advancement post-show.
            </p>
            <h3>The Opportunity: Why "Spotlight" is a Game Changer:</h3>
            <ul>
              <li>Deep Dive into Music Talent & Innovation.</li>
              <li>Holistic Artist Development:</li>
              <li>Embrace Diverse Genres:</li>
              <li>Maximize Digital Engagement:</li>
              <li>Global Mentorship & Industry Access</li>
              <li>Compelling Storytelling.</li>
            </ul>
                <h3>    Elevate Your Music: Spotlight's Amplified Reach</h3>
            <p>
             
        
Spotlight offers a unique platform to advertise and promote your song to millions. Leveraging national 
TV and extensive digital channels like YouTube, TikTok, Instagram, and Facebook, we ensure your music gets 
seen and heard by a massive, engaged audience. This unparalleled exposure helps you build a fanbase,
 attract collaborations, and gain the recognition needed to truly thrive. Put your music in the spotlight and connect with the audience it deserves.
            </p>

            {/* <h3>Course features:</h3>
            <ul>
              <li>Business school's Institut constructivism.</li>
              <li>We give management school best.</li>
              <li>We give management school best.</li>
              <li>Business school's Institut constructivism.</li>
              <li>We give management school best.</li>
              <li>We give management school best.</li>
            </ul>
            <p>
              Amet consectetur adipisicing elit. Aliquam, minus soluta! Facere
              alias, eos dolorem explicabo vitae nulla atque, aspernatur
              corrupti asperiores neque fuga id odit adipisci et dolores ut
              rerum placeat distinctio dicta. Dolorum distinctio iure quos iste
              beatae, cumque possimus nobis.
            </p> */}
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="instructors">
          <div className="tf__course_instructor">
            <div className="row">
              <div className="col-xl-5 col-md-6">
                <div className="tf__course_instructor_img">
                  <img
                    src={`/${courseData.instructorImg}`}
                    alt="instructor"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
              {/* <div className="col-xl-7 col-md-6">
                <div className="tf__course_instructor_text">
                  <h4>{courseData.instructor}</h4>
                  <p>+958754125215456</p>
                  <p>example@gmail.com</p>
                  <p>
                    <span>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </span>
                    ({courseData.rating} Rating)
                  </p>
                  <ul className="d-flex flex-wrap align-items-center">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="reviews">
          <div className="tf__courses_review">
            <div className="tf__blog_comment">
              <h3>reviews (03)</h3>
              <div className="tf__single_comment">
                <div className="tf__single_comment_img">
                  <img
                    src="/images/client_img_1.png"
                    alt="client"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="tf__single_comment_text">
                  <h4>
                    Rubel Merat <span>31 jan 2023 at 03.16 pm</span>
                  </h4>
                  <span className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </span>
                  <p>
                    Mind-blowing talent! Spotlight is a true game-changer for Nigerian creativity. Absolutely five stars!"
                  </p>
                </div>
              </div>
              <div className="tf__single_comment">
                <div className="tf__single_comment_img">
                  <img
                    src="/images/client_img_2.png"
                    alt="client"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="tf__single_comment_text">
                  <h4>
                    Korat Berata <span>31 jan 2025 at 03.16 pm</span>
                  </h4>
                  <span className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </span>
                  <p>
                   Beyond impressed with artist development. Spotlight builds real careers. Highly recommend!.
                  </p>
                </div>
              </div>
              <div className="tf__single_comment">
                <div className="tf__single_comment_img">
                  <img
                    src="/images/client_img_3.png"
                    alt="client"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="tf__single_comment_text">
                  <h4>
                    Norat Berata <span>31 jan 2023 at 03.16 pm</span>
                  </h4>
                  <span className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </span>
                  <p>
                    Phenomenal show! Incredible production, engaging stories. Nigeria's talent shines globally. Five stars!
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="tf__comment_reply mt_65">
              <h3>leave a review</h3>
              <p>
                <span>select your rating:</span>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </p>
              <form>
                <div className="row">
                  <div className="col-xl-6">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="col-xl-6">
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="col-xl-12">
                    <textarea rows="5" placeholder="Text..."></textarea>
                    <button type="submit">submit</button>
                  </div>
                </div>
              </form>
            </div> */}
          </div>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default CourseDetailTabContent;
