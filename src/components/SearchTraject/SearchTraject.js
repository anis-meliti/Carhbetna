import React, { useState } from 'react';
import { Form, Input, Row, Col, Button } from 'reactstrap';

const SearchTraject = () => {
  const [traject, settraject] = useState({
    departure: '',
    destination: ''
  });
  console.log('TCL: SearchTraject -> traject', traject);
  const changeHandler = e => {
    settraject({ ...traject, [e.target.name]: e.target.value });
  };
  return (
    <div className='filter'>
      <Form className='search-form '>
        <Row>
          <h3 className='title ml-auto mr-auto'>
            Rechercher le trajet que vous convient{' '}
          </h3>
        </Row>
        <Row className='mx-auto'>
          <Col>
            <Input
              name='departure'
              placeholder='Départ'
              type='text'
              onChange={e => changeHandler(e)}
            />
          </Col>
          <Col>
            <Input
              name='destination'
              placeholder='Déstination'
              type='text'
              onChange={e => changeHandler(e)}
            />
          </Col>
          <Col>
            <Button className='btn-round btn-icon' color='primary'>
              <i className='fa fa-search' />
              Rechercher
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchTraject;
