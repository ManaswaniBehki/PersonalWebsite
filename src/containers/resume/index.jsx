import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import { data } from "./utilis";
import './styles.scss';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {BiSolidGraduation} from 'react-icons/bi'
const Resume = () => {
  return (
    <section id="resume" className="resume">
      
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Projects</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--pink-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  
                  color : 'var(--pink-theme-sub-text-color)',
                  border : '1.5px solid var(--pink-theme-main-color)',
                }}
                
                icon={<AiOutlineFundProjectionScreen/>}
                iconStyle={{
                  background : '#181818',
                  color : 'var(--pink-theme-main-color)',

                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title}
                  </h3>
                  <h4>
                    {item.subTitle}
                  </h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">{item.description} </p>

              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--pink-theme-main-color)"
          >
          {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  textDecoration:'none',
                  color : 'var(--pink-theme-sub-text-color)',
                  border : '1.5px solid var(--pink-theme-main-color)'
                }}
                
                icon={<BiSolidGraduation/>}
                iconStyle={{
                  background : '#181818',
                  color : 'var(--pink-theme-main-color)',

                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title}
                  </h3>

                  <h4>
                    {item.subTitle}
                  </h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">{item.description} </p>

              </VerticalTimelineElement>
            ))}
            </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};
export default Resume;