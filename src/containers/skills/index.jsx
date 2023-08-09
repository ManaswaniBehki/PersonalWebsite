import React from "react";
import {TbBrandCpp,TbBrandMysql,TbBrandCss3,TbTent,TbBrandHtml5} from 'react-icons/tb';
import {FaPython} from 'react-icons/fa';
import {BiLogoJavascript,BiLogoReact,BiLogoUnity} from 'react-icons/bi';
import {SiAdobephotoshop,SiCanva} from 'react-icons/si'
import {ImLab} from 'react-icons/im'
import './styles.scss';
const Skill=()=>{
    return(
        <section id='skills'>
            <h4><center>What Skills Do I Have?</center></h4>
            <div className="container skills_container">
                <div className="experience_front">
                    <h4>Languages</h4><br/>
                    <div className="experience_content">
                    <article className="experience_details">
                        <div>
                            <TbBrandCpp />
                            <h6>C/C++</h6>  
                            <small className="text-light">Experienced</small>
                        </div>
                        </article>
                        <article className="experience_details">
                        <div>
                            <FaPython />
                            <h6>Python</h6>
                            <small className="text-light">Basic</small>
                        </div>
                        </article>
                        <article className="experience_details">
                        <div>
                            <TbBrandMysql />
                            <h6>MySql</h6>
                            <small className="text-light">Intermediate</small>
                        </div>
                        </article>
                        <article className="experience_details">
                        <div>
                            <TbBrandHtml5 />
                            <h6>HTML</h6>
                            <small className="text-light">Experienced</small>
                        </div>
                        </article>
                        <article className="experience_details">
                        <div>
                            <TbBrandCss3 />
                            <h6>CSS</h6>
                            <small className="text-light">Experienced</small>
                        </div>
                        </article>
                        <article className="experience_details">
                        <div>
                            <BiLogoJavascript />
                            <h6>Javascript</h6>
                            <small className="text-light">Intermediate</small>
                        </div>
                        </article> <article className="experience_details">
                        <div>
                            <BiLogoReact />
                            <h6>ReactJs</h6>
                            <small className="text-light">Basic</small>
                        </div>
                        </article>
                    </div>
                </div>
                <div className="experience_back">
                    <h5>Softwares</h5><br/>
                    <div className="experience_content">
                    <article className="experience_details">
                    <div>
                            <ImLab />
                            <h6>MatLab</h6>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    <article className="experience_details">
                    <div>
                            <TbTent />
                            <h6>AutoCad</h6>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                       
                        <article className="experience_details">
                        <div>
                            <BiLogoUnity />
                            <h6>UNITY</h6>
                            <small className="text-light">Basic</small>
                            </div>
                        </article>
                        <article className="experience_details">
                        <div>
                            <SiCanva />
                            <h6>Canva</h6>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                        <div>
                            <SiAdobephotoshop />
                            <h6>Photoshop</h6>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Skill;