import React, { useState, useEffect } from 'react';

import Card from '../ui/Card';
import classes from './Login.module.css';
import {Modal,Button,Container} from 'react-bootstrap';
import { DUMMY_ID } from './CreateAccount';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (DUMMY_ID.some(id=>id.email===enteredEmail&id.password==enteredPassword)){
        props.onLogin(enteredEmail,enteredPassword)
    } else{
        alert("Invalid Account or Password")
    }


    // try{

    // for (let i=0;i<DUMMY_ID.length;i++){
    //     if (DUMMY_ID[i].email==enteredEmail & DUMMY_ID[i].password==enteredPassword){
    //         props.onLogin(enteredEmail, enteredPassword);
    //         break

    //     } 
    // }} catch(e){
    //     alert("invalid account")

    // }
    // if (DUMMY_ID[0].email==enteredEmail & DUMMY_ID[0].password==enteredPassword){
    //     props.onLogin(enteredEmail, enteredPassword);

    // }
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton className={classes.ModalHeader}>
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid" className={classes.ModalBody}>
    <Container fluid>
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
    </Container>
    </Modal.Body>
    <Modal.Footer className={classes.ModalFooter}>
        <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
    </Modal>
  );
};

export default Login;
