import React, { Fragment } from "react";
import Header2 from "../../components/Header2/Header2";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/software-company-components/Footer/Footer";
import ContactSection from "../../components/software-company-components/ContactSection";

const ContactPage = (props) => {
  return (
    <Fragment>
      <Header2 />
      <main className="page_content about-page">
        <PageTitle
          pageTitle={"Contact Us"}
          pagesub={"Us 😍"}
          pageTop={"Contact"}
        />
        <ContactSection />
      </main>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default ContactPage;
