import React, { Component } from "react";
import { Container } from "reactstrap";
import { Button } from "semantic-ui-react";
import SeatArrangementLogic from "../utils/seatArrangementLogic";
import SeatsContent from "./seatsContent";

class SeatingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seatingData: null,
    };
  }
  componentDidMount() {
    let data = localStorage.getItem("data");
    data = JSON.parse(data);
    this.seatAllotment(data.seats, data.passengers);
  }
  seatAllotment = (seatsArray, passengersCount) => {
    const airplane = new SeatArrangementLogic(seatsArray, passengersCount);
    const seatingData = airplane.autoAssignedSeats;
    this.setState({ seatingData });
  };

  render() {
    let { seatingData } = this.state;
    return (
      <div className="App">
        <Container className="themed-container mb-70">
          <SeatsContent seatingData={seatingData} />
        </Container>
        <Button onClick={() => this.props.history.back()} primary>
          Go Back
        </Button>
      </div>
    );
  }
}

export default SeatingPage;
