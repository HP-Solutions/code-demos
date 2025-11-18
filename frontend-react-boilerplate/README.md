# React Frontend Boilerplate

_The purpose of this repo is to help guide new devs get set up on their projects. My recommendation is to try and set up your project on your own, then check out this repo if you are having any problems or if you'd like to verify your work._

## Recommended Steps

### 1. Decide on a build tool to use

I recommend using [vite](https://vite.dev/guide/)

```
npm create vite@latest
```

- Project name: enter your project name
- Select a framework: React
- Select a variant: select whichever variant fits your needs. For this example I chose Typescript
- Then press enter through the rest of the steps

### 2. Folder structure

- I recommend this structure as a baseline standard. Feel free to customize this folder structure however you'd like
- Personally, I like to separate my React component hierarchy in three tiers - Pages, Sections, and Components
- If your project includes typescript, use `ts` and `tsx`, not `js` and `jsx`

Example:

```
src/
├── assets/              # Static files: images, fonts, icons
│   ├── images/
│   └── fonts/
│
├── components/          # Reusable UI components
│   ├── common/          # Buttons, inputs, modals, etc.
│   ├── layout/          # Header, Footer, Sidebar, Navbar
│   └── ui/              # Atomic design: atoms, molecules, organisms (optional/tailwind stuff)
│
├── constants/           # App-wide constants (optional)
│    └── constants.js
│
├── pages/               # Route-level page components
│   ├── Home
|   |     ├── components/
|   |     ├── sections/
|   |     └── Home.jsx
│   └── Profile
|         ├── components/
|         ├── sections/
|         └── Profile.jsx
|
├── assets/              # Static files: images, fonts, icons
│   ├── images/
│   └── fonts/
│
├── hooks/               # Custom React hooks
│   ├── useAuth.js
│   └── useFetch.js
│
├── api/                 # API calls, axios/fetch wrappers
│   ├── api.js
│   └── apiHelpers.js
│
├── utils/               # Helper functions, formatters, validators
│   ├── formatDate.js
│   └── validators.js
│
├── context/             # React Context providers
│   └── AuthContext.jsx
│
├── styles/              # Global styles, CSS/SCSS modules, theme
│   ├── globals.css
│   └── theme.js
│
├── App.jsx              # Main app wrapper
├── main.jsx             # Entry point (React 18+ with createRoot)
└── index.html           # HTML template
```

### 3. Setup Routing with [React Router](https://reactrouter.com/start/declarative/installation)

### 4. Layout components

- Create header / footer components
- Add them to App.tsx to keep them anchored to the top and bottom, respectively

_Example App.tsx_

```js
import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header /> /* <- put your layout components outside of <Routes>*/
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
```

### 5. Choose a styling strategy

- vanilla CSS
- [CSS Modules](https://github.com/css-modules/css-modules)
- [TailwindCSS](https://tailwindcss.com/)

### 6. Install all other NPM packages needed

```
npm install <INSERT_PACKAGE_NAME>
```

## Other technologies that enhance your dev experience

_TODO: create new branches and build further to demonstrate all listed setups below_

- UI Library - (e.g. https://ui.shadcn.com/)
- State management - (e.g. https://zustand.docs.pmnd.rs/getting-started/introduction)
- Enhanced data-fetching (e.g. https://swr.vercel.app/)
