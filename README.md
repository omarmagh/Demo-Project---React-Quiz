# React Quiz App

Welcome to the **React Quiz App**! This is a simple yet interactive quiz application built with React. It allows users to answer multiple-choice questions and see their results at the end of the quiz. This project is a great example of how to build a dynamic and responsive user interface using React.

[Live Demo](https://omar-quiz.vercel.app/) 

## Features

- **Interactive Quiz Interface**: Users can navigate through questions and select answers.
- **Dynamic Scoring**: The app calculates and displays the user's score at the end of the quiz.
- **Responsive Design**: The app is fully responsive and works seamlessly on all devices.
- **Customizable Questions**: Easily add, remove, or modify quiz questions in the code.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **JavaScript (ES6+)**: Modern JavaScript syntax for cleaner and more efficient code.
- **CSS**: For styling the application.
- **HTML**: For structuring the app.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/omarmagh/Demo-Project---React-Quiz.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Demo-Project---React-Quiz
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

5. **Open the app in your browser**:
   Visit `http://localhost:3000` to view the app.

## Usage

- Start the quiz by clicking the "Start Quiz" button.
- Answer each question by selecting one of the provided options.
- Navigate between questions using the "Next" and "Previous" buttons.
- Submit your answers to see your final score.

## Customizing the Quiz

To customize the quiz questions, edit the `questions.js` file (or wherever your questions are stored). Add, remove, or modify questions as needed. Make sure that the correct answer is the first one.

Example:
```javascript
const questions = [
  {
    id: "q1",
    text: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
  },
  {
    id: "q2",
    text: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Saturn"],
  },
  // Add more questions here
];
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and submit a pull request.

Please ensure your code follows the project's coding standards and includes appropriate documentation.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by various online quiz applications.
- Built with ❤️ by [Omar Maghmoumeh](https://github.com/omarmagh).

---

Feel free to explore the code, suggest improvements, or use this project as a learning resource. Happy coding! 🚀
