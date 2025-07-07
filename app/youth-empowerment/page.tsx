"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function PageServicesDetails1() {
  // Accordion
  const [activeItem, setActiveItem] = useState(1);

  const handleActiveItem = (index: any) => {
    setActiveItem(index);
  };
  const [isNav, setIsNav] = useState(1);

  const handleNav = (i: any) => {
    setIsNav(i);
  };

  return (
    <>
      <Layout>
        <section className="section-page-header py-10 fix position-relative">
          <div className="container position-relative z-1">
            <div className="text-start">
              <h3>Talent Discovery & Inclusion</h3>
              <div className="d-flex">
                <Link href="#">
                  <p className="mb-0 text-900">Home</p>
                </Link>
                <svg
                  className="mx-3 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width={8}
                  height={13}
                  viewBox="0 0 8 13"
                  fill="none"
                >
                  <path
                    className="stroke-dark"
                    d="M1 1.5L6.5 6.75L1 12"
                    stroke="#111827"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-primary mb-0">
                  Youth Empowerment Services Details
                </p>
              </div>
            </div>
          </div>
          <img
            className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
            src="/assets/imgs/page-header/bg-line.png"
            alt="spotlight"
          />
          <div className="bouncing-blobs-container">
            <div className="bouncing-blobs-glass" />
            <div className="bouncing-blobs">
              <div className="position-absolute top-0 start-0 translate-middle-y bouncing-blob--green" />
              <div className="position-absolute top-0 end-0 bouncing-blob--primary" />
            </div>
          </div>
        </section>
        {/* Other sections */}
        <section className="section-services-details pt-80">
          <div className="container">
            <img
              className="rounded-3"
              src="/assets/imgs/cta-4/Image_fx22.jpg"
              alt="spotlight"
            />
            <div className="row">
              <div className="col-lg-4 col-md-3" />
            </div>
            <div className="row pt-8">
              <div className="col-lg-4 sidebar">
                <div
                  className="nav w-100 flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className={`${
                      isNav == 1 ? "active" : ""
                    } nav-link pe-5 justify-content-between d-flex`}
                    onClick={() => handleNav(1)}
                    id="v-pills-strategy-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-strategy"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-strategy"
                    aria-selected="false"
                  >
                    Talent Discovery & Inclusion
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="fill-white"
                        d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <button
                    className={`${
                      isNav == 2 ? "active" : ""
                    } nav-link pe-5 justify-content-between d-flex`}
                    onClick={() => handleNav(2)}
                    id="v-pills-financial-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-financial"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-financial"
                    aria-selected="true"
                  >
                    Bootcamps & Practical Training
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="fill-white"
                        d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <button
                    className={`${
                      isNav == 3 ? "active" : ""
                    } nav-link pe-5 justify-content-between d-flex`}
                    onClick={() => handleNav(3)}
                    id="v-pills-business-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-business"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-business"
                    aria-selected="false"
                  >
                    Reality TV show
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="fill-white"
                        d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <button
                    className={`${
                      isNav == 4 ? "active" : ""
                    } nav-link pe-5 justify-content-between d-flex`}
                    onClick={() => handleNav(4)}
                    id="v-pills-solicitory-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-solicitory"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-solicitory"
                    aria-selected="false"
                  >
                    Incubation & Industry Linkage
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="fill-white"
                        d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <button
                    className={`${
                      isNav == 5 ? "active" : ""
                    } nav-link pe-5 justify-content-between d-flex`}
                    onClick={() => handleNav(5)}
                    id="v-pills-hr-consultancy-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-hr-consultancy"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-hr-consultancy"
                    aria-selected="false"
                  >
                    National Advocacy
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="fill-white"
                        d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                        fill="white"
                      />
                    </svg>
                  </button>

                  <button
                    className={`${
                      isNav == 6 ? "active" : ""
                    } nav-link pe-5 justify-content-between d-flex`}
                    onClick={() => handleNav(6)}
                    id="v-pills-start-up-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-start-up"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-start-up"
                    aria-selected="false"
                  >
                    Entertainment (Media) Production
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="fill-white"
                        d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>

                <div className="bg-neutral-100 px-5 pb-5 mt-5 rounded-4 border">
                  <h6 className="mb-4 mt-3"> Download Brochure</h6>
                  <Link
                    href="#"
                    className="bg-white rounded-3 p-3 border d-flex align-items-center mb-3"
                  >
                    <img
                      src="/assets/imgs/services-details/icon-1.svg"
                      alt="spotlight"
                    />
                    <p className="text-900 fs-7 mb-0 ms-3">
                      PDF. Download (25 Mb)
                    </p>
                  </Link>
                  <Link
                    href="#"
                    className="bg-white rounded-3 p-3 border d-flex align-items-center mb-3"
                  >
                    <img
                      src="/assets/imgs/services-details/icon-1.svg"
                      alt="spotlight"
                    />
                    <p className="text-900 fs-7 mb-0 ms-3">Browser Document</p>
                  </Link>
                  <Link
                    href="#"
                    className="bg-white rounded-3 p-3 border d-flex align-items-center mb-3"
                  >
                    <img
                      src="/assets/imgs/services-details/icon-3.svg"
                      alt="spotlight"
                    />
                    <p className="text-900 fs-7 mb-0 ms-3">
                      Open on Google Drive
                    </p>
                  </Link>
                  {/* <Link
                    href="#"
                    className="bg-white rounded-3 p-3 border d-flex align-items-center"
                  >
                    <img
                      src="/assets/imgs/services-details/icon-4.svg"
                      alt="spotlight"
                    />
                    <p className="text-900 fs-7 mb-0 ms-3">
                      Open on Google Driver
                    </p>
                  </Link> */}
                </div>
              </div>
              <div className="col-lg-8 ps-lg-4 mt-lg-0 mt-8 content">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className={`${
                      isNav == 1 ? "show active" : ""
                    } tab-pane fade`}
                    id="v-pills-financial"
                    role="tabpanel"
                    aria-labelledby="v-pills-financial-tab"
                    tabIndex={0}
                  >
                    <div className="row align-items-center rounded-3 bg-white p-2">
                      <h4 className="mb-3">
                        Empowerment as a National Imperative
                      </h4>
                      <p className="mb-0">
                        In a nation where over 70% of the population is under
                        30, youth empowerment is not just a program — it is a
                        national survival strategy. At Spotlight, we recognize
                        that Nigeria’s future depends on its young people —
                        their creativity, their resilience, their ability to
                        innovate, and their access to opportunity.
                        Unfortunately, millions of Nigerian youths face systemic
                        barriers:
                      </p>
                      <p></p>
                      <p>
                        What makes Spotlight truly unique is our ability to
                        educate while entertaining, inspire while training, and
                        transform lives in front of millions, making the
                        empowerment journey transparent, relatable, and
                        scalable. We do not simply empower contestants — we
                        empower a nation watching them grow. From digital
                        creators and fashion designers to software developers,
                        entertainers, and young entrepreneurs, Spotlight is
                        shaping Nigeria’s next generation of professionals and
                        change agents — one bootcamp, one challenge, one episode
                        at a time.
                      </p>

                      <h5 className="pt-4 border-top mb-3 mt-5">
                        Digital Transformation
                      </h5>
                      <p className="mb-4">
                        Spotlight was born out of the urgent need to bridge this
                        gap by using a tool that unites, entertains, and
                        inspires Nigerians every day — media. By transforming a
                        reality TV format into a national empowerment engine,
                        Spotlight harnesses the power of entertainment to train,
                        elevate, and launch young Nigerians into purpose-driven
                        careers across multiple sectors. But this is more than
                        just a television show. Spotlight is a movement — a
                        multifaceted, structured, and inclusive platform that:
                      </p>
                      <div className="row">
                        <div className="col-lg-7">
                          <div className="d-flex">
                            <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                              <div className="icon">
                                <img
                                  src="/assets/imgs/services-details/icon-5.svg"
                                  alt="spotlight"
                                />
                              </div>
                            </div>
                            <div className="ps-5">
                              <h6>Identifies Talents</h6>
                              <p>From all corners of the country.</p>
                            </div>
                          </div>
                          <div className="d-flex pt-3">
                            <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                              <div className="icon">
                                <img
                                  src="/assets/imgs/services-details/icon-6.svg"
                                  alt="spotlight"
                                />
                              </div>
                            </div>
                            <div className="ps-5">
                              <h6>Equips Talents</h6>
                              <p>With marketable, income-generating skills</p>
                            </div>
                          </div>
                          <div className="d-flex pt-3">
                            <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                              <div className="icon">
                                <img
                                  src="/assets/imgs/services-details/icon-7.svg"
                                  alt="spotlight"
                                />
                              </div>
                            </div>
                            <div className="ps-5">
                              <h6>Expose Talent</h6>
                              <p>Via our Reality TV show televised content</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5 mt-lg-0 mt-5">
                          <img
                            className="rounded-3"
                            src="/assets/imgs/cta-4/singer.png"
                            alt="spotlight"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      isNav == 2 ? "show active" : ""
                    } tab-pane fade`}
                    id="v-pills-business"
                    role="tabpanel"
                    aria-labelledby="v-pills-business-tab"
                    tabIndex={0}
                  >
                    <div className="row align-items-center rounded-3 bg-white p-5">
                      <h4 className="mb-3">Bootcamps & Practical Training</h4>
                      <p className="mb-0">
                        At Spotlight Reality TV, our bootcamp program is where
                        the true transformation begins. Once talents are
                        selected through nationwide auditions, they are enrolled
                        into a 30-day residential training program that serves
                        as a high-pressure, high-reward creative incubator.
                      </p>
                      <p></p>
                      <p>
                        This bootcamp is designed to simulate real-life
                        challenges in the entertainment industry, equipping
                        participants with technical expertise, emotional
                        intelligence, and performance discipline. Every day is
                        carefully structured with masterclasses, drills, tasks,
                        and rehearsals across various entertainment fields:
                      </p>

                      <p className="mb-4">
                        Participants also receive fitness and wellness coaching,
                        etiquette and public speaking sessions, and industry
                        readiness workshops. They are coached by leading
                        musicians, actors, directors, comedians, digital
                        influencers, and content strategists.
                      </p>
                      <div className="row">
                        <div className="col-lg-7">
                          <div className="d-flex">
                            <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                              <div className="icon">
                                <img
                                  src="/assets/imgs/services-details/icon-5.svg"
                                  alt="spotlight"
                                />
                              </div>
                            </div>
                            <div className="ps-5">
                              <h6>Music</h6>
                              <p>
                                {" "}
                                Vocal training, breath control, songwriting,
                                recording, and live band rehearsals..
                              </p>
                            </div>
                          </div>
                          <div className="d-flex pt-3">
                            <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                              <div className="icon">
                                <img
                                  src="/assets/imgs/services-details/icon-6.svg"
                                  alt="spotlight"
                                />
                              </div>
                            </div>
                            <div className="ps-5">
                              <h6>Acting</h6>
                              <p>
                                Script reading, character building,
                                improvisation, and screen test simulations.
                              </p>
                            </div>
                          </div>
                          <div className="d-flex pt-3">
                            <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                              <div className="icon">
                                <img
                                  src="/assets/imgs/services-details/icon-7.svg"
                                  alt="spotlight"
                                />
                              </div>
                            </div>
                            <div className="ps-5">
                              <h6>General Skills Development</h6>
                              <p>
                                This includes hands-on crafts, auto mechanic,
                                fashion, painting, etc
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5 mt-lg-0 mt-5">
                          <img
                            className="rounded-3"
                            src="/assets/imgs/cta-4/faze.png"
                            alt="spotlight"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      isNav == 3 ? "show active" : ""
                    } tab-pane fade`}
                    id="v-pills-solicitory"
                    role="tabpanel"
                    aria-labelledby="v-pills-solicitory-tab"
                    tabIndex={0}
                  >
                    <div className="row align-items-center rounded-3 bg-white p-5">
                      <h4 className="mb-3">The HeartBeat of the Show</h4>
                      <p className="mb-0">
                        The Spotlight Reality TV Show is the heartbeat of our
                        talent discovery and empowerment initiative. Broadcast
                        daily on DSTV from 9:00 PM to 9:30 PM, and streamed 24/7
                        on all major social platforms, this show captures the
                        intensity, transformation, and human stories behind the
                        rise of Nigeria’s next big stars in music, acting,
                        comedy, and digital content creation.
                      </p>
                      <p></p>
                      <p>
                        This is not just a talent show — it’s a national
                        experience that takes viewers into the raw, unfiltered
                        journey of ambition, growth, rivalry, emotion, and
                        breakthrough. Over 30 consecutive days, audiences
                        follow:
                      </p>

                      <h5 className="pt-4 border-top mb-3 mt-5">
                        Digital Transformation
                      </h5>
                      <p className="mb-4">
                        SThe show is professionally shot with high-quality
                        cameras, multi-angle editing, studio-grade lighting, and
                        premium sound, delivering cinematic television
                        entertainment.
                      </p>
                      <p>
                        Through compelling storytelling, interactive digital
                        engagement, and cross-platform content, the Spotlight
                        Reality Show becomes a cultural touchpoint — uniting
                        Nigerians across demographics, sparking national
                        conversations, and showcasing the creative potential of
                        our youth.
                      </p>
                      <div className="row">
                        <div className="col-lg-7">
                          <ul className="list-unstyled phase-items mb-0">
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Daily challenges and performances
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                {" "}
                                Emotional diary room sessions
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Mentorship moments with celebrities
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Talent growth arcs and transformations
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Public voting segments
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Surprise evictions and showdowns
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-5 mt-lg-0 mt-5">
                          <img
                            className="rounded-3"
                            src="/assets/imgs/cta-4/family.png"
                            alt="spotlight"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      isNav == 4 ? "show active" : ""
                    } tab-pane fade`}
                    id="v-pills-hr-consultancy"
                    role="tabpanel"
                    aria-labelledby="v-pills-hr-consultancy-tab"
                    tabIndex={0}
                  >
                    <div className="row align-items-center rounded-3 bg-white p-5">
                      <h4 className="mb-3">Incubation & Industry Immersion</h4>
                      <p className="mb-0">
                        Beyond the cameras and weekly episodes, Spotlight offers
                        selected participants the opportunity to grow within a
                        real-world entertainment ecosystem through our
                        incubation and industry immersion program. Top finalists
                        and standout performers are enrolled in a post-show
                        pipeline that includes:
                      </p>
                      <p></p>
                      <p>
                        Through this incubation process, we bridge the gap
                        between talent and opportunity—ensuring that our winners
                        and participants don’t fade away after the show but grow
                        into independent creators, signed artists, recognized
                        actors, content influencers, and brand ambassadors. This
                        full-circle approach is what makes Spotlight more than a
                        show—it’s a creative career accelerator.
                      </p>

                      <div className="row">
                        <div className="col-lg-7">
                          <ul className="list-unstyled phase-items mb-0">
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Talent representation and career development
                                planning
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                {" "}
                                Studio time and collaboration with major
                                producers
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Professional headshots, media kits, and social
                                media optimization
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Mentorship pairings with active celebrities and
                                industry executives
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Access to exclusive events, music/video shoots,
                                and performance bookings
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Internship and apprenticeship programs with
                                production houses, record labels, and streaming
                                platforms
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-5 mt-lg-0 mt-5">
                          <img
                            className="rounded-3"
                            src="/assets/imgs/cta-4/incubation.jpg"
                            alt="spotlight"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      isNav == 5 ? "show active" : ""
                    } tab-pane fade`}
                    id="v-pills-strategy"
                    role="tabpanel"
                    aria-labelledby="v-pills-strategy-tab"
                    tabIndex={0}
                  >
                    <div className="row align-items-center rounded-3 bg-white p-5">
                      <h4 className="mb-3">National Advocacy</h4>
                      <p className="mb-0">
                        Spotlight Reality TV is committed to being a voice for
                        national progress through creative empowerment. We
                        believe that talent exists in every corner of Nigeria,
                        and we are on a mission to amplify the voices, dreams,
                        and ambitions of young Nigerians through advocacy and
                        inclusion.
                      </p>
                      <p>
                        Through documentaries, live forums, advocacy tours, and
                        grassroots partnerships, Spotlight becomes a platform of
                        influence—turning entertainment into a tool for
                        nation-building.
                      </p>
                      <p>
                        What makes Spotlight truly unique is our ability to
                        educate while entertaining, inspire while training, and
                        transform lives in front of millions, making the
                        empowerment journey transparent, relatable, and
                        scalable. We do not simply empower contestants — we
                        empower a nation watching them grow. From digital
                        creators and fashion designers to software developers,
                        entertainers, and young entrepreneurs, Spotlight is
                        shaping Nigeria’s next generation of professionals and
                        change agents — one bootcamp, one challenge, one episode
                        at a time.
                      </p>

                     Our advocacy pillars include:
                      <div className="row">
                        <div className="col-lg-7">
                          <ul className="list-unstyled phase-items mb-0">
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Equal Access to Opportunity: auditions across
                                all geopolitical zones.
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                {" "}
                                Women & Youth Empowerment: Special attention is
                                given to ensure gender inclusion and safe spaces
                                for female creatives.
                              </p>
                            </li>

                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Digital Literacy & Innovation: We encourage tech
                                adoption, empowering youths with digital tools
                                and training.
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Cultural Preservation & Expression: We celebrate
                                diversity by incorporating traditional elements
                                into challenges, performances, and storylines.
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-5 mt-lg-0 mt-5">
                          <img
                            className="rounded-3"
                            src="/assets/imgs/cta-4/advocacy.jpg"
                            alt="spotlight"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      isNav == 6 ? "show active" : ""
                    } tab-pane fade`}
                    id="v-pills-start-up"
                    role="tabpanel"
                    aria-labelledby="v-pills-start-up-tab"
                    tabIndex={0}
                  >
                    <div className="row align-items-center rounded-3 bg-white p-5">
                      <div className="col-lg-5 mb-lg-0 mb-5">
                        <img
                          className="rounded-3"
                          src="/assets/imgs/cta-4/performance.jpg"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-7">
                        <div className="p-lg-3">
                          <h4 className="fw-regular">
                            Entertainment {" "}
                            <span className="fw-bold">Production</span>
                          </h4>
                          <p>
                            Spotlight Reality TV is not only a talent hunt
                            show—it is a fully equipped media production
                            powerhouse. With a dedicated team of producers,
                            directors, cinematographers, editors, and digital
                            strategists, we produce and distribute high-quality
                            entertainment content that resonates locally and
                            globally.
                          </p>
                          
                          <div className="d-flex pt-2">
                           <ul className="list-unstyled phase-items mb-0">
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Daily 30-minute Reality TV episodes on DSTV
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                {" "}
                               24/7 social media livestreams across Facebook, Instagram, YouTube, and TikTok
                              </p>
                            </li>

                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Behind-the-scenes documentaries showing talent journeys and mentorship moments
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Mini-series and original skits developed using Spotlight actors and comedians
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Professionally produced music videos and soundtracks by Spotlight musicians
                              </p>
                            </li>
                            <li className="d-flex align-items-center mt-3">
                              <img
                                src="/assets/imgs/cta-2/check.svg"
                                alt="spotlight"
                              />
                              <p className="ms-2 mb-0 text-900 fs-6">
                                Branded content and influencer collaborations with top Nigerian brands
                              </p>
                            </li>
                          </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
