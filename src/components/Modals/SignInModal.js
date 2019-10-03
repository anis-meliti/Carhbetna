import React from 'react';
// reactstrap components
import { Modal, FormGroup, Input, Button, Spinner } from 'reactstrap';
// redux
import { connect, useSelector } from 'react-redux';
import { loginUser } from '../../js/actions/auth';
// react-router
import { Redirect } from 'react-router-dom';

const SignInModal = ({ isOpen, toggle, loginUser }) => {
  const [userCred, setuserCred] = React.useState({
    mail: '',
    password: ''
  });

  const onChangeHandler = e => {
    setuserCred({ ...userCred, [e.target.name]: e.target.value });
  };
  const isAuth = useSelector(state => state.auth.isAuth);
  const loading = useSelector(state => state.auth.loading);

  const logUser = () => {
    loginUser(userCred);
  };

  return loading ? (
    <Spinner color='primary' className='mx-auto my-auto' />
  ) : isAuth ? (
    <Redirect to='/' />
  ) : (
    <Modal isOpen={isOpen} modalClassName='modal-register'>
      <div className='modal-header no-border-header text-center'>
        <button
          aria-label='Close'
          className='close'
          data-dismiss='modal'
          type='button'
          onClick={toggle}
        >
          <span aria-hidden={true}>×</span>
        </button>
        <h6 className='text-muted'>Bienvenu à</h6>
        <h3 className='modal-title text-center'>Carhbetna</h3>
        <p>Connectez-vous à votre compte</p>
      </div>
      <div className='modal-body'>
        <FormGroup>
          <label>Email</label>
          <Input
            defaultValue=''
            placeholder='Email'
            type='text'
            name='mail'
            onChange={onChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <label>Mot de passe</label>
          <Input
            defaultValue=''
            placeholder='Mot de passe'
            type='password'
            name='password'
            onChange={onChangeHandler}
          />
        </FormGroup>
        <Button block className='btn-round' color='default' onClick={logUser}>
          S'identifier
        </Button>
      </div>
      <div className='modal-footer no-border-footer'>
        <span className='text-muted text-center'>
          À la recherche{' '}
          <a href='/register' onClick={e => e.preventDefault()}>
            créer un compte
          </a>
          ?
        </span>
      </div>
    </Modal>
  );
};

export default connect(
  null,
  { loginUser }
)(SignInModal);
