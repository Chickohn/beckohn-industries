import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import HeroBackgroundDots from './HeroBackgroundDots';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        height: '100vh',
        background: 'linear-gradient(135deg, var(--color-gradient-start) 0%, var(--color-gradient-end) 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <HeroBackgroundDots />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                color: 'common.white',
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Transform Your Digital Presence
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h5"
              sx={{
                color: 'common.white',
                mb: 4,
                maxWidth: '600px',
              }}
            >
              We craft stunning, high-performance websites that help businesses thrive in the digital world.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Link to="services" smooth={true} duration={500}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'common.white',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'action.hover',
                    },
                  }}
                >
                  Our Services
                </Button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'common.white',
                    color: 'common.white',
                    '&:hover': {
                      borderColor: 'common.white',
                      backgroundColor: 'custom.borderLight',
                    },
                  }}
                >
                  Get in Touch
                </Button>
              </Link>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 