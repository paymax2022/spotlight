import Link from "next/link";
import React from "react";

const FooterSection = () => {
  return (
    <footer className="tf__footer mt_100">
      <div className="tf__footer_overlay pt_75">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-sm-10 col-md-7 col-lg-6">
              <div className="tf__footer_logo_area">
                <Link className="footer_logo" href="/">
                  <img
                    src="/images/timeless_logo.png"
                    alt="Spotlight"
                    className="img-fluid w-100"
                  />
                </Link>
                <p>
          Igniting Creativity, Empowering Youth, Driving Economic Growth. Our Primary focus for music will be on musicians that have readily available original songs but needs a platform to connect..
                </p>
                <ul className="d-flex flex-wrap">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa -youtube-play"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-sm-10 col-md-5 col-lg-5">
              <div className="tf__footer_content xs_mt_50">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <Link href="/contests">Contests</Link>
                  </li>
                  <li>
                    <Link href="/contestants">Contestants</Link>
                  </li>
                  <li>
                    <Link href="/about">Vote</Link>
                  </li>
                  <li>
                    <Link href="/contact">Business Contact</Link>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-sm-10 col-md-7 col-lg-col-lg-6">
              <div className="tf__footer_content xs_mt_30">
                <h3>Our Contacts</h3>
                <p>Address: 1 Adebisi Oyeleye, Idado, lekki. Lagos</p>
                <p>
                  {/* <span> Phone: +234 815 949 1618</span> */}
                   <span> Phone:  +234 813 366 2329</span>
                 
                  <span>Mobile: +234 806 343 7144</span>
                </p>
                <p>
                  <span>Email: info@timeless-entertainment.com </span>
                  {/* <span>Website: yourwebsite.com</span> */}
                </p>
              </div>
            </div>
            {/* <div className="col-xl-3 col-sm-10 col-md-5 col-lg-4 col-lg-5">
              <div className="tf__footer_content xs_mt_45">
                <h3>News Letter</h3>
                <p>
                  Our approach to itis unique around know work an we know Get
                  hands on the you like
                </p>
                <form>
                  <input type="text" placeholder="Your Email" />
                  <button>send</button>
                </form>
              </div>
            </div> */}
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tf__copyright">
                <p>Copyright ©Timeless Entertainment all rights reserved.</p>
                <ul className="d-flex flex-wrap">
                  <li>
                    <Link href="/privacy-policy">Privacy policy</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
