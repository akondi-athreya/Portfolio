import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import emailjs from "@emailjs/browser";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
  }

  sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k654hxh",
        "template_sygp00r",
        this.form.current,
        "e82jlyt3ynRpBj7We"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
          {/* <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <h1 className="blog-heading-text" style={{ color: theme.text }}>
                  {blogSection["title"]}
                </h1>
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {blogSection["subtitle"]}
                </p>
                <div className="blogsite-btn-div">
                  <Button
                    text="Visit My Blogsite"
                    newTab={true}
                    href={blogSection.link}
                    theme={theme}
                  />
                </div>
              </div>
              <div className="blog-heading-img-div">
                
                <BlogsImg theme={theme} />
              </div>
            </div>
          </Fade> */}
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                <AddressImg theme={theme} />
              </div>
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {addressSection["subtitle"]}
                </p>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {phoneSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {phoneSection["subtitle"]}
                </p>
                <div className="address-btn-div">
                  <Button
                    text="Visit on Google Maps"
                    newTab={true}
                    href={addressSection.location_map_link}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-form-div">
            <h1 className="contact-form-title" style={{ color: theme.text }}>
              Message Me
            </h1>
            <form
              className="contact-form"
              ref={this.form}
              onSubmit={this.sendEmail}
            >
              <div className="form-group">
                <label htmlFor="name" style={{ color: theme.text }}>
                  Name
                </label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email" style={{ color: theme.text }}>
                  Email
                </label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message" style={{ color: theme.text }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <div className="submit-btn">
                  <button type="submit" theme={theme}>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Fade>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
