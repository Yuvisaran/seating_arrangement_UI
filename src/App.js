import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
} from "reactstrap";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="mb-70">Airplane Seating Allotment System</h1>
      <Container className="themed-container">
        <Form>
          <FormGroup row>
            <Label for="seatsArray" sm={5}>
              Seats Availability
            </Label>
            <Col sm={5}>
              <Input
                type="text"
                name="seats"
                id="seatsArray"
                placeholder="Enter 2D array of seats.."
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassengers" sm={5}>
              No.of Passengers
            </Label>
            <Col sm={5}>
              <Input
                type="text"
                name="passengers"
                id="examplePassengers"
                placeholder="Enter No.of Passengers"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={{ size: 10, offset: 1 }}>
              <Button color="primary">View Allotted Seats</Button>
            </Col>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
}

export default App;
