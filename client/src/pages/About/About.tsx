import React from "react";
import NavBar from "../../components/Navs/NavBar";
import "../../main.css";
import { FaLinkedin } from "react-icons/fa6";

interface Team {
  name: string;
  linkedIn: string;
  role: string;
}

const About = () => {
  const about: { text: string }[] = [
    {
      text: `We're on a mission to turn the dream of owning a home into a
tangible reality for everyone. We firmly believe that with the right
approach, real estate investing can be the key to unlocking doors to
homeownership that once seemed out of reach.`,
    },
    {
      text: `How do we do it? By redefining the way people invest in real estate.
      Through our innovative platform, we empower individuals like you to
      participate in residential real estate flips through crowdfunding,
      without the need for exorbitant capital.`,
    },
    {
      text: `We're here to break down barriers, shatter limitations, and pave the
      way for a future where homeownership is within reach for all. With
      Flipside, you're not just investing in properties - you're investing
      in a brighter future, one flip at a time.`,
    },
    {
      text: `But Flipside is more than just a platform - it's a beacon of hope, a
      community of dreamers and doers united by a shared vision. Whether
      you're a seasoned investor looking for new opportunities or a
      hopeful homeowner eager to take that first step, Flipside is your
      partner in pursuit of your dreams.`,
    },
    {
      text: `Transparency, integrity, and excellence are the cornerstones of our
      philosophy. We're committed to providing you with the guidance,
      resources, and support you need to navigate the world of real estate
      investing with confidence and clarity.`,
    },
    {
      text: `So, are you ready to make your homeownership dreams a reality? Join
      us at Flipside and let's embark on this incredible journey together.
      Together, we'll flip the script on real estate investing and rewrite
      the future for generations to come.`,
    },
  ];

  const team: Team[] = [
    {
      name: "Alex Coroian",
      linkedIn: "https://www.linkedin.com/in/alexcoroian/",
      role: "Co-Founder",
    },
    {
      name: "Ritesh Persaud",
      linkedIn: "https://www.linkedin.com/in/ritesh-persaud-6688562aa/",
      role: "Co-Founder",
    },
  ];

  return (
    <>
      <NavBar />
      <div className={["section"].join(" ")}>
        <div>
          <p className="bold hero" style={{ textAlign: "left" }}>
            About flipside
          </p>
          {about.map((part, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
              <span className="xs-txt">{part.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <p className="hero bold center">Our Team</p>
        <div
          className="center"
          style={{
            gap: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          {team.map((member, index) => (
            <div key={index} className="gridItems">
              <div
                className="center"
                style={{
                  borderRadius: "100%",
                  width: "210px",
                  height: "210px",
                  background: "transparent",
                  border: `1px solid var(--grey)`,
                }}
              >
                {" "}
                <div
                  style={{
                    borderRadius: "100%",
                    width: "185px",
                    height: "185px",
                    background: `var(--third)`,
                  }}
                />
              </div>
              <div
                className="rows center"
                style={{ gap: "10px", alignItems: "center" }}
              >
                <FaLinkedin color={`var(--primary)`} />{" "}
                <p style={{ textAlign: "center" }}>
                  <a
                    className="semi-bold"
                    style={{ textDecoration: "none", color: `var(--dark)` }}
                    target="blank"
                    href={member.linkedIn}
                  >
                    {member.name}
                  </a>
                </p>
              </div>
              <span className="center xs-txt">{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
