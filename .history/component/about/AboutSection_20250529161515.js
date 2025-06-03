import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <section className="tf__about mt_250 xs_mt_195">
      <div className="container">
        <div className="tf__about_top wow fadeInUp">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="tf__about_top_img">
                <img
                  src="images/AWARDS.PNG"
                  alt="about"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="tf__about_top_text">
                <div className="tf__about_top_text_center">
                  <h4>Study Off Flexibly</h4>
                  <p>
                  Spotlight is a groundbreaking national talent hunt show poised to discover, cultivate, and showcase the 
                  immense artistic and entrepreneurial potential within Nigeria's vibrant creative industries. 
                  Encompassing Creative Industries & Innovation, Arts, Fashion, and Business investment opportunities. 
                  "The Spotlight" offers a unique platform to empower young Nigerians, celebrate our rich culture, and drive economic growth.
                  </p>
                </div>
                <a href="#" className="common_btn">
                  read more
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-md-9 col-lg-6 wow fadeInLeft">
            <div className="tf__about_text">
              <div className="tf__heading_area tf__heading_area_left mb_25">
             
                <h2>Our Unique Value Preposition</h2>
              </div>
              <p>
                A Powerful Blend of Talent and Enterprise
"The Spotlight" offers a unique value proposition that sets it apart
{" "}
              </p>
              <ul>
                  <li>National Reach: A nationwide talent hunt, ensuring representation from diverse cultural backgrounds and regions across Nigeria .</li>
                <li>Focus on Sustainability: Emphasizes the creation of viable creative businesses that contribute to long-term economic growth.</li>
                <li>Multi-Platform Engagement: A compelling television series amplified by a robust digital presence, creating a broad and engaged audience</li>
                <li>Holistic Approach: Integrates artistic development with rigorous business training, ensuring participants are not only talented but also equipped to succeed as entrepreneurs.
                 <li>Strong Industry Linkages: Strategic partnerships with leading figures and organizations within the creative and business sectors.</li>
                <li>Positive Social Impact: Empowers youth, celebrates culture, and contributes to economic development</li>
                <li>We give management school best.</li>
                <ul>
                  <li>Connecting Musicians to record Label</li>
                  <li>Actors are connected to Movie Producers </li>
                  <li>Skilled Entrepreneurs receive further training and connected to Funding opportunity/Investors</li>
                </ul></li>
              
              
              </ul>
              <Link href="/about" className="common_btn">
                about more
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-sm-9 col-md-8 col-lg-6 wow fadeInRight">
            <div className="tf__about_img">
              <img
                src="images/about_img.png"
                alt="about"
                className="img-fluid w-100"
              />
              <div className="text">
                <i className="far fa-check-circle"></i>
                <h3>183k+</h3>
                <p>Complete Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
