import React from "react";
import Link from "next/link";
import Project from "../../../api/project";
import about1 from "/public/images/about/about_image_6.webp";
import aIcon1 from "/public/images/avatar/avatar_1.webp";
import aIcon2 from "/public/images/avatar/avatar_2.webp";
import aIcon3 from "/public/images/avatar/avatar_3.webp";
import aIcon4 from "/public/images/icons/icon_global.svg";
import aIcon5 from "/public/images/shapes/shape_line.webp";
import shape1 from "/public/images/shapes/shape_space_2.svg";
import Image from "next/image";

const About = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section
      className="about_and_case_section section_space section_decoration bg-dark"
      style={{
        backgroundImage: `url(${"/images/backgrounds/bg_image_2.webp"})`,
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-7 order-lg-last">
            <div className="about_image_2">
              <div className="image_wrap">
                <Image src={about1} alt="Techco - About" />
              </div>
              <div
                className="about_funfact_info"
                style={{
                  backgroundImage: `url(${"/images/shapes/shape_bg_1.webp"})`,
                }}
              >
                <div className="customer_count">
                  <ul className="unordered_list">
                    <li>
                      <Image src={aIcon1} alt="Customer Avatar" />
                    </li>
                    <li>
                      <Image src={aIcon2} alt="Customer Avatar" />
                    </li>
                    <li>
                      <Image src={aIcon3} alt="Customer Avatar" />
                    </li>
                    <li>
                      <span>6k+</span>
                    </li>
                  </ul>
                  <p className="mb-0">Happy Customer</p>
                </div>
                <div className="about_funfact_counter">
                  <div className="funfact_item">
                    <div className="counter_value">
                      <span className="odometer" data-count="6">
                        0
                      </span>
                      <span>K+</span>
                    </div>
                    <h3 className="funfact_title mb-0">Projects Done</h3>
                  </div>
                  <div className="funfact_item">
                    <div className="counter_value">
                      <span className="odometer" data-count="100">
                        0
                      </span>
                      <span>%</span>
                    </div>
                    <h3 className="funfact_title mb-0">Results Guaranteed</h3>
                  </div>
                </div>
                <a className="btn btn-primary" href="about.html">
                  <span className="btn_label" data-text="Learn More">
                    Learn More
                  </span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                </a>
                <div className="icon_globe">
                  <Image src={aIcon4} alt="Icon Globe" />
                </div>
              </div>
              <div className="space_line">
                <Image src={aIcon5} alt="Shape Line" />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about_content">
              <div className="heading_block mb-0 text-white">
                <div
                  className="heading_focus_text has_underline d-inline-flex"
                  style={{
                    backgroundImage: `url(${"/images/shapes/shape_title_under_line.svg"})`,
                  }}
                >
                  About Us
                </div>
                <h2 className="heading_text">
                  Your Company Name — <mark>Mission & Vision</mark>
                </h2>
                <p className="heading_description mb-0">
                  At Your Company Name, our mission is to build smart, scalable,
                  and secure digital solutions powered by artificial
                  intelligence. We help organizations modernize their
                  operations, create intelligent systems, and embrace
                  data-driven transformation. Our goal is to combine creativity,
                  code, and AI to deliver real business impact — from custom web
                  and mobile apps to advanced AI automation and conversational
                  experiences.
                </p>
                <div className="mt-4">
                  <p className="text-white mb-2">
                    <strong>Core Values:</strong>
                  </p>
                  <ul className="step_list text-white unordered_list_block">
                    <li>Innovation through AI and emerging tech</li>
                    <li>Commitment to quality and long-term client success</li>
                    <li>
                      Transparency, collaboration, and continuous learning
                    </li>
                  </ul>
                  <p className="text-white mt-3 fst-italic">
                    "Building tomorrow's intelligence — today."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-170">
          <div className="heading_block text-center text-white">
            <div
              className="heading_focus_text has_underline d-inline-flex"
              style={{
                backgroundImage: `url(${"/images/shapes/shape_title_under_line.svg"})`,
              }}
            >
              Our Projects
            </div>
            <h2 className="heading_text mb-0">
              Our Latest <mark>Projects</mark>
            </h2>
          </div>

          <div className="case_studies_wrapper">
            {Project.slice(6, 10).map((project, prj) => (
              <div className="case_study_block" key={prj}>
                <div className="case_study_image">
                  <Image
                    src={project.pImg}
                    alt={`${project.title} - Project`}
                  />
                </div>
                <div className="case_study_content">
                  <ul className="category_list unordered_list text-uppercase">
                    <li>
                      <span className="badge bg-primary">{project.sub}</span>
                    </li>
                  </ul>
                  <h3 className="case_title">
                    {project.website ? (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "inherit" }}
                      >
                        {project.title}
                      </a>
                    ) : (
                      <span>{project.title}</span>
                    )}
                  </h3>
                  <p>{project.description}</p>
                  {project.impact && (
                    <p className="mb-3">
                      <strong className="text-success">Impact:</strong>{" "}
                      {project.impact}
                    </p>
                  )}
                  <ul className="icon_list unordered_list">
                    <li>
                      <span className="icon_list_text">
                        <strong className="text-dark">Industry:</strong>{" "}
                        {project.Industry}
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_text">
                        <strong className="text-dark">Country:</strong>{" "}
                        {project.Country}
                      </span>
                    </li>
                  </ul>
                  {project.techStack && (
                    <div className="mb-3">
                      <strong className="text-dark">Tech Stack:</strong>
                      <p className="mb-0 mt-1 text-muted small">
                        {project.techStack}
                      </p>
                    </div>
                  )}
                  {project.Technologies1 && project.Technologies2 && (
                    <ul
                      className="case_technologies unordered_list"
                      data-text="Core Technologies:"
                    >
                      <li>
                        <Image src={project.Technologies1} alt="Technology 1" />
                      </li>
                      <li>
                        <Image src={project.Technologies2} alt="Technology 2" />
                      </li>
                    </ul>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <span className="btn_label" data-text="View Project">
                        View Project
                      </span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <Image src={shape1} alt="Techco Shape" />
      </div>
    </section>
  );
};

export default About;
