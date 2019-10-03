import React from 'react';

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from 'reactstrap';

// core components
import ExamplesNavbar from '../components/Headers/Navbars/ExamplesNavbar';

function RegisterPage() {
  const [userInfo, setuserCred] = React.useState({
    fullName: '',
    mail: '',
    password: '',
    password2: ''
  });

  const onChangeHandler = e => {
    setuserCred({ ...userInfo, [e.target.name]: e.target.value });
    console.log('TCL: RegisterPage -> userInfo', userInfo);
  };
  document.documentElement.classList.remove('nav-open');
  React.useEffect(() => {
    document.body.classList.add('register-page');
    return function cleanup() {
      document.body.classList.remove('register-page');
    };
  });
  return (
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
                {/* <div className='social-line text-center'>
                  <Button
                    className='btn-neutral btn-just-icon mr-1'
                    color='facebook'
                    href='#pablo'
                    onClick={e => e.preventDefault()}
                  >
                    <i className='fa fa-facebook-square' />
                  </Button>
                  <Button
                    className='btn-neutral btn-just-icon mr-1'
                    color='google'
                    href='#pablo'
                    onClick={e => e.preventDefault()}
                  >
                    <i className='fa fa-google-plus' />
                  </Button>
                  <Button
                    className='btn-neutral btn-just-icon'
                    color='twitter'
                    href='#pablo'
                    onClick={e => e.preventDefault()}
                  >
                    <i className='fa fa-twitter' />
                  </Button>
      </div>*/}
                <Form className='register-form'>
                  <label>Nom complet</label>
                  <Input
                    placeholder='Nom complet'
                    type='text'
                    name='fullName'
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
                  <Button block className='btn-round' color='danger'>
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
