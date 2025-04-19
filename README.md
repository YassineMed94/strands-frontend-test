# Strands Frontend Test

This is a frontend application built with React, Redux, TypeScript, and Vite. It displays a chart visualizing the top 10 dog breeds by image count, fetching data via an API using Axios. The app also includes features like dark mode, a loading spinner, and basic interactivity for a better user experience.
## You can visite it Live at this Link : https://6803cb3bf0bd827a608af7ae--yassine-test-frontend.netlify.app/
## Features
- **Top 10 Dog Breeds Chart**: Displays a pie chart with the top 10 dog breeds based on image counts.
- **Dark Mode**: Toggle between dark and light themes.
- **Animated Loading Spinner**: A spinner is shown while data is being fetched.
- **Responsive Layout**: The app is responsive, making it functional across different screen sizes.
- **Data Fetching with Axios**: Fetches data from the API using Axios for cleaner syntax and automatic JSON parsing.
- **Chart Rendering**: Uses the `recharts` library to render charts.

## Setup

To run the project locally, follow the steps below:

### 1. Clone the repository

```bash
git clone <repository_url>
cd <project_name>

### 2. Install dependencies
npm install

### 3.Run the development server
npm run dev

### 4.Technologies Used

React: The UI is built using React, a component-based JavaScript library.

Redux Toolkit: Manages the app’s state with Redux.

TypeScript: The app is written in TypeScript for type safety.

Vite: Used as the build tool for fast development and bundling.

Axios: For making HTTP requests to fetch breed data from the API.

Recharts: For rendering interactive charts.

Vitest: For running unit tests
