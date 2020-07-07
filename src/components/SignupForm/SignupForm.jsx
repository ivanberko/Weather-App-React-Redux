import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { signup } from '../../redux/operations/sessionOperation';

const LoginForm = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
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
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginForm);