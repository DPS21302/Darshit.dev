import React from "react";
import { FaHackerrank } from "react-icons/fa";
import {
  SiLeetcode,
  SiHackerearth,
  SiCodechef,
  SiGooglecloud,
  SiCrowdsource,
  SiCodeforces,
} from "react-icons/si";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

export default function Ranking() {
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>See my rank</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">
          <Col md={3}>
            <a
              href="https://www.googlecloudcommunity.com/gc/News-Announcements/Google-Cloud-Community-Roundup-Celebrating-100-000-Community/m-p/551715#:~:text=%40AymanQadan%2C-,%40DPS21302%2C%C2%A0,-Posts/comments%3A%C2%A0"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <SiGooglecloud  />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.facebook.com/crowdsourcebygoogleofficial/photos/pcb.1805316566494695/1805275853165433"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <SiCrowdsource  />
              </Zoom>
            </a>
          </Col>
          {/* <Col md={3}>
            <a
              href="https://www.hackerearth.com/@mdtonmoy13.mt"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <SiHackerearth />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.codechef.com/users/mdtonmoy13mt"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <SiCodechef />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://codeforces.com/profile/md_mafujul_hasan"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <SiCodeforces />
              </Zoom>
            </a>
          </Col>{" "} */}
        </Row>
      </Container>
    </div>
  );
}
