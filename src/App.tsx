import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Extend the theme interface for custom colors
declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      textLighter: string;
      borderLight: string;
      navbarScrolled: string;
      bgDark: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      textLighter?: string;
      borderLight?: string;
      navbarScrolled?: string;
      bgDark?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#A7F0BA',
      dark: '#A7F0BA',
    },
    secondary: {
      main: '#A7F0BA',
    },
    background: {
      default: '#021300',
      paper: '#121F12',
    },
    text: {
      primary: '#F1F5F1',
      secondary: '#A9B9A9',
    },
    action: {
      hover: 'rgba(255, 255, 255, 0.1)',
    },
    custom: {
      textLighter: 'rgba(255, 255, 255, 0.9)',
      borderLight: 'rgba(255, 255, 255, 0.1)',
      navbarScrolled: 'rgba(255, 255, 255, 0.95)',
      bgDark: '#121F12',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <div className="App">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
