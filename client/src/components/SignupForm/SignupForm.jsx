import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { signup } from '../../redux/operations/sessionOperation';
import { invalidData } from '../../redux/actions/actionSession';

const SignupForm = ({ onLogin, isValidData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      onLogin({ name, email, password });
      setName('');
      setEmail('');
      setPassword('');
    } else {
      isValidData('The form you filled is not valid');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          value={name}
          name="name"
          onChange={({ target: { value } }) => {
            setName(value);
          }}
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          value={email}
          name="email"
          onChange={({ target: { value } }) => {
            setEmail(value);
          }}
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          value={password}
          name="password"
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
        />
      </Label>
      <Button label="Sign up" type="submit" />
    </Form>
  );
};

const mapDispatchToProps = {
  onLogin: signup,
  isValidData: invalidData,
};

SignupForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  isValidData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignupForm);
