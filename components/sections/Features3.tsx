"use client";
import Link from "next/link";
import { useState } from "react";
import CountUp from "react-countup";

export default function Features3() {
  // Tab
  const [isTab, setIsTab] = useState(1);

  const handleTab = (i: any) => {
    setIsTab(i);
  };
  return (
    <>
      <section>
        <div className="container-fluid position-relative bg-neutral-100 section-padding bg-neutral-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 text-lg-end text-center">
                <div className="position-relative d-inline-block mb-lg-0 mb-8">
                  <img
                    className="rounded-4"
                    src="/assets/imgs/features-3/img-1.jpg"
                    alt="Larry"
                    data-aos="fade-zoom-in"
                    data-aos-delay={200}
                  />
                  <div className="position-absolute bottom-0 start-0 translate-middle-md-x mb-md-8 backdrop-filter rounded-3 p-md-4 p-3 text-center">
                    <h6>Rate For Us</h6>
                    <div className="d-flex align-items-center justify-content-center py-4">
                      <img
                        src="/assets/imgs/features-3/avatar-1.png"
                        alt="Larry Gaaga"
                      />
                      <img
                        className="avt-hero z-1"
                        src="/assets/imgs/features-3/avatar-2.png"
                        alt="Larry Gaaga"
                      />
                      <img
                        className="avt-hero z-0"
                        src=" assets/imgs/features-3/avatar-3.png"
                        alt="Larry Gaaga"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                      >
                        <path
                          d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z"
                          fill="#F28833"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                      >
                        <path
                          d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z"
                          fill="#F28833"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                      >
                        <path
                          d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z"
                          fill="#F28833"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                      >
                        <path
                          d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z"
                          fill="#F28833"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                      >
                        <path
                          d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z"
                          fill="#F28833"
                        />
                      </svg>
                    </div>
                    <p className="pt-2">
                      Gaaga Muzik,<br></br> Gamma Records
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ps-lg-5">
                  <h6 data-aos="fade-zoom-in" data-aos-delay={100}>
                    Our Record Label Patron
                  </h6>
                  {/* <h3 className="ds-3 mt-2 mb-5" data-aos="fade-zoom-in" data-aos-delay={200}>Larry Gaaga</h3> */}
                  <p
                    className="mb-5"
                    data-aos="fade-zoom-in"
                    data-aos-delay={300}
                  ></p>
                  <p>
                    This powerful partnership is built on a shared vision: to
                    take talented Nigerian youth off the streets and place them
                    on the stage.
                  </p>
                  <p>
                    Together, we’re giving voice to the voiceless and opening
                    doors to a future filled with music, mentorship, and
                    opportunity.
                  </p>
                  <h6 data-aos="fade-zoom-in" data-aos-delay={100}>
                    What This Partnership Means for Contestants
                  </h6>
                  <ul className="list-unstyled phase-items mb-0">
                    <li className="d-flex align-items-center mt-3">
                      <img src="/assets/imgs/cta-2/check.svg" alt="spotlight" />
                      <p className="ms-2 mb-0 text-900 fs-6">
                        Record Deal Opportunity for the winner
                      </p>
                    </li>
                    <li className="d-flex align-items-center mt-3">
                      <img src="/assets/imgs/cta-2/check.svg" alt="spotlight" />
                      <p className="ms-2 mb-0 text-900 fs-6">
                        {" "}
                        Exclusive Music Production & Collaboration with top
                        producers
                      </p>
                    </li>
                    <li className="d-flex align-items-center mt-3">
                      <img src="/assets/imgs/cta-2/check.svg" alt="spotlight" />
                      <p className="ms-2 mb-0 text-900 fs-6">
                        Mentorship and A&R Guidance from industry veterans
                      </p>
                    </li>
                    <li className="d-flex align-items-center mt-3">
                      <img src="/assets/imgs/cta-2/check.svg" alt="spotlight" />
                      <p className="ms-2 mb-0 text-900 fs-6">
                        Media Exposure across radio, TV, and digital platforms
                      </p>
                    </li>
                    <li className="d-flex align-items-center mt-3">
                      <img src="/assets/imgs/cta-2/check.svg" alt="spotlight" />
                      <p className="ms-2 mb-0 text-900 fs-6">
                        Talent Grooming in songwriting, performance, and
                        branding
                      </p>
                    </li>
                  </ul>
                  <h6 data-aos="fade-zoom-in" data-aos-delay={100}>
                    A Second Chance Through Sound
                  </h6>
                  <p>
                    {" "}
                    This isn’t just a reality show — it’s a movement. Many young
                    people with incredible musical gifts are stuck in
                    environments with no platform, no support, and no voice.{" "}
                  </p>
                  <p>
                    This partnership offers more than fame — it’s a lifeline for
                    young talents to rise, grow, and shine through music.
                  </p>
                  We’re not just discovering stars — we’re saving dreams.
                  <div className="d-flex align-items-center pb-7 border-bottom">
                    <Link
                      href="#"
                      className="btn btn-gradient"
                      data-aos="fade-zoom-in"
                      data-aos-delay={0}
                    >
                      Become a Patron/Partner
                      <svg
                        className="ms-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          className="stroke-white"
                          d="M17.25 15.25V6.75H8.75"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          className="stroke-white"
                          d="M17 7L6.75 17.25"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    {/* <Link href="#" className="ms-5 text-decoration-underline fw-bold" data-aos="fade-zoom-in" data-aos-delay={300}>How We Work</Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid position-relative section-padding">
          <div className="container">
            <div className="row">
              <div className="row align-items-center">
                <div className="col-lg-12 mt-lg-0 mt-5">
                  <nav>
                    <div
                      className="nav nav-tabs bg-neutral-100 justify-content-evenly border-bottom-0 mb-5"
                      id="nav-tab"
                      role="tablist"
                    >
                      <button
                        className={`${
                          isTab == 1 ? "nav-link active" : "nav-link"
                        } position-relative`}
                        data-bs-toggle="tab"
                        type="button"
                        onClick={() => handleTab(1)}
                        role="tab"
                      >
                        Entertainment
                        <span className="underline bg-primary" />
                      </button>
                      <button
                        className={`${
                          isTab == 2 ? "nav-link active" : "nav-link"
                        } position-relative`}
                        data-bs-toggle="tab"
                        type="button"
                        onClick={() => handleTab(2)}
                        role="tab"
                      >
                        Creative & Digital
                        <span className="underline bg-primary" />
                      </button>
                      <button
                        className={`${
                          isTab == 3 ? "nav-link active" : "nav-link"
                        } position-relative`}
                        data-bs-toggle="tab"
                        type="button"
                        onClick={() => handleTab(3)}
                        role="tab"
                      >
                        Tech & Start Ups
                        <span className="underline bg-primary" />
                      </button>
                      <button
                        className={`${
                          isTab == 4 ? "nav-link active" : "nav-link"
                        } position-relative`}
                        data-bs-toggle="tab"
                        type="button"
                        onClick={() => handleTab(4)}
                        role="tab"
                      >
                        Crafts & hands On
                        <span className="underline bg-primary" />
                      </button>
                      <button
                        className={`${
                          isTab == 5 ? "nav-link active" : "nav-link"
                        } position-relative`}
                        data-bs-toggle="tab"
                        type="button"
                        onClick={() => handleTab(5)}
                        role="tab"
                      >
                        Trade
                        <span className="underline bg-primary" />
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className={`${
                        isTab == 1
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }`}
                      role="tabpanel"
                    >
                      <p className="text-900 mb-3">
                        Spotlight’s entertainment track goes beyond performances
                        by equipping youth with practical skills in music
                        business, acting, hosting, and media production.{" "}
                      </p>
                      <div className="row">
                        <div className="col-12 col-md-6 mb-3 mb-md-0">
                          <p className="text-900">
                            {" "}
                            Contestants are trained in vocal delivery,
                            songwriting, audio engineering, DJing, talent
                            management, and on-screen presence.
                          </p>
                          <p>
                            The reality show format allows viewers to witness
                            full performance journeys, backstage rehearsals, and
                            branding mentorships from industry icons such as
                            Larry Gaaga.{" "}
                          </p>
                          <p>
                            Participants compete in live shows, short film
                            scenes, and pitch their personal brands for
                            real-world opportunities like record deals and media
                            gigs.
                          </p>{" "}
                          This category turns passion into profession and
                          bridges the gap between raw talent and market-ready
                          entertainment careers. Spotlight creates sustainable
                          paths for Nigerian creatives to thrive as
                          professionals — not just viral sensations.
                          <p>
                            <br></br> In partnership with top industry figures
                            like Larry Gaaga, we train contestants in stage
                            performance, music branding, audio engineering, and
                            content monetization. Live performances and
                            storytelling episodes bring this track to life.
                          </p>
                          <p></p>
                          <h6>Impact Strategy:</h6>
                          <ul className="list-unstyled phase-items mb-0">
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Bootcamp classes in vocal training, music
                                software, stage presence, and artist branding
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                {" "}
                                Acting and scriptwriting tasks that simulate
                                real movie production
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Live performances judged by music industry
                                veterans
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Winners earn studio time, performance bookings,
                                and in some cases, record deals (e.g., via our
                                Larry Gaaga partnership)
                              </p>
                            </li>
                            {/* <li className="d-flex align-items-center mt-3">
															<img src="/assets/imgs/cta-2/check.svg" alt="spotlight" />
															<p className="ms-2 mb-0 text-900 fs-6">Talent Management & Training</p>
														</li> */}
                          </ul>
                        </div>
                        <div className="col-12 col-md-6 position-relative text-center">
                          <img
                            className="rounded-4"
                            src="/assets/imgs/features-3/img-1.jpg"
                            alt="Larry"
                            data-aos="fade-zoom-in"
                            data-aos-delay={200}
                          />
                          <div className="position-absolute bottom-0 start-0 translate-middle-md-x mb-md-8 backdrop-filter rounded-3 p-md-4 p-3 text-center">
                            <h6>Rate For Us</h6>
                            <div className="d-flex align-items-center justify-content-center py-4">
                              <img
                                src="/assets/imgs/features-3/avatar-1.png"
                                alt="Larry Gaaga"
                              />
                              <img
                                className="avt-hero z-1"
                                src="/assets/imgs/features-3/avatar-2.png"
                                alt="Larry Gaaga"
                              />
                              <img
                                className="avt-hero z-0"
                                src=" assets/imgs/features-3/avatar-3.png"
                                alt="Larry Gaaga"
                              />
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <path
                                  d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z"
                                  fill="#F28833"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <path
                                  d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z"
                                  fill="#F28833"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <path
                                  d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z"
                                  fill="#F28833"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <path
                                  d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z"
                                  fill="#F28833"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <path
                                  d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z"
                                  fill="#F28833"
                                />
                              </svg>
                            </div>
                            <p className="pt-2">
                              Gaaga Muzik,<br></br> Gamma Records
                              <br />
                            </p>
                          </div>
                          {/* <Link href="#" className="position-md-absolute d-block translate-middle-md  w-50 start-0 ms-md-0 ms-10 mt-3 mt-md-0 p-3 rounded-3 bg-linear-1">
														<span className="rounded-circle">
															<img className="rounded-circle border border-5 border-primary-light" src=" assets/imgs/team-4/pat.jpg" alt="spotlight" />
														</span>
														<h6 className="mt-1">Patrick Egbuji <span className="text-500 fs-6"> CEO</span></h6>
													</Link> */}
                          <div className="position-md-absolute bottom-0 start-50 mt-3 mt-md-0 translate-middle-md-x">
                            {/* <img src="/assets/imgs/cta-7/name-admin.svg" alt="" /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${
                        isTab == 2
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }`}
                      role="tabpanel"
                    >
                      <div className="row">
                        <div className="col-12 col-md-6 mb-3 mb-md-0">
                          <p className="text-900">
                            {" "}
                            Spotlight trains Nigerian youth to become digital
                            creators, innovators, and freelancers in the booming
                            creative economy.{" "}
                          </p>
                          <p>
                            Through real-world brand tasks and weekly content
                            challenges, contestants develop practical portfolios
                            while gaining national visibility.
                          </p>{" "}
                          <p>
                            Through weekly challenges based on real brand briefs
                            and social content tasks, contestants build
                            portfolios and gain national visibility. The show
                            demonstrates how everyday tools like smartphones and
                            laptops can become income-generating assets
                          </p>{" "}
                          By teaching practical digital skills, Spotlight
                          empowers participants to monetize creativity, work
                          remotely, and build sustainable freelance
                          careers—uplifting themselves and their communities
                          beyond the stage.
                          <p></p>
                          <h6>Impact Strategy:</h6>
                          <ul className="list-unstyled phase-items mb-0">
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Hands-on Skill Training
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                {" "}
                                Real Client Challenges
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Digital Portfolio Building
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Mentorship from Creatives
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Freelance Readiness
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Audience Learning Exposure
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-12 col-md-6 position-relative text-center">
                          <img
                            className="rounded-4"
                            src="/assets/imgs/cta-4/minister1.png"
                            alt="Larry"
                            data-aos="fade-zoom-in"
                            data-aos-delay={200}
                          />
                          <Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
									<h6>Minister of Arts, Culture & Creative Economy </h6>
									<div className="d-flex">
										<span className="fs-6 text-600 me-auto">Hannatu Musawa</span>
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
											<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
										</svg>
									</div>
								</Link>
                          {/* <Link href="#" className="position-md-absolute d-block translate-middle-md  w-50 start-0 ms-md-0 ms-10 mt-3 mt-md-0 p-3 rounded-3 bg-linear-1">
														<span className="rounded-circle">
															<img className="rounded-circle border border-5 border-primary-light" src=" assets/imgs/team-4/pat.jpg" alt="spotlight" />
														</span>
														<h6 className="mt-1">Patrick Egbuji <span className="text-500 fs-6"> CEO</span></h6>
													</Link> */}
                          <div className="position-md-absolute bottom-0 start-50 mt-3 mt-md-0 translate-middle-md-x">
                            {/* <img src="/assets/imgs/cta-7/name-admin.svg" alt="" /> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${
                        isTab == 3
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }`}
                      role="tabpanel"
                    >
                      <p className="text-900 mb-3">
                        Spotlight’s entertainment track goes beyond performances
                        by equipping youth with practical skills in music
                        business, acting, hosting, and media production.{" "}
                      </p>
                      <div className="row">
                        <div className="col-12 col-md-6 mb-3 mb-md-0">
                          <p className="text-900">
                            {" "}
                            Spotlight empowers tech-savvy youth with
                            future-ready digital business and innovation skills.
                            Through our tech bootcamp, contestants learn coding,
                            app development, UI/UX design, product ideation, and
                            startup building.
                          </p>
                          <p>
                            Guided by tech mentors and founders, participants
                            collaborate in teams to build and pitch real digital
                            solutions to real-world problems.{" "}
                          </p>
                          <p>
                            Weekly tech tasks simulate business development
                            processes — from idea to MVP — and prepare
                            contestants to access freelance platforms or pitch
                            to investors.{" "}
                          </p>
                          This category demystifies technology and shows how
                          Nigerian youth can leverage innovation to solve
                          community problems, earn sustainably, and join the
                          global tech ecosystem. Spotlight offers visibility and
                          growth to young problem-solvers, proving that you
                          don’t need a Silicon Valley office to launch a
                          game-changing tech startup.
                          <p></p>
                          <h6>Impact Strategy:</h6>
                          <ul className="list-unstyled phase-items mb-0">
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Foundational Tech Training
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                {" "}
                                Startup Ideation & Pitching
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Tech Mentorship & Incubation
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Monetization Pathways
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Digital Literacy Campaign
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Investor & Brand Partnership Opportunities
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-12 col-md-6 position-relative text-center">
                          <img
                            className="rounded-4"
                            src="/assets/imgs/cta-4/minister-youth.jpeg"
                            alt="Minister"
                            data-aos="fade-zoom-in"
                            data-aos-delay={200}
                          />
						  <Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
									<h6>Minister of State for  Youth Development </h6>
									<div className="d-flex">
										<span className="fs-6 text-600 me-auto">Olawande Ayodele</span>
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
											<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
										</svg>
									</div>
								</Link>
                          
						  {/* <Link href="#" className="position-md-absolute d-block translate-middle-md  w-50 start-0 ms-md-0 ms-10 mt-3 mt-md-0 p-3 rounded-3 bg-linear-1">
														<span className="rounded-circle">
															<img className="rounded-circle border border-5 border-primary-light" src=" assets/imgs/team-4/pat.jpg" alt="spotlight" />
														</span>
														<h6 className="mt-1">Patrick Egbuji <span className="text-500 fs-6"> CEO</span></h6>
													</Link> */}
                          <div className="position-md-absolute bottom-0 start-50 mt-3 mt-md-0 translate-middle-md-x">
                            {/* <img src="/assets/imgs/cta-7/name-admin.svg" alt="" /> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${
                        isTab == 4
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }`}
                      role="tabpanel"
                    >
                      <p className="text-900 mb-3">
                        This category targets youth with passion for tangible,
                        high-demand skills that serve everyday markets. From
                        fashion design and tailoring to wig making, catering,
                        makeup artistry, Auto Repair, event planning, and phone
                        repairs, Spotlight provides expert practical training
                        that prepares contestants to serve real clients..{" "}
                      </p>
                      <div className="row">
                        <div className="col-12 col-md-6 mb-3 mb-md-0">
                          <p className="text-900">
                            {" "}
                            Weekly tasks simulate real business challenges —
                            such as designing an outfit for a celebrity, baking
                            for a live event, or decorating a stage set.
                          </p>
                          <p>
                            Participants gain confidence, pricing skills, and
                            brand identity as they compete in front of a
                            nationwide audience.
                          </p>
                          <p>
                            By showcasing how simple tools and raw skills can
                            become thriving businesses, this category promotes
                            dignity of labor and self-employment.
                          </p>{" "}
                          Spotlight highlights how crafts can be fashionable,
                          profitable, and scalable across Africa and beyond.{" "}
                          <p></p>
                          <h6>Impact Strategy:</h6>
                          <ul className="list-unstyled phase-items mb-0">
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Practical Workshops
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                {" "}
                                Task-Based Learning
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Product Showcases & Pop-ups
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Business Skills Integration
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Toolkits & Equipment Support
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Cultural & Economic Advocacy
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-12 col-md-6 position-relative text-center">
                          <img
                            className="rounded-4"
                            src="/assets/imgs/features-3/img-1.jpg"
                            alt="Larry"
                            data-aos="fade-zoom-in"
                            data-aos-delay={200}
                          />
                          <Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
									<h6>Minister of Arts, Culture & Creative Economy </h6>
									<div className="d-flex">
										<span className="fs-6 text-600 me-auto">Hannatu Musawa</span>
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
											<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
										</svg>
									</div>
								</Link>
                          {/* <Link href="#" className="position-md-absolute d-block translate-middle-md  w-50 start-0 ms-md-0 ms-10 mt-3 mt-md-0 p-3 rounded-3 bg-linear-1">
														<span className="rounded-circle">
															<img className="rounded-circle border border-5 border-primary-light" src=" assets/imgs/team-4/pat.jpg" alt="spotlight" />
														</span>
														<h6 className="mt-1">Patrick Egbuji <span className="text-500 fs-6"> CEO</span></h6>
													</Link> */}
                          <div className="position-md-absolute bottom-0 start-50 mt-3 mt-md-0 translate-middle-md-x">
                            {/* <img src="/assets/imgs/cta-7/name-admin.svg" alt="" /> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${
                        isTab == 5
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }`}
                      role="tabpanel"
                    >
                      <p className="text-900 mb-3">
                        Spotlight equips participants with foundational and
                        practical knowledge in finance, trading,
                        entrepreneurship, and cooperative wealth-building. {" "}
                      </p>
                      <div className="row">
                        <div className="col-12 col-md-6 mb-3 mb-md-0">
                          <p className="text-900">
                            {" "}
                            This
                        includes hands-on training in mini importation,
                        agro-enterprise, forex trading, crypto basics, real
                        estate marketing, stocks and bonds. Contestants
                        participate in live trade simulations, savings
                        challenges, and pitch competitions. 
                          </p>
                          <p>
                            Mentors teach
                        financial discipline, business strategy, budgeting, and
                        risk assessment. This category emphasizes mindset
                        transformation — shifting from dependency to
                        self-sufficiency and from hustle to structured
                        entrepreneurship. {" "}
                          </p>
                          <p>
                            By integrating real-life trade
                        challenges into the reality format, Spotlight shows how
                        business can be smart, ethical, and youth-driven. 
                          </p>{" "}
                          The
                        audience learns while watching, gaining exposure to
                        finance hacks, side hustle ideas, and wealth creation
                        strategies in a relatable, entertaining format.<p></p>
                          <h6>Impact Strategy:</h6>
                          <ul className="list-unstyled phase-items mb-0">
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Financial Education Bootcamp
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                {" "}
                                Trade Simulation & Market Days
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Agribusiness 
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Business Pitch Competitions
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                               Wealth-Building Narratives for Viewers
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-12 col-md-6 position-relative text-center">
                          <img
                            className="rounded-4"
                            src="/assets/imgs/features-3/img-1.jpg"
                            alt="Larry"
                            data-aos="fade-zoom-in"
                            data-aos-delay={200}
                          />
                          <div className="position-absolute bottom-0 start-0 translate-middle-md-x mb-md-8 backdrop-filter rounded-3 p-md-4 p-3 text-center">
                            <h6>Rate For Us</h6>
                            <div className="d-flex align-items-center justify-content-center py-4">
                              <img
                                src="/assets/imgs/features-3/avatar-1.png"
                                alt="Larry Gaaga"
                              />
                              <img
                                className="avt-hero z-1"
                                src="/assets/imgs/features-3/avatar-2.png"
                                alt="Larry Gaaga"
                              />
                              <img
                                className="avt-hero z-0"
                                src=" assets/imgs/features-3/avatar-3.png"
                                alt="Larry Gaaga"
                              />
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <path
                                  d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z"
                                  fill="#F28833"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <path
                                  d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z"
                                  fill="#F28833"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <path
                                  d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z"
                                  fill="#F28833"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <path
                                  d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z"
                                  fill="#F28833"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <path
                                  d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z"
                                  fill="#F28833"
                                />
                              </svg>
                            </div>
                            <p className="pt-2">
                              Gaaga Muzik,<br></br> Gamma Records
                              <br />
                            </p>
                          </div>
                          {/* <Link href="#" className="position-md-absolute d-block translate-middle-md  w-50 start-0 ms-md-0 ms-10 mt-3 mt-md-0 p-3 rounded-3 bg-linear-1">
														<span className="rounded-circle">
															<img className="rounded-circle border border-5 border-primary-light" src=" assets/imgs/team-4/pat.jpg" alt="spotlight" />
														</span>
														<h6 className="mt-1">Patrick Egbuji <span className="text-500 fs-6"> CEO</span></h6>
													</Link> */}
                          <div className="position-md-absolute bottom-0 start-50 mt-3 mt-md-0 translate-middle-md-x">
                            {/* <img src="/assets/imgs/cta-7/name-admin.svg" alt="" /> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${
                        isTab == 6
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }`}
                      role="tabpanel"
                    >
                      <p className="text-900 mb-3">
                        Spotlight equips participants with foundational and
                        practical knowledge in finance, trading,
                        entrepreneurship, and cooperative wealth-building.{" "}
                      </p>
                      <div className="row">
                        <div className="col-12 col-md-6 mb-3 mb-md-0">
                          <p className="text-900">
                            {" "}
                            This includes hands-on training in mini importation,
                            agro-enterprise, forex trading, crypto basics, real
                            estate marketing, and Ajo (thrift) systems.
                          </p>
                          <p>
                            Contestants participate in live trade simulations,
                            savings challenges, and pitch competitions. Mentors
                            teach financial discipline, business strategy,
                            budgeting, and risk assessment.{" "}
                          </p>
                          <p>
                            This category emphasizes mindset transformation —
                            shifting from dependency to self-sufficiency and
                            from hustle to structured entrepreneurship.
                          </p>{" "}
                          By integrating real-life trade challenges into the
                          reality format, Spotlight shows how business can be
                          smart, ethical, and youth-driven. The audience learns
                          while watching, gaining exposure to finance hacks,
                          side hustle ideas, and wealth creation strategies in a
                          relatable, entertaining format.<p></p>
                          <h6>Impact Strategy:</h6>
                          <ul className="list-unstyled phase-items mb-0">
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Reality Tv shows
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                {" "}
                                Talent Hunt
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Movie & Music Production
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Music Record Label
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Talent Management & Training
                              </p>
                            </li>
                          </ul>
                          <p>
                            In partnership with top industry figures like Larry
                            Gaaga, we train contestants in stage performance,
                            music branding, audio engineering, and content
                            monetization. Live performances and storytelling
                            episodes bring this track to life.
                          </p>
                        </div>
                        <div className="col-12 col-md-6 position-relative text-center">
                          <img
                            className="rounded-4"
                            src="/assets/imgs/features-3/img-1.jpg"
                            alt="Larry"
                            data-aos="fade-zoom-in"
                            data-aos-delay={200}
                          />
                          <div className="position-absolute bottom-0 start-0 translate-middle-md-x mb-md-8 backdrop-filter rounded-3 p-md-4 p-3 text-center">
                            <h6>Rate For Us</h6>
                            <div className="d-flex align-items-center justify-content-center py-4">
                              <img
                                src="/assets/imgs/features-3/avatar-1.png"
                                alt="Larry Gaaga"
                              />
                              <img
                                className="avt-hero z-1"
                                src="/assets/imgs/features-3/avatar-2.png"
                                alt="Larry Gaaga"
                              />
                              <img
                                className="avt-hero z-0"
                                src=" assets/imgs/features-3/avatar-3.png"
                                alt="Larry Gaaga"
                              />
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <path
                                  d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z"
                                  fill="#F28833"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <path
                                  d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z"
                                  fill="#F28833"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <path
                                  d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z"
                                  fill="#F28833"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <path
                                  d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z"
                                  fill="#F28833"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <path
                                  d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z"
                                  fill="#F28833"
                                />
                              </svg>
                            </div>
                            <p className="pt-2">
                              Gaaga Muzik,<br></br> Gamma Records
                              <br />
                            </p>
                          </div>
                          {/* <Link href="#" className="position-md-absolute d-block translate-middle-md  w-50 start-0 ms-md-0 ms-10 mt-3 mt-md-0 p-3 rounded-3 bg-linear-1">
														<span className="rounded-circle">
															<img className="rounded-circle border border-5 border-primary-light" src=" assets/imgs/team-4/pat.jpg" alt="spotlight" />
														</span>
														<h6 className="mt-1">Patrick Egbuji <span className="text-500 fs-6"> CEO</span></h6>
													</Link> */}
                          <div className="position-md-absolute bottom-0 start-50 mt-3 mt-md-0 translate-middle-md-x">
                            {/* <img src="/assets/imgs/cta-7/name-admin.svg" alt="" /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="position-absolute top-0 end-0 z-1 flickering p-10 m-10 d-none d-lg-block">
              <img src="/assets/imgs/cta-7/star-1.svg" alt="spotlight" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
