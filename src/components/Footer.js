import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaYoutube ,FaLinkedin,FaGithub} from "react-icons/fa";
const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div>
            <Button className="btn hireme-btn">
              <NavLink to="/contact"> Get Started </NavLink>
            </Button>
          </div>
        </div>
      </section>

      <footer>

        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Pavan Narayan Pabitwar</h3>
            <p>
              This Ecom Website is seamless user-friendly online shop with secure
              transactions and smooth navigation.
            </p>
           
          </div>
          
          <div className="footer-suscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input type="email" name="Email" placeholder="E-mail" />
              <input type="submit" value="suscribe" />
               
            </form>
          </div>

          <div className="footer-social">
              <h3>................Follow Us................</h3>
              <div className="footer-social--icons">
                <div>
                  <a href="https://discord.com">
                    <FaDiscord className="icons"/>
                  </a>
                </div>
                <div>
                  <a href="https://github.com/Pavan8010/">
                    <FaGithub className="icons"/>
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/pavan8010/">
                    <FaLinkedin className="icons"/>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/channel/UCs9oso1yZHKDaiIYKRMXj4A"
                    // target="_blank"
                    // rel="noreferrer"
                    >
                    <FaYoutube className="icons"/>
                  </a>
                </div>
              </div>
          </div>

          <div className="footer-contact">
              <h3>Call Now</h3>
               <a href="tel:12345678978" style={{color:"white",fontSize:"13px"}}>+91 8010963040</a>
              {/* <h3>+91 12345678978</h3> */}
          </div>
        </div>
          
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()}PavanPabitwar. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
            </div>
          </div>
        </div>
        
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;
export default Footer;
