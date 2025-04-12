import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { FormInput } from '../form-input/form-input.component';
import { Button, BUTTON_TYPE_CLASSES } from '../button/button.component';
import { SignUpContainer, SignUpTitle } from './sign-up-form.styles';

const SignUpForm = () => {
  const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      createUserDocumentFromAuth(user, displayName);
      setFormFields(defaultFormField);
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      } else {
        console.log('Error creating user', err.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignUpContainer>
      <SignUpTitle>Sign up with your email and password</SignUpTitle>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="text"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="text"
          required
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button
          type="submit"
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
