# 🧠 The React Quiz

Welcome to **The React Quiz**! 🚀 This is a fun and interactive quiz app built using **React** and **useReducer** for state management. It helps test your knowledge of React while showcasing component-based architecture. 🎯

## ✨ Features

- 🎭 **Dynamic Quiz Flow**: Start, answer questions, track progress, and finish with a score.
- ⏳ **Timer**: Each question has a countdown to keep things exciting! 🕰️
- 🏆 **High Score Tracking**: Compete with yourself and try to beat your best score.
- 🔄 **Restart Quiz**: Play again anytime with the restart feature.
- 📡 **Fetch Questions from API**: Questions are dynamically loaded from a local JSON server.

## 🛠️ Installation & Setup

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/react-quiz.git

2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the JSON server:
   ```sh
   npx json-server --watch data/questions.json --port 8000
   ```
4. Start the React app:
   ```sh
   npm start
   ```

## Components
- **App.js**: Manages the main state and renders different screens based on quiz progress.
- **Header.js**: Displays the quiz title.
- **Main.js**: Container for different screens.
- **Loader.js**: Shows a loading spinner while fetching questions.
- **Error.js**: Displays an error message if questions fail to load.
- **StartScreen.js**: Initial screen prompting users to start the quiz.
- **Question.js**: Renders the current question and answer options.
- **Options.js**: Handles answer selection and validation.
- **NextButton.js**: Controls question navigation.
- **Progress.js**: Shows quiz progress and current score.
- **FinishScreen.js**: Displays final scores and allows restarting the quiz.
- **Timer.js**: Implements a countdown timer for answering questions.

## State Management
The application uses `useReducer` to manage state with the following actions:
- `dataReceived`: Stores fetched quiz data.
- `dataFailed`: Handles fetch errors.
- `start`: Begins the quiz.
- `newAnswer`: Updates the selected answer and score.
- `nextQuestion`: Moves to the next question.
- `finish`: Ends the quiz and updates the high score.
- `restart`: Resets the quiz while retaining high scores.
- `tick`: Decrements the timer.

## Future Enhancements
- Add more question categories.
- Implement a leaderboard for tracking high scores.
- Improve UI/UX with animations and better styling.
- Implement a backend for user authentication and score tracking.



