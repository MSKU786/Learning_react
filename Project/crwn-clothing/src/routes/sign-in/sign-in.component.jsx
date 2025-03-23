import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  singInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const SignIn = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);

    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h2> Sign In </h2>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
