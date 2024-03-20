# Book Status Manager

> A JavaScript application to manage the status of books in a library.

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- 📚 Displays the status of books (shelf, reserved, overdue, checked out) with corresponding colors
- ⚙️ Enables or disables buttons (reserve, check out, check in) based on the book's status

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository or download the project files.
2. Open the `index.html` file in a web browser.
3. The application will load, displaying the book status and buttons.

## File Structure

- `index.html`: The HTML file that contains the structure of the web page and book elements.
- `index.js`: The JavaScript file that contains the logic for managing book status and button states.

## How It Works

The `index.js` file contains a `STATUS_MAP` object that defines the possible book statuses and their corresponding properties, such as color, ability to reserve, check out, or check in.

The script selects the necessary HTML elements (status text, reserve button, check out button, and check in button) for each book using `document.querySelector`.

For each book, the script applies the following logic:

1. Sets the color of the check-in button to an empty string.
2. Sets the color of the status text based on the book's status from the `STATUS_MAP`.
3. Disables or enables the reserve, check out, and check in buttons based on the book's status and the corresponding properties in the `STATUS_MAP`.

This logic ensures that the user interface reflects the current status of each book and only allows valid actions based on that status.

## Contributing

Contributions are welcome! 🎉 If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

