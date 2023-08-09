import React from "react";
import './styles.scss';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

const Contact = () => {
    return (
        <div id="contact">
  <h2 id="contact-title">Contact me!</h2>

  <div id="contact-body">
    

    <span id="contact-name"><b>Manaswani Behki</b></span>
    <span id="contact-desc"><b>Student-Developer</b></span>

    <span id="contact-desc">
      <br />
      I'm a third year student at TIET, interested in front end development , and problem solving.<br/> Apart from that, I am into music and books, so feel free to hit me up on any one of these.<br/>See ya!
    </span>

    <div id="contact-social">
      <div className="socials">
        <div id="contact-social">
          <div class="socials">
            
            <a class="hvr-shrink" href="https://github.com/ManaswaniBehki"><AiFillGithub size={40}/>
              
            </a>
            
            <a class="hvr-shrink" href="https://www.linkedin.com/in/manaswani-behki"><AiFillLinkedin size={40}/>
             
            </a>
            
            <a class="hvr-shrink" href="https://www.instagram.com/manaswani_behki/"><AiFillInstagram size={40}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Contact;
