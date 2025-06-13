# Beckohn Industries

This project is a modern, responsive website for Beckohn Industries, showcasing the company's services, contact information, and social media presence. The website is built using React, TypeScript, and Material-UI, with a focus on performance and user experience.

## Features

- **Responsive Design**: Optimized for all devices, from mobile to desktop.
- **Modern UI**: Built with Material-UI and custom styling for a sleek, professional look.
- **Contact Information**: Easy access to email, phone, and location details.
- **Social Media Integration**: Links to Twitter, LinkedIn, GitHub, and Instagram.

## Getting Started

### Prerequisites

- Node.js (v16.x recommended for compatibility with `react-scripts`)
- npm (v8.x or later)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/beckohn-industries.git
   cd beckohn-industries
   ```

2. Install dependencies:
   ```sh
   npm install --legacy-peer-deps
   ```

3. Start the development server:
   ```sh
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Building for Production

To create a production build, run:
```sh
npm run build
```

The build artifacts will be stored in the `build/` directory. You can serve them using a static server:
```sh
npm install -g serve
serve -s build
```

## Deployment

The project is configured to be hosted at the root path (`/`). You can control this with the `homepage` field in `package.json`.

For more information on deployment, visit [https://cra.link/deployment](https://cra.link/deployment).

## License

This project is licensed under the MIT License - see the LICENSE file for details.
