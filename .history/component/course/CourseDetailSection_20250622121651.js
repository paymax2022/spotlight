"use client";
import { courseDataArray } from "@/data/Data";
import Link from "next/link";
import React from "react";
import CourseDetailTabContent from "./CourseDetailTabContent";

const CourseDetailSection = ({ courseData }) => {
  return (
    <section className="tf__courses_details mt_195 xs_mt_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="tf__courses_details_area">
              <div className="tf__courses_details_img">
                <img
                  src={`/${courseData.imgSrc}`}
                  alt="contests"
                  className="img-fluid w-100"
                />
              </div>
              <div className="tf__courses_details_header d-flex flex-wrap align-items-center">
                <div className="img">
                  <img
                    src={`/${courseData.instructorImg}`}
                    alt="instructor"
                    className="img-fluid w-100"
                  />
                </div>
                <ul className="text d-flex flex-wrap align-items-center">
                  <li>
                    <h4>Lead Judge</h4>
                    <p>{courseData.instructor}</p>
                  </li>
                  <li>
                    <h4>category</h4>
                    <p>{courseData.category}</p>
                  </li>
                  <li>
                    <h4>review</h4>
                    <p>{courseData.review} reviews</p>
                  </li>
                  <li>
                    <h4>Cash Price</h4>
                    <p>{courseData.price}</p>
                  </li>
                  <li>
                    <a className="common_btn" href="enrol/ContactPageSection.js">
                      enrol
                    </a>
                  </li>
                </ul>
              </div>

              <div className="tf__courses_det_text">
                <h2>{courseData.title}</h2>

                <CourseDetailTabContent courseData={courseData} />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="tf__sidebar" id="sticky_sidebar">
              <div className="tf__sidebar_search">
                <form>
                  <input type="text" placeholder="Search..." />
                  <button type="submit">
                    <i className="far fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="tf__sidebar_blog sidebar_item">
                <h3>popular Contests</h3>
                <ul>
                  {courseDataArray.slice(0, 3).map((item) => (
                    <li key={item.id}>
                      <div className="img">
                        <img
                          src={`/${item.imgSrc}`}
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="text">
                        <p>
                          <i className="fa fa-calendar-alt"></i> {item.date}
                        </p>
                        <Link href={`/contests/${item.slug}`}>{item.title}</Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tf__sidebar_category sidebar_item">
                <h3>Contests Suggestions</h3>
                <ul>
                  <li>
                    <a href="#">
                      {" "}
                      Miss Lagos <span>(08)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Campus Queen <span>(14)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Artisan Workshop <span>(20)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Smart Energy<span>(29)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                    Dating<span>(32)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Innovation <span>(22)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailSection;
