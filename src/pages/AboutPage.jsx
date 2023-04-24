import { Typography, cardActionAreaClasses } from "@mui/material";
import { Fragment } from "react";

const AboutPage = () => {
  return (
    <Fragment>
      <h1> About Us </h1>
      <Typography>
        Welcome to our website! Our platform is dedicated to providing small
        businesses with the resources they need to succeed. We offer a
        user-friendly interface that allows business owners to create and share
        professional-looking cards that showcase their brand and connect with
        potential customers.
        <br></br>
        <br />
        ## Our Mission- Our mission is to empower small business owners by
        providing them with the tools and resources they need to establish a
        strong online presence. We believe that every business, no matter how
        small, deserves the opportunity to succeed. Our platform is designed to
        help entrepreneurs build their brand, grow their customer base, and
        achieve their goals. <br />
        <br />
        ## How It Works Our platform is easy to use and requires no technical
        expertise. Simply sign up for an account, choose a template that fits
        your brand, and customize your card with your business name, logo, and
        contact information. Once you're happy with your design, you can publish
        your card and start sharing it with potential customers.
        <br></br>## Our Team We are a team of experienced professionals who are
        passionate about supporting small businesses. Our team includes
        designers, developers, and marketers who are committed to providing our
        users with the best possible experience on our platform. We are always
        available to answer your questions and provide support whenever you need
        it. <br />
        <br /> ## Contact Us If you have any questions or feedback, we would
        love to hear from you. Please feel free to contact us at [insert email
        address] or connect with us on social media. We value your input and are
        always looking for ways to improve our platform and better serve our
        users. ---
      </Typography>
      <img src="../card.PNG" alt="card" />
    </Fragment>
  );
};

export default AboutPage;
