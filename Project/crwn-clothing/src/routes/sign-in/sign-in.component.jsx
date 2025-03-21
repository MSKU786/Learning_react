import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  singInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);

    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h2> Sign In </h2>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <button onClick={singInWithGoogleRedirect}>
        Sign in with Google redirect
      </button>
    </div>
  );
};

export default SignIn;
