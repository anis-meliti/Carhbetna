import React from 'react';
// reactstrap components
import { Modal, FormGroup, Input, Button } from 'reactstrap';

const SignInModal = ({ isOpen, toggle }) => {
  const [userCred, setuserCred] = React.useState({
    mail: '',
    password: ''
  });

  const onChangeHandler = e => {
    setuserCred({ ...userCred, [e.target.name]: e.target.value });
  };
  return (
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
        <Button block className='btn-round' color='default'>
          S'identifier
        </Button>
      </div>
      <div className='modal-footer no-border-footer'>
        <span className='text-muted text-center'>
          À la recherche{' '}
          <a href='#pablo' onClick={e => e.preventDefault()}>
            créer un compte
          </a>
          ?
        </span>
      </div>
    </Modal>
  );
};

export default SignInModal;
