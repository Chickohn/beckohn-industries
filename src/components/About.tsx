import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        backgroundColor: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            gap: 6,
            alignItems: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                fontWeight: 700,
                color: 'primary.main',
              }}
            >
              About Beckohn Industries
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: 'text.secondary',
              }}
            >
              We're a team of passionate developers and designers dedicated to creating exceptional digital experiences.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: 'text.secondary',
                lineHeight: 1.8,
              }}
            >
              At Beckohn Industries, we believe that a great website is more than just code – it's a powerful tool that can transform your business. Our team combines technical expertise with creative vision to deliver websites that not only look stunning but also drive real results.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
              }}
            >
              With years of experience in web development and a deep understanding of modern technologies, we're committed to helping businesses of all sizes establish a strong online presence and achieve their digital goals.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -20,
                  left: -20,
                  right: 20,
                  bottom: 20,
                  border: '2px solid',
                  borderColor: 'primary.main',
                  zIndex: 0,
                },
              }}
            >
              <Box
                component="img"
                src="/about-image.jpg"
                alt="Team working on web development"
                sx={{
                  width: '100%',
                  height: 'auto',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 