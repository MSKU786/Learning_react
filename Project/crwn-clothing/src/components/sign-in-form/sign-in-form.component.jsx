import { useState } from 'react';
import { FormInput } from '../form-input/form-input.component';
import { Button } from '../button/button.component';
import './sign-in-form.component.scss';
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignInForm = () => {
  const defaultFormField = {
    email: '',
    password: '',
  };

  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      setFormFields(defaultFormField);
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('Wrong password');
          break;
        case 'auth/user-not-found':
          alert('User not found');
          break;
        default:
          console.log(err.message);
      }
      console.log('Error creating user', err.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with username and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          {' '}
          <Button
            type="submit"
            buttonType="inverted"
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Button
            type="button"
            buttonType="google"
            onClick={signInWithGoogle}
          >
            Sign-In wit Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
