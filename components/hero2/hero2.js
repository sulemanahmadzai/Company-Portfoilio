import React from "react";
import Link from "next/link";
import circle1 from "/public/images/hero/circle_engine_1.webp";
import circle2 from "/public/images/hero/circle_engine_2.webp";
import circle3 from "/public/images/hero/circle_engine_3.webp";
import circle4 from "/public/images/hero/circle_engine_4.webp";
import shape1 from "/public/images/hero/shape_image_1.webp";
import shape2 from "/public/images/hero/shape_image_2.webp";
import shape3 from "/public/images/hero/shape_image_3.webp";
import shape4 from "/public/images/hero/shape_image_4.webp";
import Image from "next/image";

const Hero2 = (props) => {
  return (
    <section className="software_company_hero_section xb-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="content_wrap">
              <div
                className="heading_focus_text has_underline text-white d-inline-flex"
                style={{
                  backgroundImage: `url(${"/images/shapes/shape_title_under_line.svg"})`,
                }}
              >
                Empowering the Future with AI and Technology
              </div>
              <h1 className="text-white">
                Smart web, mobile, and AI solutions{" "}
                <mark>for modern businesses.</mark>
              </h1>
              <p>
                We build intelligent software that helps businesses innovate,
                automate, and scale.
              </p>
              <ul className="step_list text-white unordered_list_block">
                <li>Full-stack web and mobile app development</li>
                <li>RAG-powered AI systems & intelligent chatbots</li>
                <li>Computer vision solutions</li>
              </ul>
              <ul className="btns_group unordered_list p-0 justify-content-start">
                <li>
                  <Link className="btn" href="/contact">
                    <span className="btn_label" data-text="Contact Us Today!">
                      Contact Us Today!
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <a className="hotline_block" href="tel:+923271831854">
                    <span className="hotline_icon">
                      <i className="fa-solid fa-phone-volume"></i>
                    </span>
                    <span className="hotline_content">
                      <small>CONTACT US DAILY</small>
                      <strong className="text-white">(+92) 327 183 1854</strong>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="engine_image">
              <div className="image_wrap_1">
                <Image src={circle1} alt="Engine" />
              </div>
              <div className="image_wrap_2">
                <Image src={circle2} alt="Engine" />
              </div>
              <div className="image_wrap_3">
                <Image src={circle3} alt="Engine" />
              </div>
              <div className="image_wrap_4">
                <Image src={circle4} alt="Engine" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape_image_1">
        <Image src={shape1} alt="Engine" />
      </div>
      <div className="shape_image_2">
        <Image src={shape2} alt="Engine" />
      </div>
      <div className="shape_image_3">
        <Image src={shape3} alt="Engine" />
      </div>
      <div className="shape_image_4">
        <Image src={shape4} alt="Engine" />
      </div>
    </section>
  );
};

export default Hero2;
