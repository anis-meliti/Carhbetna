import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Input, Progress, Form } from 'reactstrap';
import MapGL from 'react-map-gl';
import { useDispatch } from 'react-redux';
import { getPoint } from '../../js/actions/traject';

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
  const dispatch = useDispatch();
  console.log('TCL: AddTraject -> search', search);

  const changeHandler = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };
  useEffect(() => {
    dispatch(getPoint(search));
  });
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
                <Input
                  type='text'
                  placeholder='Point de départ...'
                  name='depPoint'
                  onChange={changeHandler}
                />
              </Row>
              <Row className='mt-2'>
                <label>Point d'arrivée':</label>
                <Input
                  name='arrPoint'
                  type='text'
                  placeholder={`Point d'arrivé...`}
                  onChange={changeHandler}
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
