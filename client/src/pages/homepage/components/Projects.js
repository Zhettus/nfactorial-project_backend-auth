import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import interf from "../assets/img/interface.png";
import chat from "../assets/img/chat.png";
import tutor from "../assets/img/tutor.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

import '../Home.css';


export const Projects = () => {

  const projects = [
    {
      title: "We have 2 interface",
      description: "This website divides into two interfaces: first is intented for teachers, and second for parents of kids with special needs",
      imgUrl: interf,
    },
    {
      title: "Forum!",
      description: "Both parents and teachers can use forum!",
      imgUrl: chat,
    },
    {
      title: "Tutor Search",
      description: "Parents can search for tutors to their children",
      imgUrl: tutor,
    },
    {
      title: "Information",
      description: "Teacher can find free materials",
      imgUrl: interf,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Features of this website</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
