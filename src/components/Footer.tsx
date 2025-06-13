import React from 'react';
import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaTwitter />, url: 'https://twitter.com/beckohnindustries' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/company/beckohnindustries' },
    { icon: <FaGithub />, url: 'https://github.com/beckohnindustries' },
    { icon: <FaInstagram />, url: 'https://instagram.com/beckohnindustries' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: '#1e293b',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 700,
              }}
            >
              Beckohn Industries
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                mb: 2,
              }}
            >
              Transforming ideas into exceptional digital experiences.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component={Link}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&:hover': {
                      color: 'white',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 700,
              }}
            >
              Quick Links
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                p: 0,
                m: 0,
              }}
            >
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <Box
                  component="li"
                  key={item}
                  sx={{
                    mb: 1,
                  }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'white',
                      },
                    }}
                  >
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 700,
              }}
            >
              Contact Info
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                mb: 1,
              }}
            >
              Email: contact@beckohn.com
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                mb: 1,
              }}
            >
              Phone: +44 7478 277391
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              Location: South London, UK
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 4,
            pt: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            © {new Date().getFullYear()} Beckohn Industries. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 