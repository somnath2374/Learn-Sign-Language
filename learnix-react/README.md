# Learn-Sign-Language React Application

This project is a React application designed to help users learn sign language through interactive lessons and quizzes. The application displays hand signs for each letter of the alphabet and quizzes users on their recognition of these signs.

## Project Structure

- **public/**: Contains static files.
  - **index.html**: The main HTML file for the React application.
  - **hand_signs/**: Directory containing images of hand signs from A to Z.

- **src/**: Contains the source code for the React application.
  - **components/**: Contains React components.
    - **HandSign.js**: Displays a hand sign image and its corresponding letter.
    - **Lesson.js**: Displays the lesson content and manages the visibility of the lesson.
    - **Quiz.js**: Handles the quiz functionality, including score tracking and user input.
    - **App.js**: The main entry point for the application, managing routing between components.
  - **App.css**: CSS styles for the application.
  - **index.css**: Global CSS styles.
  - **index.js**: Entry point for the React application.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:
   ```
   cd learnix-react
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Start the development server**:
   ```
   npm start
   ```

5. **Open your browser** and go to `http://localhost:3000` to view the application.

## Features

- Interactive lessons to learn the alphabet in sign language.
- A quiz to test recognition of hand signs.
- Responsive design for accessibility on various devices.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.