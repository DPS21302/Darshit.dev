import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function EducationJourney() {
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
          <h1>Qualification Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2016 - 2019"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            SECONDARY EDUCATION
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
          Shree Chankya Vidhya Sankul, Nikol
          </h4>
          <p>
          Percentage: 85%
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2019 - 2021"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
          HIGHER SECONDARY EDUCATION
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
          Sarthak Higher Secondary School, Nikol
          </h4>
          <p>
          Percentage: 89%
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2021 - 2025"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">GRADUATION</h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
          LDRP Institute of Technology and Research, Gandhinagar
          </h4>
          <p>
          B.E - COMPUTER ENGINEERING [CPI: 7.57]
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fff", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default EducationJourney;
