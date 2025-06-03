"use client";
import React from "react";

const EventDetailSection = ({ eventDesc }) => {
  return (
    <section className="tf__event_details mt_195 xs_mt_100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tf__event_details_img wow fadeInUp">
              <img
                src={`/${eventDesc.imgSrc}`}
                alt="event details"
                className="img-fluid w-100"
              />
            </div>
            <div className="tf__event_details_text mt_35 wow fadeInUp">
              <span className="categories">{eventDesc.category}</span>
              <ul className="location d-flex flex-wrap">
                <li>
                  <i className="far fa-map-marker-alt"></i> {eventDesc.location}
                </li>
                <li>
                  <i className="far fa-clock"></i> {eventDesc.time}
                </li>
              </ul>
              <h2>{eventDesc.longTitle}</h2>
              <p>{eventDesc.longDesc}</p>
              <h3>About Me</h3>
              <p>
                 My voice is a testament to resilience, honed in local church choirs and community events. My soulful melodies carry the weight of untold stories, seeking a stage where they can truly soar.
Raised in a bustling Lagos compound, I often sang to escape the noise and the harsh realities of limited opportunities. Access to quality recording equipment and professional coaching was always a distant dream, forcing me to learn and practice in secrecy, often late into the night. I faced skepticism from those who saw music as a distraction, not a viable path.
 </p><p>
  My aim is to become a global voice for Nigerian music, inspiring millions with my unique blend of traditional sounds and contemporary appeal.
It is my intention to use "Spotlight" as the launchpad for a sustainable music career, securing the resources and mentorship to produce world-class music and represent Nigeria on international stages.

</p>{" "}
             
              <div className="row">
                <div className="col-xl-6 col-lg-6 wow fadeInUp">
                  <div className="tf__event_det_center_img">
                    <img
                      src="/images/event_det_center_img.jpg"
                      alt="contestant"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 wow fadeInUp">
                  <div className="tf__event_det_center_text">
                    <h3>
                      My Key Qualities.
                    </h3>
                    <p>
                      Business tailored it design, management & support services
                      business agency elit, sed do eiusmod tempor.{" "}
                    </p>
                    <ul>
                      <li>Soul-Stirring Vocals: A voice that truly resonates.</li>
                      <li>Raw Emotional Depth: Sings with genuine feeling.</li>
                      <li>Resilience & Determination: Never gives up on her dream.</li>
                      <li>Cultural Authenticity: Infuses Nigerian essence.</li>
                      <li>Inspiring Stage Presence: Commands attention effortlessly.</li>
                    </ul>
                    <p>
                      Business tailored it design, management & support services
                      business agency elit, sed do eiusmod tempor.{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* <p>
                Wras congue, sapien sed mollis accumsan, justo orci pulvinar
                nisl, ut fermentum ante velit in ante. Vivamus blandit urna
                urna, quis tincidunt turpis sagittis ut. In interdum sem quis
                congue accumsan. Pellentesque convallis scelerisque eros far
                away, behind the word mountains far from the countries vokalia
                and Consonantia, there live the blind texts. Separated they live
                in Book m.{" "}
              </p>
              <p>
                Wras congue, sapien sed mollis accumsan, justo orci pulvinar
                nisl, ut fermentum ante velit in ante. Vivamus blandit urna
                urna, quis tincidunt turpis sagittis ut. In interdum sem quis
                congue accumsan. Pellentesque convallis scelerisque.{" "}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailSection;
