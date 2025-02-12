# 🧠 React Quiz App 🎯

## 🌟 Overview
This is a 📚 study-purpose React Quiz 📝 that tests users on their ⚛️ React knowledge. It features a structured 🏗️ state management system using `useReducer` and interactive 🖱️ components for an engaging 🎮 quiz experience.

## 🚀 Features
- 📥 Fetches quiz ❓ questions from a local 🖥️ JSON server.
- 🔄 State management using `useReducer`.
- ⏳ Timer functionality ⏱️ for each ❓.
- 📊 Tracks user 🎯 scores and 🏆 high scores.
- 📈 Progress indicator 📊 for quiz completion.
- 🔁 Restart 🔄 functionality for replaying 🔄 the quiz.

## 🛠️ Installation

1. 📥 Clone the repository:
   ```sh
   git clone (https://github.com/Dimitriy07/the-react-quiz.git)
   cd react-quiz
   ```
2. 📦 Install dependencies:
   ```sh
   npm install
   ```
3. 🚀 Start the JSON server:
   ```sh
   npx json-server --watch data/questions.json --port 8000
   ```
4. 🎭 Start the React app:
   ```sh
   npm start
   ```

## 🏗️ Components
- **App.js**: 🎛️ Manages the main state and renders different 🎭 screens based on quiz progress.
- **Header.js**: 🏷️ Displays the quiz title.
- **Main.js**: 📦 Container for different 🎭 screens.
- **Loader.js**: ⏳ Shows a loading spinner while fetching ❓ questions.
- **Error.js**: ⚠️ Displays an error message if ❓ questions fail to load.
- **StartScreen.js**: 🎬 Initial screen prompting users to start ▶️ the quiz.
- **Question.js**: ❓ Renders the current ❓ and answer options.
- **Options.js**: 🎯 Handles answer selection ✅ and validation ❌.
- **NextButton.js**: ⏭️ Controls ❓ navigation.
- **Progress.js**: 📊 Shows quiz 📈 progress and current 🎯 score.
- **FinishScreen.js**: 🏁 Displays final 🎯 scores and allows 🔄 restarting the quiz.
- **Timer.js**: ⏱️ Implements a countdown ⏳ timer for answering ❓ questions.

## 🔄 State Management
The application uses `useReducer` to manage state with the following actions:
- 📥 `dataReceived`: Stores fetched quiz ❓ data.
- ⚠️ `dataFailed`: Handles fetch ❌ errors.
- ▶️ `start`: Begins the 🎮 quiz.
- 🎯 `newAnswer`: Updates the selected answer ✅ and 🎯 score.
- ⏭️ `nextQuestion`: Moves to the next ❓.
- 🏁 `finish`: Ends the quiz 🎮 and updates the 🏆 high score.
- 🔄 `restart`: Resets the quiz 🎮 while retaining 🏆 high scores.
- ⏳ `tick`: Decrements the ⏱️ timer.

## 🔮 Future Enhancements
- 🗂️ Add more ❓ question categories.
- 🏆 Implement a 📜 leaderboard for tracking 🏅 high scores.
- 🎨 Improve UI/UX ✨ with animations 🎬 and better 🎨 styling.
- 🛡️ Implement a 🔐 backend for user 👤 authentication and score tracking.

## 📜 License
This project is for 📚 study purposes and is open 🔓 for learning 📖 and modifications ✏️.

