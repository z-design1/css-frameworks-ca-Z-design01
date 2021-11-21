import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { useState } from "react";
import PaginationNews from "./PaginationNews";

const NewsList = () => {
  const [news] = useState({
    newsList: [
      "/images/news/news-1.jpg",
      "/images/news/news-2.jpg",
      "/images/news/news-3.jpg",
      "/images/news/news-4.jpg",
      "/images/news/news-5.jpg",
      "/images/news/news-6.jpg",
      "/images/news/news-7.jpg",
      "/images/news/news-8.jpg",
    ],
  });
  return (
    <>
      <Container>
        <br />
        <h1>News</h1>
        <br />
        <PaginationNews />
        <Row sm={4} md={2}>
          {news.newsList.map((index, key) => {
            return (
              <Col key={key} sm={12} md={4} lg={3}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={index} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="success">More</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <br />
        <PaginationNews />
      </Container>
    </>
  );
};

export default NewsList;
