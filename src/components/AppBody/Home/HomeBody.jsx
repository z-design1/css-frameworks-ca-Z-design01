import { Tab, Tabs, Container, Row } from "react-bootstrap";
import Sonnet from "./Sonnet";

const HomeBody = () => {
  return (
    <>
      <Container>
        <Row>
          <div style={{ padding: "10px " }}>
            <h2>Hello From YAY Project</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              tempore soluta illo esse tempora assumenda voluptates
              necessitatibus quis corrupti praesentium, temporibus, odio nihil
              dolorem! Nobis dolorem voluptatum deleniti tempora modi.
            </p>
          </div>

          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3 sm-3"
          >
            <Tab eventKey="home" title="First">
              <Sonnet
                imgId={0}
                tabDesc={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta exercitationem reprehenderit dolor repellat. Est laudantium eveniet, praesentium rerum pariatur mollitia dolores harum distinctio error adipisci similique voluptatem. Voluptas, libero nisi."
                }
              />
            </Tab>
            <Tab eventKey="profile" title="Second">
              <Sonnet
                imgId={1}
                tabDesc={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta exercitationem reprehenderit dolor repellat. Est laudantium eveniet, praesentium rerum pariatur mollitia dolores harum distinctio error adipisci similique voluptatem. Voluptas, libero nisi."
                }
              />
            </Tab>
            <Tab eventKey="contact" title="Third">
              <Sonnet
                imgId={2}
                tabDesc={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta exercitationem reprehenderit dolor repellat. Est laudantium eveniet, praesentium rerum pariatur mollitia dolores harum distinctio error adipisci similique voluptatem. Voluptas, libero nisi."
                }
              />
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </>
  );
};

export default HomeBody;
