import { useState } from 'react';

const SignUpForm = () => {
  const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          value={displayName}
        />
        <label>Email</label>
        <input
          type="text"
          required
          onChange={handleChange}
          value={email}
        />
        <label>Password</label>
        <input
          type="text"
          required
          onChange={handleChange}
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type="text"
          required
          onChange={handleChange}
          value={confirmPassword}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
