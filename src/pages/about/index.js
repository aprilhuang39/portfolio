import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  activitytimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Experience</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        {/* <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row> */}
        <Row className=" sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Work Timeline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* <h4 className="color_sec py-4">Instructional Assistant</h4>
            <h6 className="color_sec py-4">UC San Diego</h6> */}
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Activites</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {activitytimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        {/* <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Work Timeline</h3>
            {worktimeline.map((data, i) => (
              <div key={i} className="mb-5">
                <h4 className="font-weight-bold">{data.jobtitle}</h4>
                <hr />
                <ul>
                  {data.descriptions.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Col>
        </Row> */}
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Skills</h3>
            <div className="skills-container mb-5">
              {skills.map((data, i) => (
                <span key={i} className="skill-badge fs-6 me-2 mb-2">
                  {data.name}
                </span>
              ))}
            </div>
          </Col>
        </Row>

        {/* <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row> */}
      </Container>
    </HelmetProvider>
  );
};
