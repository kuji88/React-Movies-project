import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from "./components/Navb";
import { Container, Row } from "react-bootstrap";
import Movieslist from "./components/Movieslist";


function App() {
  return (
    <div>
    <Navb/>
    <Container>
    <Row>
    <Movieslist/>
    </Row>
    </Container>
    </div>
  );
}

export default App;
