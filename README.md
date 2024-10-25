# Portfolio Project

This portfolio website is built using **React**, **Material UI**, **Joy UI**, and **Ant Design**. It showcases personal projects, social media profiles, academic background, and includes a downloadable resume. Each component has been customized for a cohesive look, with additional state management and local storage functionality.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Folder Structure](#folder-structure)
3. [Features](#features)
4. [Dependencies](#dependencies)
5. [Scripts](#scripts)
6. [Installation](#installation)
7. [How to Run](#how-to-run)

## Project Overview

This portfolio highlights various personal projects, social links, and academic achievements. The application uses **Redux** to manage the state of the bottom navigation bar, and local storage to save the selected item within the navigation. Components from **Material UI**, **Joy UI**, and **Ant Design** have been customized with the `sx` property to achieve a consistent design. The homepage features a typewriter effect, while **React Router** manages page navigation. Additionally, **Axios** is used for API calls, particularly on the 404 page as a learning exercise. All other data is sourced from a `Constants.js` file within the Utils directory.

## Folder Structure

```bash
root/
│
├── public/
│   ├── index.html
│   ├── Karthikeya_Bhamidipati_Resume.pdf
│   ├── LOGO.jpeg
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Academics.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   │   ├── PageNotFound.jsx
│   │   ├── Profile.jsx
│   │   └── Projects.jsx
│   ├── redux/
│   │   ├── slices/
│   │   │   └── navSlice.js
│   │   └── store.js
│   ├── resources/
│   │   ├── css/
│   │   │   ├── academics.css
│   │   │   ├── dashboard.css
│   │   │   ├── home.css
│   │   │   ├── profile.css
│   │   │   ├── projects.css
│   │   │   └── shared.css
│   │   └── images/
│   │       └── projects/
│   ├── Utils/
│   │   └── Constants.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Features

### Home Page
- Personalized greeting message with typewriter effect
- Resume download button

### Profile Page
- Links to various social profiles

### Projects Page
- Displays a grid of projects with descriptions and links

### Academics Page
- Timeline showcasing educational achievements

### 404 Page
- Custom error page with data fetching (used as a learning exercise)

## Dependencies

- React
- Material UI
- Joy UI
- Ant Design
- React Router
- Redux Toolkit
- Typewriter-effect
- Axios

## Scripts

Start the development server:

```bash
npm start
```

Build the app for production:

```bash
npm run build
```

Run tests:

```bash
npm run test
```

Check code quality:

```bash
npm run lint
```

## Installation

Clone this repository:

```bash
git clone https://github.com/karthikeya-bhamidipati/PorfolioProject.git
```

Navigate to the project directory:

```bash
cd PorfolioProject
```

Install all dependencies:

```bash
npm install
```

## How to Run

After completing installation, run the project locally with:

```bash
npm start
```

This will launch the application on your local server, allowing you to view the portfolio website.