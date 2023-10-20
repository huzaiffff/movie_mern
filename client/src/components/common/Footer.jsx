import { Paper, Stack, Button, Box, Typography } from '@mui/material';
import React from 'react';
import Container from './Container';
import Logo from './Logo';
import menuConfigs from "../../configs/menu.configs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Paper
        square
        elevation={2}
        sx={{
          backgroundColor: '#1a1a1a',
          padding: '0.1rem',
          marginTop: '2rem',
          boxShadow: '0px -4px 6px -4px rgba(0,0,0,0.2)',
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
        >
          <Logo />
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            {menuConfigs.main.map((item, index) => (
              <Button
                key={index}
                sx={{
                  color: 'white',
                  textTransform: 'capitalize',
                  '&:hover': { color: '#ff3366' },
                }}
                component={Link}
                to={item.path}
              >
                {item.display}
              </Button>
            ))}
          </Box>
        </Stack>
        <Typography variant="body2" sx={{ color: '#888888', marginTop: '0.1rem' }}>
          © {new Date().getFullYear()} Laila Movie. All rights reserved.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Footer;
