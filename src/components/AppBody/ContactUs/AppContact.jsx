import { Form, Button, Container, Col, Row } from "react-bootstrap";
import {
  BsFillTelephoneFill,
  BsPinMapFill,
  BsEnvelopeFill,
} from "react-icons/bs";
import styles from "./AppContact.module.css";

const AppContact = () => {
  return (
    <>
      <Container>
        <h1 style={{ padding: "26px 0" }}>Submit your details</h1>
        <Row style={{ marginBottom: "20px" }}>
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            className={styles.icons}
          >
            <div>
              <i>
                <BsEnvelopeFill />
              </i>
              hello@yay.com
            </div>
            <div>
              <i>
                <BsFillTelephoneFill />
              </i>
              123 456 7890
            </div>
            <div>
              <i>
                <BsPinMapFill />
              </i>
              123 some stret somewhere some city 10000
            </div>
          </Col>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
            <div className={styles.formStyle}>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Website</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" style={{ height: "100px" }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Allow us to sell your personal details to whomever we want"
                  />
                </Form.Group>
                <Button
                  variant="success"
                  type="submit"
                  style={{ width: "100%" }}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AppContact;
