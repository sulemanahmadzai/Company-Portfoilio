import React, { Fragment } from "react";
import Header2 from "../../components/Header2/Header2";
import Link from "next/link";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/software-company-components/Footer/Footer";

const ErrorPage = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <Fragment>
      <Header2 />
      <main className="page_content about-page">
        <PageTitle pageTitle={"404"} pagesub={"Error 🙂"} pageTop={"404"} />
        <div className="error-page">
          <div className="container not-found-content">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="contant-wrapper text-center">
                  <div className="error-page__text">
                    <h2>404</h2>
                  </div>
                  <div className="error-page__content mb-50">
                    <h2>Hi Sorry We Can't Find That Page!</h2>
                    <p>
                      Oops! The page you are looking for does not exist. It
                      might have been moved or deleted.
                    </p>

                    <div className="error-page-button">
                      <Link onClick={ClickHandler} href="/" className="btn">
                        <span className="btn_label" data-text="Go Back Home">
                          Go Back Home
                        </span>
                        <span className="btn_icon">
                          <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default ErrorPage;
