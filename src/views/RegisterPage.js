import React, { useEffect, useState } from 'react';

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from 'reactstrap';

// core components
import ExamplesNavbar from '../components/Headers/Navbars/ExamplesNavbar';
// redux func
import { register } from '../js/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function RegisterPage() {
  const [userInfo, setuserCred] = useState({
    name: '',
    lastname: '',
    mail: '',
    password: '',
    password2: ''
  });
  const dispatch = useDispatch();
  const addUser = () => {
    dispatch(register(userInfo));
  };
  const onChangeHandler = e => {
    setuserCred({ ...userInfo, [e.target.name]: e.target.value });
    console.log('TCL: RegisterPage -> userInfo', userInfo);
  };
  document.documentElement.classList.remove('nav-open');
  useEffect(() => {
    document.body.classList.add('register-page');
    return function cleanup() {
      document.body.classList.remove('register-page');
    };
  });
  const isAuth = useSelector(state => state.auth.isAuth);
  return isAuth ? (
    <Redirect to='/profile' />
  ) : (
    <>
      <ExamplesNavbar />
      <div
        className='page-header'
        style={{
          backgroundImage:
            'url(' + require('../assets/img/ilya-yakover.jpg') + ')'
        }}
      >
        <div className='filter' />
        <Container>
          <Row>
            <Col className='ml-auto mr-auto' lg='4'>
              <Card className='card-register ml-auto mr-auto'>
                <h3 className='title mx-auto'>Bienvenu</h3>
                <Form className='register-form'>
                  <label>Nom</label>
                  <Input
                    placeholder='Nom'
                    type='text'
                    name='name'
                    onChange={onChangeHandler}
                  />
                  <label>Prénom</label>
                  <Input
                    placeholder='Prénom'
                    type='text'
                    name='lastName'
                    onChange={onChangeHandler}
                  />
                  <label>Email</label>
                  <Input
                    placeholder='Email'
                    type='email'
                    name='mail'
                    onChange={onChangeHandler}
                  />
                  <label>Mot de passe</label>
                  <Input
                    placeholder='Mot de passe'
                    type='password'
                    name='password'
                    onChange={onChangeHandler}
                  />
                  <label>Mot de passe</label>
                  <Input
                    placeholder='Retaper votre Mot de passe'
                    type='password'
                    name='password2'
                    onChange={onChangeHandler}
                  />
                  <Button
                    block
                    className='btn-round'
                    color='danger'
                    onClick={addUser}
                  >
                    S'inscrire
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className='footer register-footer text-center'>
          <h6>
            © {new Date().getFullYear()}, made with{' '}
            <i className='fa fa-heart heart' /> by Anis Mell
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
