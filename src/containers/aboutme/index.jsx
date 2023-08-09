import React from "react";
import "./styles.scss";
import { FaDev, FaDatabase,FaReact } from "react-icons/fa";
import {BiLogoHtml5} from 'react-icons/bi';


const jobSummary ="Hello, I'm Manaswani, a dedicated learner and enthusiast in the world of web development and computer science. Currently, my focus is on mastering React and sharpening my skills in Data Structures and Algorithms. My passion for coding is beautifully complemented by my love for music and books, which provide me with the perfect escape and creative inspiration."//I'm thrilled to be on this ever-evolving learning path, exploring the synergy between hardware and software to shape the future of technology."

const About = () => {
  return (
    <section id="about" className="about">
      
      <div className="about__content">
        <div className="about__content__personalWrapper">
          {/* <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          > */}
            <h3><center>Who Am I?</center></h3>
            <div className="about_container">
            <div className="about_front">
                    
                    <div className="about_content">
                    <article className="about_details">
                        <div>
                        <p>{jobSummary}</p>
                        </div>
                        </article></div></div></div>
          {/* </Animate> */}

          {/* <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            
          </Animate> */}
        </div>
        <div className="about__content__servicesWrapper">
          {/* <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          > */}
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --pink-theme-main-color)" />
              </div>
              <div>
                <FaReact size={60} color="var( --pink-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --pink-theme-main-color)" />
              </div>
              <div>
                <BiLogoHtml5 size={60} color="var( --pink-theme-main-color)" />
              </div>
            </div>
          {/* </Animate> */}
        </div>
      </div>
    </section>
  );
};
export default About;