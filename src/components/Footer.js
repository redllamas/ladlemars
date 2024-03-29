import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import linkedin from "../img/social/linkedin.svg";
import twitter from "../img/social/twitter.svg";
import github from "../img/social/github-icon.svg";

const Footer = () => {
  
    return (
      <footer className="footer has-background-black has-text-white-ter">
        
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/commercial">
                        特定商取引に関する法律に基づく表記
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="linkedin" href="https://linkedin.com/in/sam-ellard">
                  <img
                    src={linkedin}
                    alt="linkedin"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/smllrd">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://github.com/redllamas">
                  <img
                    className="fas fa-lg"
                    src={github}
                    alt="Github"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>               
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
