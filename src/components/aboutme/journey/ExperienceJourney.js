import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

import {
  FaUserTie  ,
} from "react-icons/fa";


function ExperienceJourney() {
  const timelineContentStyle = {
    margin: '1em 0 0',
    textAlign: 'justify',
    lineHeight: 1.6,};
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2022 - 2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fff" }}
          icon={<FaUserTie  />}
        >
          <h5 className="vertical-timeline-element-title">
          ColleGPT - Founder, Developer and Content Creator
          </h5>
          {/* <h6 className="vertical-timeline-element-subtitle mt-2">
            Management of Information System
          </h6> */}<br />
          <p style={timelineContentStyle}> • Founded and expanded ColleGPT by crafting foundational elements and mapping out the
              platform's strategic vision and course.</p>
          <p style={timelineContentStyle}> • Worked diligently to ensure seamless integration of the frontend elements, employing
              React.js effectively to enhance the overall user experience.</p>
          <p style={timelineContentStyle}> • Developed and curated academic content for ColleGPT, enhancing its educational merit
              and adeptly overseeing continual improvements.</p>
          <p style={timelineContentStyle}> • Created EdTech platform using MERN Stack.</p>
          <p style={timelineContentStyle}> • Implemented MongoDB integration to optimize data management and ensure scalability.</p>
          <p style={timelineContentStyle}> • Played a key role in the UI/UX design of ColleGPT, leveraging expertise to create an
              intuitive and visually appealing user interface, enhancing the overall user experience.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fff", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
