import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      'service_qr0f7tb',
      'template_v5ptya7',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'QWT65g4wOa_w_NZbI'
    )
    .then((result) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
    }, (error) => {
        alert('Failed to send message. Please try again later.');
        console.error(error.text);
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope size={24} color="var(--color-primary)" />,
      title: 'Email',
      content: 'digital@beckohn.com',
    },
    {
      icon: <FaPhone size={24} color="var(--color-primary)"/>,
      title: 'Phone',
      content: '+44 7478 277391',
    },
    {
      icon: <FaMapMarkerAlt size={24} color="var(--color-primary)" />,
      title: 'Location',
      content: 'South London, UK',
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        backgroundColor: 'var(--color-black)',
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
              color: 'var(--color-secondary)',
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: 6,
              color: 'var(--color-text-light)',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Ready to start your project? Contact us today for a free consultation.
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            gap: 4,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                backgroundColor: 'var(--color-bg-dark)',
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  '& .MuiTextField-root': {
                    '& .MuiInputBase-root': {
                      border: '1px solid var(--color-border-light)',
                    },
                  },
                }}
              >
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      mt: 2,
                      py: 1.5,
                      backgroundColor: 'var(--color-primary)',
                      color: 'var(--color-black)',
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </Box>
            </Paper>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box sx={{ height: '100%' }}>
              {contactInfo.map((info, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    p: 3,
                    mb: 2,
                    backgroundColor: 'var(--color-bg-dark)',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 0.5,
                        color: 'var(--color-text)',
                      }}
                    >
                      {info.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'var(--color-text-light)',
                      }}
                    >
                      {info.content}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact; 