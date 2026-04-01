# Personal Portfolio Website

A modern, responsive, and interactive personal portfolio website built with React.js, Tailwind CSS, and Framer Motion. This project concisely showcases my skills, professional experience, latest projects, and contact information with a sleek and animated user interface.

## 🚀 Technologies Used
- **React.js** (v18): Core component-based architecture for building a dynamic UI.
- **Tailwind CSS** (v3): Utility-first CSS framework used for rapid and highly customizable UI styling across mobile and desktop devices.
- **Framer Motion**: Production-ready animation library used to create smooth interactive element transitions.
- **gh-pages**: Module configured for seamless direct deployment to GitHub Pages.

---

## 🛠️ Local Development Setup

To run this project locally on your machine for making edits, follow these steps:

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) and NPM installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/iakashrai/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   *The application will compile and open automatically in your browser at `http://localhost:3000` (or another available port).*

---

## 📦 Compiling for Production

To create an optimized production build of the React application without deploying it automatically, run:

```bash
npm run build
```

This command natively bundles the React application in production mode and optimizes the build for the best performance. The build is minified, React's developer warnings are stripped away, and the final hashed assets are cleanly dumped into a newly generated `build/` folder. You can take the contents of this folder and deploy it manually to any hosting service (Vercel, Netlify, AWS S3, etc.).

---

## 🌐 Deploying to GitHub Pages

This project is natively configured to easily deploy directly to your root domain at `https://iakashrai.github.io/`. Follow these instructions to compile and deploy your code seamlessly:

1. Ensure your `package.json` contains the correct target specifications:
   - `"homepage": "https://iakashrai.github.io"` 
   - `"deploy": "gh-pages -b main -d build -r https://github.com/iakashrai/iakashrai.github.io.git"`

2. **Run the deployment command:**
   Simply run this command from the root of the project:
   ```bash
   npm run deploy
   ```

### What this command does entirely automatically:
1. It triggers the `predeploy` script automatically, which runs `npm run build` to compile the optimized static assets into the `build/` folder.
2. It then uses the `gh-pages` module to securely push *only* the contents of the `build/` folder directly to the `main` branch of the specified `iakashrai.github.io` repository.
3. Once completed, your terminal will announce "Published", and GitHub Pages will sync the live site internally over the next 2 to 5 minutes.
