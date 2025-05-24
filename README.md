# Hakam's Portfolio

This is a 3D portfolio website built with React, Vite, Three.js, and Tailwind CSS. It showcases my projects, experience, and skills as a software developer.

## Features

- Interactive 3D models using Three.js and @react-three/fiber
- Responsive design with Tailwind CSS
- Contact form with EmailJS integration
- Project and experience showcase

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/harfy345/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Development

To start the development server:
```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Linting

To lint the code:
```sh
npm run lint
```

### Building for Production

To build the project for production:
```sh
npm run build
```

### Preview Production Build

To preview the production build locally:
```sh
npm run preview
```

## Deployment

This project is configured to deploy to GitHub Pages at [https://harfy345.github.io/portfolio](https://harfy345.github.io/portfolio).

To deploy manually:

```sh
npm run build
npm run deploy
```

This will build the project and push the `build` directory to the `gh-pages` branch.

### GitHub Actions

Deployment is also automated via GitHub Actions. On every push to the `main` branch, the site will be built and deployed automatically.

## Project Structure

- `src/` - Source code (components, assets, styles, etc.)
- `public/` - Static assets (3D models, images)
- `.github/workflows/` - GitHub Actions workflows for deployment

## License

3D models used in this project are licensed under CC-BY-4.0. See the `public/planet/license.txt` and `public/desktop_pc/license.txt` for details.

---

Built with ❤️ by Hakam Almotlak