import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Box = [{ Text: "dd" }, 2];
const third = [
  {
    title: "Карточка товара",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    title: "Карточка товара",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    title: "Карточка товара",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    title: "Карточка товара",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
];
function App() {
  return (
    <>
      <section className="firstsection common">
        <Container>
          <h1 className="text-center mb-8">OptinChat</h1>
          <Row>
            <Col md="12" className="text-center">
              <p>Convert visitors into</p>
              <h1 className="title">Subscribers</h1>
              <p> Collect Email IDs of Visitors with AI chat! </p>
              <Button variant="false" className="btn-standard" as="a" href="#">
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="secondsection">
        <Container>
          <h3 className="text-center pt-4 pb-4">Everyone loves OptinChat</h3>
          <Row>
            {Box.map((c, index) => (
              <Col md="6">
                <figure class="effect-moses">
                  <img
                    src="https://tympanus.net/Development/HoverEffectIdeas/img/24.jpg"
                    alt="img24"
                  />
                  <figcaption>
                    <h2>
                      {c.Text} <span>Moses</span>
                    </h2>
                    <p>Moses loves to run after butterflies.</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className=" thirdsection common">
        <Container>
          <h3 className="text-center pt-4 pb-4">About OptinChat</h3>
          <br />

          <Row xs={1} md={2} lg={2}>
            {third.map((c, index) => (
              <Col>
                <div class="box">
                  <span></span>
                  <div class="content">
                    <h2>{c.title}</h2>
                    <p>{c.text}</p>
                    {/* <a href="https://www.google.com/" target="_blank">
                    Подробнее
                  </a> */}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section></section>
    </>
  );
}

export default App;
