import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import GMap from '../Components/GMap.js'
import LocationForm from '../Components/LocationForm.js';


const style = {
  home: {
    height: '100vh',
    backgroundColor: 'lightgreen',
    paddingTop: '30px'
  },
  p: {
    color: 'red',
    fontSize: '30px',
    marginTop: '0px'
  },
  button: {

  },
  map: {

  }
}

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      locations: [
        { lat: 19.5113713, lng: -99.1262256 },
        { lat: 19.5102503, lng: -99.1290131 }
      ]
      }

    this.handleClickAddLocation = this.handleClickAddLocation.bind(this)
  }

  handleClickAddLocation = (lat, lng) => {
    const locations = this.state.locations
    // temporal variable
    locations.push(
      {
        lat: lat,
        lng: lng
      }
    )
    this.setState({
      locations: locations
    })
  }

  render() {

    const { locations } = this.state

    const handleClickAddLocation = this.handleClickAddLocation

    return (
      <div className="Home" style={style.home}>
        <Container fluid>
          <Row>
            <Col xs={12} className="p-0 d-flex flex-column align-items-center">
              <p className="text-center" style={style.p}>Places</p>
<<<<<<< HEAD:app/src/Scenes/Home.js
              <Button color={'danger'} className="mb-5">Add Location</Button>
              <LocationForm />
=======
              <LocationForm
                handleClickAddLocation={handleClickAddLocation}
              />
>>>>>>> develop:app/src/Scenes/Home.js
              <GMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDjy2r06U4hwphklPCu8IE17RggAaVXJYQ"
                loadingElement={<div style={{ width: `100%`, height: `100%` }} />}
                containerElement={<div style={{ width: `100%`, height: `400px` }} />}
                mapElement={<div style={{ width: `100%`, height: `100%` }} />}
                locations={locations}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home
