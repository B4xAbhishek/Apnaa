import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './styles.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Contact from './components/Contact';

function App() {
  const isSignedIn = true; // You can set the signed-in state as needed

  return (
    <Router>
      <div className="App">
        <ResponsiveAppBar />
        <Container sx={{ margin: '2rem auto' }}>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
