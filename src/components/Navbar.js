import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import AddLinkIcon from '@mui/icons-material/AddLink';

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <AddLinkIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="span"
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 500,
                color: 'inherit',
              }}
            >
              Referrals
            </Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
