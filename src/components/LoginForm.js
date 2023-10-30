import React, { useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  Link,
  TextField,
} from '@mui/material';
import MyText from './typography';

const LoginForm = () => {
  // const navigate = useNavigate();

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (evt) => {
    evt.preventDefault();
    const { value, name } = evt.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const submitForm = (evt) => {
    evt.preventDefault();
    // Dispatch or manage authentication as needed without Redux
    // For instance, you might call an authentication API here
    // For demonstration purposes, you can navigate to the dashboard on successful login
    // navigate('/home');
  };

  return (
    <Container
      className="centralized"
      margin="dense"
      maxWidth="xs"
      sx={{
        bgcolor: '#fff',
        padding: '2rem',
        borderRadius: 2,
        margin: 'auto',
      }}
    >
      <MyText text="Log In" type="h4" />
      <form onSubmit={submitForm}>
        <FormControl sx={{ width: '100%' }}>
          <TextField
            margin="dense"
            required
            label="Email"
            name="email"
            variant="standard"
            type="email"
            autoComplete="email"
            onChange={handleChange}
          />
          <TextField
            required
            margin="dense"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" sx={{ margin: '2rem 0' }}>
            Sign In
          </Button>
        </FormControl>
        <Link href="/contact" underline="always" sx={{ fontWeight: 500 }}>
          Forgot your password?
        </Link>
      </form>
    </Container>
  );
};

export default LoginForm;
