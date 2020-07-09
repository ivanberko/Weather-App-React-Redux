import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { login } from '../../redux/operations/sessionOperation';
import { invalidData } from '../../redux/actions/actionSession';

const LoginForm = ({ onLogin, invalidData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin({ email, password });
      setEmail('');
      setPassword('');
    } else {
      invalidData('Invalid data !');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <Input
          value={email}
          name="name"
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
      <Button label="Log In" type="submit" />
    </Form>
  );
};

const mapDispatchToProps = {
  onLogin: login,
  invalidData: invalidData,
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginForm);
