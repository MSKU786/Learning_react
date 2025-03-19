import {
  initializeApp,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomerParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = await doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists()) {
    return userDocRef;
  }

  const { displayName, email } = userAuth;
  const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
    });
  } catch (err) {
    console.log('error createing the user', err.message);
  }

  return userDocRef;
};
