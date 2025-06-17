import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaShoppingCart, FaSearch } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode size={40} />,
    title: 'Custom Web Development',
    description: 'Tailored websites built with modern technologies to meet your specific business needs.',
  },
  {
    icon: <FaMobile size={40} />,
    title: 'Responsive Design',
    description: 'Websites that look and perform perfectly on all devices, from mobile to desktop.',
  },
  {
    icon: <FaShoppingCart size={40} />,
    title: 'E-commerce Solutions',
    description: 'Powerful online stores with secure payment processing and inventory management.',
  },
  {
    icon: <FaSearch size={40} />,
    title: 'SEO Optimization',
    description: 'Strategic optimization to improve your website\'s visibility in search engines.',
  },
];

const Services = () => {
  return (
    <Box
      id="services"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              fontWeight: 700,
              color: 'primary.main',
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: 6,
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            We offer comprehensive web development solutions to help your business succeed online
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 4,
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services; 