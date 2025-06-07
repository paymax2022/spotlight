"use client";
import React from "react";
import TvStations from "../slider/TvStations";

const TeamSection = ({ style }) => {
  return (
    <section className={style}>
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-6 col-xxl-5 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_15">
            
              <h2>Our Media Partners</h2>
            </div>
          </div>
        </div>
        <TvStations />
      </div>
    </section>
  );
};

export default TeamSection;
