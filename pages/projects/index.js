import React, { Fragment } from "react";
import Header2 from "../../components/Header2/Header2";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/software-company-components/Footer/Footer";
import Project from "../../api/project";
import Link from "next/link";
import Image from "next/image";

const ProjectsPage = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  // Get only the new projects (IDs 7, 8, 9, 24)
  const featuredProjects = Project.filter((p) =>
    ["7", "8", "9", "24"].includes(p.Id)
  );

  return (
    <Fragment>
      <Header2 />
      <main className="page_content">
        <PageTitle
          pageTitle={"Our Projects"}
          pagesub={"Projects"}
          pageTop={"Showcasing Our"}
        />

        <section className="portfolio_section section_space bg-light">
          <div className="container">
            <div className="heading_block text-center">
              <div className="heading_focus_text has_underline d-inline-flex mb-3">
                Our Work
              </div>
              <h2 className="heading_text mb-0">
                Featured <mark>Projects</mark>
              </h2>
              <p className="heading_description mb-0">
                Explore our portfolio of successful projects delivering
                innovative solutions across multiple industries.
              </p>
            </div>

            <div className="case_studies_wrapper pt-5">
              {featuredProjects.map((project, idx) => (
                <div className="case_study_block mb-4" key={idx}>
                  <div className="case_study_image">
                    <Image
                      src={project.pImg}
                      alt={`${project.title} - Project`}
                      style={{ objectFit: "cover" }}
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
                      <div className="alert alert-success mb-3" role="alert">
                        <strong>Impact:</strong> {project.impact}
                      </div>
                    )}

                    <ul className="icon_list unordered_list mb-3">
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
                      <div className="mb-3 p-3 bg-light rounded">
                        <strong className="text-dark d-block mb-2">
                          Tech Stack:
                        </strong>
                        <p className="mb-0 text-muted">{project.techStack}</p>
                      </div>
                    )}

                    {project.Technologies1 && project.Technologies2 && (
                      <ul
                        className="case_technologies unordered_list mb-3"
                        data-text="Core Technologies:"
                      >
                        <li>
                          <Image
                            src={project.Technologies1}
                            alt="Technology 1"
                          />
                        </li>
                        <li>
                          <Image
                            src={project.Technologies2}
                            alt="Technology 2"
                          />
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
                        <span
                          className="btn_label"
                          data-text="View Live Project"
                        >
                          View Live Project
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
        </section>
      </main>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default ProjectsPage;
