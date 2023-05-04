import { CardActionArea, Typography } from "@mui/material";
import { Fragment } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AboutPage = () => {
  return (
    <Fragment>
      <Typography variant="h2"> About Us </Typography>
      <Typography>
        Welcome to our website! Our platform is dedicated to providing small
        businesses with the resources they need to succeed. We offer a
        user-friendly interface that allows business owners to create and share
        professional-looking cards that showcase their brand and connect with
        potential customers.
        <br />
        <br />
      </Typography>
      <Typography variant="h5">Our Mission</Typography>
      <Typography>
        Our mission is to empower small business owners by providing them with
        the tools and resources they need to establish a strong online presence.
        We believe that every business, no matter how small, deserves the
        opportunity to succeed. Our platform is designed to help entrepreneurs
        build their brand, grow their customer base, and achieve their goals.
        <br />
        <br />
      </Typography>
      <Typography variant="h5">How It Works</Typography>
      <Typography>
        Our platform is easy to use and requires no technical expertise. Simply
        sign up for an account, choose a template that fits your brand, and
        customize your card with your business name, logo, and contact
        information. Once you're happy with your design, you can publish your
        card and start sharing it with potential customers.
        <br />
      </Typography>
      <Typography variant="h5">Our Team</Typography>
      <Typography>
        {" "}
        We are a team of experienced professionals who are passionate about
        supporting small businesses. Our team includes designers, developers,
        and marketers who are committed to providing our users with the best
        possible experience on our platform. We are always available to answer
        your questions and provide support whenever you need it.
        <br />
        <br />
      </Typography>
      <Typography variant="h5"> Contact Us </Typography>
      <Typography>
        If you have any questions or feedback, we would love to hear from you.
        Please feel free to contact us at estybkatz@gmail.com .<br></br> We
        value your input and are always looking for ways to improve our platform
        and better serve our users.
      </Typography>

      <Typography variant="h5"> User types and options </Typography>
      <Typography>
        Available options for users This site has 3 types of users, a regular
        user, a business user and an admin user.
        <br />
        All registered users can favorite cards, and view only the cards they
        favorited. A favorited card has the heart shaped favorite button colored
        red, while an unfavorited card has it colored blue. <br /> A user can
        view their favorite cards using favCards page.
        <br />
        <br />
        A business user can add new cards using the <AddCircleIcon /> button,
        and view the cards he added in the My Cards page.
        <br /> <br />
        After creating a card, a business user can delete the cards he made.
        <br />
        An Admin user is a business user, which can also delete cards that any
        user made.
        <br />
        When registering you may choose to be a business user or a regular user,
        you cannot become an admin user while registering. To become an admin
        contact us by mail.
        <br />
      </Typography>

      <img src="/assets/images/card.PNG" alt="card" />
    </Fragment>
  );
};

export default AboutPage;
