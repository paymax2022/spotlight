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
              <h3>YTalent Discovery & Inclusion</h3>
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
              src="/assets/imgs/services-details/img-1.png"
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
                            src="/assets/imgs/services-details/img-2.png"
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
                            src="/assets/imgs/services-details/img-2.png"
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
                      <h4 className="mb-3">Empowerment as a National Imperative</h4>
                <p className="mb-0">
                  In a nation where over 70% of the population is under 30,
                  youth empowerment is not just a program — it is a national
                  survival strategy. At Spotlight, we recognize that Nigeria’s
                  future depends on its young people — their creativity, their
                  resilience, their ability to innovate, and their access to
                  opportunity. Unfortunately, millions of Nigerian youths face
                  systemic barriers:
                </p>
                <p></p>
                <p>
                  What makes Spotlight truly unique is our ability to educate
                  while entertaining, inspire while training, and transform
                  lives in front of millions, making the empowerment journey
                  transparent, relatable, and scalable. We do not simply empower
                  contestants — we empower a nation watching them grow. From
                  digital creators and fashion designers to software developers,
                  entertainers, and young entrepreneurs, Spotlight is shaping
                  Nigeria’s next generation of professionals and change agents —
                  one bootcamp, one challenge, one episode at a time.
                </p>

                <h5 className="pt-4 border-top mb-3 mt-5">
                  Digital Transformation
                </h5>
                <p className="mb-4">
                  Spotlight was born out of the urgent need to bridge this gap
                  by using a tool that unites, entertains, and inspires
                  Nigerians every day — media. By transforming a reality TV
                  format into a national empowerment engine, Spotlight harnesses
                  the power of entertainment to train, elevate, and launch young
                  Nigerians into purpose-driven careers across multiple sectors.
                  But this is more than just a television show. Spotlight is a
                  movement — a multifaceted, structured, and inclusive platform
                  that:
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
                      src="/assets/imgs/services-details/img-2.png"
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
                      <h4 className="mb-3">Empowerment as a National Imperative</h4>
                <p className="mb-0">
                  In a nation where over 70% of the population is under 30,
                  youth empowerment is not just a program — it is a national
                  survival strategy. At Spotlight, we recognize that Nigeria’s
                  future depends on its young people — their creativity, their
                  resilience, their ability to innovate, and their access to
                  opportunity. Unfortunately, millions of Nigerian youths face
                  systemic barriers:
                </p>
                <p></p>
                <p>
                  What makes Spotlight truly unique is our ability to educate
                  while entertaining, inspire while training, and transform
                  lives in front of millions, making the empowerment journey
                  transparent, relatable, and scalable. We do not simply empower
                  contestants — we empower a nation watching them grow. From
                  digital creators and fashion designers to software developers,
                  entertainers, and young entrepreneurs, Spotlight is shaping
                  Nigeria’s next generation of professionals and change agents —
                  one bootcamp, one challenge, one episode at a time.
                </p>

                <h5 className="pt-4 border-top mb-3 mt-5">
                  Digital Transformation
                </h5>
                <p className="mb-4">
                  Spotlight was born out of the urgent need to bridge this gap
                  by using a tool that unites, entertains, and inspires
                  Nigerians every day — media. By transforming a reality TV
                  format into a national empowerment engine, Spotlight harnesses
                  the power of entertainment to train, elevate, and launch young
                  Nigerians into purpose-driven careers across multiple sectors.
                  But this is more than just a television show. Spotlight is a
                  movement — a multifaceted, structured, and inclusive platform
                  that:
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
                      src="/assets/imgs/services-details/img-2.png"
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
                      <h4 className="mb-3">Empowerment as a National Imperative</h4>
                <p className="mb-0">
                  In a nation where over 70% of the population is under 30,
                  youth empowerment is not just a program — it is a national
                  survival strategy. At Spotlight, we recognize that Nigeria’s
                  future depends on its young people — their creativity, their
                  resilience, their ability to innovate, and their access to
                  opportunity. Unfortunately, millions of Nigerian youths face
                  systemic barriers:
                </p>
                <p></p>
                <p>
                  What makes Spotlight truly unique is our ability to educate
                  while entertaining, inspire while training, and transform
                  lives in front of millions, making the empowerment journey
                  transparent, relatable, and scalable. We do not simply empower
                  contestants — we empower a nation watching them grow. From
                  digital creators and fashion designers to software developers,
                  entertainers, and young entrepreneurs, Spotlight is shaping
                  Nigeria’s next generation of professionals and change agents —
                  one bootcamp, one challenge, one episode at a time.
                </p>

                <h5 className="pt-4 border-top mb-3 mt-5">
                  Digital Transformation
                </h5>
                <p className="mb-4">
                  Spotlight was born out of the urgent need to bridge this gap
                  by using a tool that unites, entertains, and inspires
                  Nigerians every day — media. By transforming a reality TV
                  format into a national empowerment engine, Spotlight harnesses
                  the power of entertainment to train, elevate, and launch young
                  Nigerians into purpose-driven careers across multiple sectors.
                  But this is more than just a television show. Spotlight is a
                  movement — a multifaceted, structured, and inclusive platform
                  that:
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
                      src="/assets/imgs/services-details/img-2.png"
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
                          src="/assets/imgs/service-4/img-6.png"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-7">
                        <div className="p-lg-3">
                          <h4 className="fw-regular">
                            Empower <span className="fw-bold">Businesses</span>
                          </h4>
                          <p>
                            Spotlight collaborates with creative startups in
                            music, media, and tech to drive innovation. We
                            provide visibility, partnership, and promotional
                            opportunities that support emerging businesses
                            aligned with talent development and youth
                            engagement.
                          </p>
                          <div className="d-flex pt-5">
                            <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                              <div className="icon">
                                <img
                                  src="/assets/imgs/service-4/icon-1.svg"
                                  alt="spotlight"
                                />
                              </div>
                            </div>
                            <div className="ps-5">
                              <h6>Creative Incubation</h6>
                              <p>
                                We partner with media and music-tech startups to
                                launch youth-led innovations.
                              </p>
                            </div>
                          </div>
                          <div className="d-flex">
                            <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                              <div className="icon">
                                <img
                                  src="/assets/imgs/service-4/icon-2.svg"
                                  alt="spotlight"
                                />
                              </div>
                            </div>
                            <div className="ps-5">
                              <h6>Business Mentorship</h6>
                              <p>
                                Spotlight connects creatives with business
                                coaches, helping turn artistic passion into
                                profitable ventures.
                              </p>
                            </div>
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
