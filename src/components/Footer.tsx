import React from 'react';
import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaTwitter />, url: 'https://twitter.com/beckohndigital' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/company/beckohndigital' },
    { icon: <FaGithub />, url: 'https://github.com/beckohndigital' },
    { icon: <FaInstagram />, url: 'https://instagram.com/beckohndigital' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: 'var(--color-bg-dark)',
        color: 'text.secondary',
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
              Beckohn Digital
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                mb: 2,
              }}
            >
              Beckohn, and the future will come...
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
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'common.white',
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
                      color: 'text.secondary',
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'common.white',
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
                color: 'text.secondary',
                mb: 1,
              }}
            >
              Email: digital@beckohn.com
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                mb: 1,
              }}
            >
              Phone: +44 7478 277391
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
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
            borderTop: '1px solid',
            borderColor: 'custom.borderLight',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
            }}
          >
            © {new Date().getFullYear()} Beckohn Digital. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 