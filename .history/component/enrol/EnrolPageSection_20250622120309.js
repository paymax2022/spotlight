import React from "react";
import Enrol from "../form/Enrol";

const EnrolPageSection = () => {
  return (
    <section className="tf__contact_page mt_190 xs_mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-7 col-lg-6 wow fadeInLeft">
            <div className="tf__contact_form">
              <div className="tf__heading_area tf__heading_area_left mb_25">
          
                <h2>Get Our Contact Now.</h2>
              </div>
              <p>
                For Promotions, Sponsorship, Partnership or any concerns, Please reach out to us
              </p>
              <Enrol />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-5 col-lg-6 wow fadeInRight">
            <div className="tf__contact_text">
              <div className="tf__contact_single">
                <div className="icon blue">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>Call</h3>
                  <a href="callto:+880254615566">+234 815 949 1618</a>
                  <a href="callto:+826542556455">+234 806 343 7144</a>
                </div>
              </div>
              <div className="tf__contact_single">
                <div className="icon orange">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>mail</h3>
                  <a href="mailto:info@timeless-entertainment.com<">info@timeless-entertainment.com</a>
                
                </div>
              </div>
              <div className="tf__contact_single">
                <div className="icon green">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>address</h3>
                  <p>Simeon Akinlonu Crescent, VI, Oniru, Lagos</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-xl-12 wow fadeInUp">
            <div className="tf__contact_map mt_100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29199.78758207035!2d90.43684581929195!3d23.819543211524437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fce7d991f%3A0xacfaf1ac8e944c05!2sBasundhara%20Residential%20Area%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1667021568123!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default EnrolPageSection;
