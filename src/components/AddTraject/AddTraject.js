import React, { useState } from 'react';
import { Container, Row, Col, Progress, Form } from 'reactstrap';
import MapGL from 'react-map-gl';
import MapboxAutocomplete from 'react-mapbox-autocomplete';

import './AddTraject.css';

const AddTraject = () => {
  const [viewport, setViewport] = useState({
    latitude: 36.806496,
    longitude: 10.181532,
    zoom: 5,
    width: '100%',
    height: '100%'
  });

  const [search, setSearch] = useState({
    depPoint: '',
    arrPoint: ''
  });

  const departurePoint = (result, lat, lng, text) => {
    setSearch({
      ...search,
      depPoint: result
    });
  };
  const suggestionSelect = (result, lat, lng, text) => {
    setViewport({
      ...viewport,
      latitude: Number(lat),
      longitude: Number(lng),
      zoom: 10
    });
    setSearch({
      ...search,
      arrPoint: result
    });

    console.log(result, lat, lng, text);
  };
  return (
    <Container className='section'>
      <Row>
        <h3 className='title mx-auto'>Publier une annonce :</h3>
      </Row>

      <div className='progress-container progress-primary'>
        <span className='progress-badge'>Progresse:</span>
        <Progress max='100' value='40' barClassName='progress-bar-primary' />
      </div>
      <Form className='form mt-4 '>
        <Container className='section-components'>
          <Row>
            <Col md={6}>
              <Row>
                <label>Point de départ:</label>
              </Row>
              <Row>
                <MapboxAutocomplete
                  name='depPoint'
                  className='search-input'
                  publicKey={process.env.REACT_APP_MAPBOX_TOKEN}
                  inputClass='form-control search'
                  onSuggestionSelect={departurePoint}
                  country='tn'
                  resetSearch={false}
                />
              </Row>
              <Row className='mt-2'>
                <label>Point d'arrivée':</label>
              </Row>
              <Row>
                <MapboxAutocomplete
                  name='arrPoint'
                  className='search-input'
                  publicKey={process.env.REACT_APP_MAPBOX_TOKEN}
                  inputClass='form-control search'
                  onSuggestionSelect={suggestionSelect}
                  country='tn'
                  resetSearch={false}
                />
              </Row>
            </Col>
            <Col md={6}>
              <MapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle='mapbox://styles/ansmeliti/ck1s2bb1s1qh11cqnpb4orsmf'
                onViewportChange={viewport => {
                  setViewport(viewport);
                }}
              />
            </Col>
          </Row>
        </Container>
      </Form>
    </Container>
  );
};

export default AddTraject;
