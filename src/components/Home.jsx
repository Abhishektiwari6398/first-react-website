import React from "react";
import vg from "../assets/1.webp";
import {
  AiFillAmazonCircle,
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Web Developer</h1>
          <p>Make a atractive website & design</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            we are your one and solution to the website problems you face every
            day. We are leading tech company whose aim is to website design
            ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            As a web developer, your portfolio is often one of the most
            important parts of your resume. This collection of projects shows
            potential employers what you’re capable of creating. Include the
            types of projects that represent the work you’d like to do. If
            you’re including code, be sure to annotate it to show your thought
            process.You don’t necessarily need formal training to work as a web
            developer. It’s possible to acquire the skills you need on your own.
            For example, you can take a course to learn programming languages
            like HTML, JavaScript, or CSS, and then put what you learn into
            practice on your own website.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Goggle</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
