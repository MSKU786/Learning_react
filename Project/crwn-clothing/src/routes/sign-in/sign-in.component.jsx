import { AuthContainer } from './sign-in.styles';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const SignIn = () => {
  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  );
};

export default SignIn;
