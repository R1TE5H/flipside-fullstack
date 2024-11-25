// Libraries
import React from "react";
import { Link } from "react-router-dom";
// Services
import useWindowDimensions from "../../services/UseWindowDimensions";
// Styles
import styles from "./footer.module.css";
import "../../main.css";
// Models
import Links from "../../models/Links";

const Footer = () => {
  const { width } = useWindowDimensions();
  // const links: {}[] = [{}]
  const company: Links[] = [
    { path: "/about", title: "About" },
    { path: "#", title: "Terms and Conditions" },
  ];

  const explore: Links[] = [
    { path: "/user/sign-up", title: "Create Account" },
    { path: "/user/sign-in", title: "Log In" },
    { path: "/portfolio", title: "Portfolio" },
    { path: "/projects", title: "Projects" },
  ];

  const connect: Links[] = [
    { path: "https://www.youtube.com/", title: "YouTube" },
    { path: "https://twitter.com/?lang=en", title: "Twitter" },
    { path: "https://www.linkedin.com/", title: "LinkedIn" },
  ];

  return (
    <>
      <div className={[styles.footer, "center section columns"].join(" ")}>
        <div
          className={[
            `${width > 690 ? "rows" : "columns"}`,
            styles.container,
          ].join(" ")}
        >
          <p style={{ color: `var(--light)`, maxWidth: "400px" }}>
            <span className="md-txt bold"> flipside</span>

            <br />
            <span className="xs-txt semi-bold">Real Estate Redefined</span>
            <br />
            <br />
            <span className={styles.title} style={{ color: `var(--light)` }}>
              Flipside is currently under development. Some features may not be
              available. We apologize for any inconvenience and assure you we're
              working diligently to resolve this.
            </span>
          </p>
          <div
            className="rows"
            style={{
              alignItems: "start",
              gap: "3rem",
            }}
          >
            <div className="columns">
              <p className={styles.title}>COMPANY</p>
              {company.map((page, index) => (
                <Link
                  key={index}
                  className={[styles.links, "xs-txt"].join(" ")}
                  to={page.path}
                >
                  {page.title}
                </Link>
              ))}
            </div>
            <div className="columns">
              <p className={styles.title}>EXPLORE</p>
              {explore.map((page, index) => (
                <Link
                  key={index}
                  className={[styles.links, "xs-txt"].join(" ")}
                  to={page.path}
                >
                  {page.title}
                </Link>
              ))}
            </div>
            <div className="columns">
              <p className={styles.title}>CONNECT</p>
              {connect.map((page, index) => (
                <a
                  key={index}
                  className={[styles.links, "xs-txt"].join(" ")}
                  href={page.path}
                  target="_blank"
                  rel="noreferrer"
                >
                  {page.title}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.lineContainer}>
          <div className={styles.line} />
        </div>
        <span className={[styles.legal, styles.container].join(" ")}>
          Flipside Copyright information goes here Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam vulputate ac tortor nec
          efficitur. Pellentesque hendrerit faucibus sapien, ac convallis ipsum
          volutpat sit amet. Aenean posuere scelerisque eros, eget accumsan
          lectus condimentum et. Vivamus semper purus nunc, sed hendrerit magna
          condimentum dignissim. Nulla sollicitudin lorem quis mi tempus, at
          dignissim nulla bibendum. Etiam risus lacus, pharetra quis imperdiet
          non, cursus eu libero. Maecenas purus nibh, bibendum fringilla mi sed,
          volutpat sodales erat. Vivamus volutpat nunc quis ipsum ultricies,
          quis dignissim enim blandit. Morbi erat neque, posuere nec felis sit
          amet, lacinia ultricies libero. Morbi tempor mauris non tortor
          suscipit pulvinar. Ut efficitur auctor lacus quis mollis. Fusce
          bibendum turpis non leo suscipit sagittis. Nunc vel aliquet tellus.
          Fusce viverra fringilla quam cursus malesuada. Quisque vehicula
          faucibus risus eget tempor. Nulla feugiat nunc urna, sit amet egestas
          est facilisis quis. Donec ac placerat tellus. Aliquam dolor metus,
          mollis id nibh nec, dictum dictum lectus. Suspendisse potenti. Ut sit
          amet sem arcu. Mauris aliquet venenatis tellus, ac porta augue pretium
          nec. Curabitur nulla sem, bibendum at tellus nec, malesuada mattis
          tellus. Nunc ac ex condimentum, ultricies turpis sed, sagittis mauris.
          Nulla id laoreet ligula, quis laoreet nibh. Morbi est sem, porta eget
          lectus eu, egestas euismod urna. Donec enim diam, vulputate a lacus
          non, bibendum facilisis libero. Sed nec elit et nunc venenatis blandit
          vel sed nisl. Aliquam eu cursus tellus. Sed eros est, efficitur ut
          dignissim vitae, mollis eu felis. Fusce vitae varius neque. Maecenas
          ex mi, sagittis id nulla euismod, porttitor rhoncus elit. Ut lobortis
          egestas magna et vehicula. Integer suscipit ut eros pellentesque
          feugiat. Morbi dapibus tristique urna quis gravida. Vestibulum congue
          dui nunc, a dictum nisl mattis eget. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Donec odio
          turpis, porta ut congue sed, scelerisque fermentum nisl. Vestibulum in
          viverra ex, in elementum ex. Nullam tincidunt urna eu sapien euismod,
          vitae semper augue egestas. Nunc ac aliquam nunc, vel finibus tortor.
          Aliquam lacinia ipsum felis, ac rhoncus arcu congue a. Mauris et
          ullamcorper tellus, id blandit neque. Morbi diam lectus, feugiat non
          felis vitae, rutrum dapibus nunc. Pellentesque mattis diam vitae massa
          pharetra ornare. Praesent mollis ut ipsum tincidunt luctus. Quisque
          sit amet feugiat magna, eget blandit tortor. Praesent sed est
          suscipit, faucibus lectus vel, faucibus tellus. Sed ipsum libero,
          tempor non laoreet interdum, convallis sit amet magna. Vestibulum
          luctus pharetra urna efficitur feugiat. Nulla sit amet nisi consequat,
          mollis odio nec, molestie nisl. Donec sed tincidunt risus, eget
          efficitur mauris. Cras ullamcorper vestibulum tellus et posuere.
        </span>{" "}
      </div>
    </>
  );
};

export default Footer;
