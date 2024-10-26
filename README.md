Here's the updated README file incorporating your changes, including the new directory structure and detailed feature descriptions:

```markdown
# Portfolio Project

This portfolio website is built using **React**, **Material UI**, **Ant Design**, and **Express**. It showcases personal projects, social media profiles, academic background, and includes a downloadable resume. Each component has been customized for a cohesive look, with additional state management and local storage functionality.

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
├── README.md
├── backend
│   ├── package-lock.json
│   ├── package.json
│   └── src
│       ├── Routes
│       │   └── users.js
│       ├── public
│       │   └── Raj_Guragain_Resume.pdf
│       └── server.js
└── frontend
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    └── src
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── Utils
        │   ├── Constants.js
        │   └── otherDetails.js
        ├── components
        │   ├── Academics.jsx
        │   ├── Dashboard.jsx
        │   ├── Home.jsx
        │   ├── PageNotFound.jsx
        │   ├── Projects.jsx
        │   ├── Resume.jsx
        │   └── SocialProfiles.jsx
        ├── index.css
        ├── index.js
        ├── logo.svg
        ├── redux
        │   ├── slices
        │   │   └── navSlice.jsx
        │   └── store.jsx
        ├── reportWebVitals.js
        ├── resources
        │   ├── css
        │   │   ├── academics.css
        │   │   ├── breadcrumb.css
        │   │   ├── dashboard.css
        │   │   ├── home.css
        │   │   ├── projects.css
        │   │   ├── resume.css
        │   │   └── socialprofiles.css
        │   ├── fonts
        │   │   ├── ConcertOne-Regular.ttf
        │   │   └── SourceCodePro-VariableFont_wght.ttf
        │   └── images
        │       ├── C icon.png
        │       ├── backgroundImage.png
        │       ├── c++.png
        │       ├── defaultImage.jpg
        │       ├── defaultImg.jpeg
        │       ├── defaultImg.png
        │       ├── dpImage.jpeg
        │       ├── dp_image.jpeg
        │       ├── dp_image.png
        │       ├── java.png
        │       └── picture_1.jpeg
        └── setupTests.js
```

## Features

### Home Page
- Personalized greeting message with typewriter effect.
- Get in touch button for social media links.

### Social Profile Page
- Typewriter effect for displaying all social media profiles.
- Links to various social profiles.

### Projects Page
- Displays a grid of projects with descriptions, links, and an option to like.

### Academics Page
- Showcasing academic achievements.
- Added accordion and map links.

### Page Not Found Page
- Custom error page with data fetching (used as a learning exercise).

## Dependencies

### Frontend

- React
- Material UI
- Ant Design
- React Router
- Redux Toolkit
- Typewriter-effect
- Axios

### Backend

- Express
- cors
- nodemon
- dotenv

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
git clone https://github.com/sairaj2059/Portfolio_Website.git
```

Navigate to the project directory:

```bash
cd Portfolio_Website
```

Install all dependencies for both frontend and backend:

For frontend:

```bash
cd frontend
npm install
```

For backend:

```bash
cd ./backend
npm install
```

## How to Run

### Frontend

1. **Navigate to the Frontend Directory**:

   ```bash
   cd /frontend
   ```

2. **Install Dependencies**:

   Use npm to install the necessary dependencies for the frontend:

   ```bash
   npm install
   ```

3. **Start the Frontend Development Server**:

   To run the frontend application, use the following command:

   ```bash
   npm start
   ```

   This will launch the React application in your default web browser at `http://localhost:3000`.

### Backend

1. **Navigate to the Backend Directory**:

   ```bash
   cd /backend
   ```

2. **Install Dependencies**:

   Use npm to install the necessary dependencies for the backend:

   ```bash
   npm install
   ```

3. **Create a `.env` File**:

   Ensure you create a `.env` file in the backend directory to set your environment variables. Here’s an example structure:

   ```bash
   PORT=13000
   ```

4. **Start the Backend Server**:

   To run the backend application, use the following command:

   ```bash
   npm run nodemonStart
   ```

### Note

Ensure that both the frontend and backend servers are running concurrently for the application to function correctly. You may also consider using tools like `concurrently` to manage running both servers simultaneously from a single command.
```
