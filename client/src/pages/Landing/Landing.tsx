// Libraries
import React from "react";
import { Link } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// Services
import useWindowDimensions from "../../services/UseWindowDimensions";
// Styles and Assets
import styles from "./landing.module.css";
import "../../main.css";
import check from "./landing/check-mark.png";
// Components
import LandingNav from "../../components/Navs/LandingNav";
import Input from "../../components/Forms/Input";
import LocationBars from "../../components/LocationBars/LocationBars";
import LandingProjects from "../../components/Landing Projects/LandingProjects";
import InfiniteBanner from "../../components/InfiniteBanner/InfiniteBanner";

interface Benefits {
  title: string;
  content: string;
}

const schema = z.object({
  email: z
    .string({ invalid_type_error: "Email Field is Required" })
    .email({ message: "Please enter a valid email address" }),
});

type FormData = z.infer<typeof schema>;

const Landing = () => {
  const { width } = useWindowDimensions();

  const benefits: Benefits[] = [
    {
      title: "Fast",
      content: `House flips can start and finish in a matter of months, offering quick returns and liquidity.`,
    },
    {
      title: "Stable",
      content: `Because of its high demand, real estate is stable and is protected from inflation and recessions`,
    },
    {
      title: "High Returns",
      content: `Real estate's rarity helps boost your investments to maximize your investment portfolio.`,
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <LandingNav />
      <div className={styles.background}>
        <div
          className="section"
          style={{
            backdropFilter: `blur(20px)`,
          }}
        >
          <div
            className={`header section columns`}
            style={{
              color: `var(--light)`,
            }}
          >
            <div
              style={{
                width: `clamp(300px, 100%, 900px)`,
                marginTop: `clamp(50px, 5vw, 400px)`,
              }}
            >
              <p style={{ marginBottom: "50px" }}>
                <span className="lg-txt">
                  Affordable real estate investing for everyone
                </span>
                <br />
                <br />
                <span className="md-txt">
                  Fund house flipping projects and get a share of the profits.
                  Start investing for as little as $100.
                </span>
              </p>
            </div>
            <div className="btn-container">
              <Link
                to="/user/sign-up"
                className="btn link-btn"
                style={{ background: `var(--secondary)` }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="center columns" style={{ textAlign: "center" }}>
        <p className={styles.hero}>
          <span className="hero">Your Gateway into Real Estate</span>
          <br />
          <br />
          <span className="sm-txt">
            Welcome to Flipside. Dive into the real estate industry and start
            maximizing your investment returns, all for a fraction of the cost.
          </span>
        </p>
      </div>
      <div className="center  btn-container" style={{ marginBottom: "30px" }}>
        <Link className="btn link-btn" to="/user/sign-up">
          Create an Account
        </Link>
      </div>
      <div
        className={`section center ${styles.cardContainer} ${
          width > 690 ? "rows" : "columns"
        }`}
        style={{ alignItems: "stretch", background: `var(--third)` }}
      >
        <div className={styles.person}>
          <div style={{ padding: "20px" }}>
            <p className="md-txt bold">Investor</p>
            <p className="sm-txt">
              Fuel transformative residential renovation projects and unlock the
              full potential of real estate investing.
            </p>
            <p className="sm-txt">Start investing for as little as $100.</p>
          </div>
        </div>
        <div className={styles.person}>
          <div style={{ padding: "20px" }}>
            <p className="md-txt bold">Homeowner</p>
            <p className="sm-txt">
              Quickly secure funding for your renovations and experience a rapid
              and efficient transformation of your property.
            </p>
            <p className="sm-txt">
              Unlock your property's full potential today.
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "90px" }}>
        <LocationBars />
      </div>
      <div
        className={`section  card-container ${
          width > 1015 ? "rows" : "columns"
        }`}
      >
        <div>
          <p>
            <span className="hero">Build Your Future</span>
            <br />
            <br />
            <span className="sm-txt">
              Embrace financial growth with confidence as we guide you through
              shaping a secure and prosperous tomorrow in the world of real
              estate.
            </span>
          </p>
          <div className={styles.benefitContainer}>
            {benefits.map((e, index) => (
              <div
                key={index}
                className="rows "
                style={{
                  alignItems: "center",
                  marginBottom: "20px",
                  gap: "10px",
                }}
              >
                <img
                  src={check}
                  alt="check mark"
                  style={{ width: "20px", height: "20px" }}
                />
                <div className="rows" style={{ gap: "5px" }}>
                  <span
                    className="xs-txt semi-bold"
                    style={{ color: `var(--primary)` }}
                  >
                    {e.title}:{" "}
                    <span className="xs-txt" style={{ color: `var(--dark)` }}>
                      {e.content}
                    </span>
                  </span>
                </div>
              </div>
            ))}
            <div className="btn-container">
              <Link className="btn link-btn" to="/projects">
                Available Projects
              </Link>
            </div>
          </div>
        </div>
        <LandingProjects />
      </div>
      <div className="section center ">
        <div className={[`center columns`, styles.subscribe].join(" ")}>
          <p style={{ textAlign: "center", marginBottom: "50px" }}>
            <span className="hero">Subscribe to our News Letter</span>
            <br />
            <br />
            <span className="sm-txt">
              {" "}
              Sign-up to our newsletter to be updated with all things Flipside.
            </span>
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${width > 690 ? "rows" : "columns"}`}
            style={{ gap: "20px" }}
          >
            <Input
              id="email"
              label="Email"
              placeholder="Email"
              required={true}
              register={{ ...register("email") }}
              type="email"
              errors={errors.email}
            />
            <button
              type="submit"
              className="btn link-btn"
              style={{ height: "45px" }}
            >
              Subscribe
            </button>
            {errors.email && <p>{errors.email.message}</p>}
          </form>
        </div>
      </div>
      <div className="center columns section" style={{ textAlign: "center" }}>
        <p className={styles.hero}>
          <span className="hero">Rebuild America</span>
          <br />
          <br />
          <span className="sm-txt">Invest in project across the nation.</span>
        </p>{" "}
        <div className="btn-container">
          <Link className="btn link-btn" to="/portfolio">
            View Our Portfolio
          </Link>
        </div>
      </div>
      <div className=" center">
        <InfiniteBanner />
      </div>
    </>
  );
};

export default Landing;
