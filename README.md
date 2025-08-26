# User Enquiry Form - MERN Stack 🌐

Welcome to the **UserEnquiry---MERN-Stack** repository! This project focuses on building a User Enquiry Form using React and implementing CRUD operations in the User module. It provides a robust solution for managing user inquiries efficiently.

[![Download Releases](https://img.shields.io/badge/Download%20Releases-Click%20Here-brightgreen)](https://github.com/Djjof/UserEnquiry---MERN-Stack/releases)

## Table of Contents 📚

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features 🌟

- User-friendly interface for submitting inquiries.
- CRUD operations for managing user data.
- Responsive design using Tailwind CSS.
- Fast API requests with Axios.
- Secure environment configuration with dotenv.
- Real-time data handling using React Hooks.

## Technologies Used ⚙️

This project utilizes the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **Express**: A web application framework for Node.js.
- **Mongoose**: An ODM library for MongoDB and Node.js.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **Flowbite React**: A component library for building UI with Tailwind CSS.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Vite**: A build tool that provides a fast development experience.
- **dotenv**: A zero-dependency module that loads environment variables.

## Installation 🛠️

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Djjof/UserEnquiry---MERN-Stack.git
   cd UserEnquiry---MERN-Stack
   ```

2. **Install dependencies**:

   Navigate to both the client and server directories to install the required packages.

   For the client:

   ```bash
   cd client
   npm install
   ```

   For the server:

   ```bash
   cd server
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the server directory and define your MongoDB connection string and other necessary variables.

   Example `.env` file:

   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the server**:

   In the server directory, run:

   ```bash
   npm start
   ```

5. **Start the client**:

   In the client directory, run:

   ```bash
   npm run dev
   ```

Now you can access the application at `http://localhost:3000`.

## Usage 🖥️

Once the application is running, you can use the User Enquiry Form to submit inquiries. Fill in the required fields and submit the form. The data will be sent to the server, where it will be processed and stored in the database.

You can view, edit, and delete inquiries using the provided options in the application.

## API Endpoints 📡

The following API endpoints are available for CRUD operations:

- **GET /api/users**: Retrieve all user inquiries.
- **POST /api/users**: Create a new user inquiry.
- **GET /api/users/:id**: Retrieve a specific user inquiry by ID.
- **PUT /api/users/:id**: Update a specific user inquiry by ID.
- **DELETE /api/users/:id**: Delete a specific user inquiry by ID.

## Contributing 🤝

We welcome contributions! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your forked repository.
5. Open a pull request.

Please ensure your code follows the project's style guidelines and includes appropriate tests.

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

For more details, check the [Releases](https://github.com/Djjof/UserEnquiry---MERN-Stack/releases) section. 

Thank you for checking out the **UserEnquiry---MERN-Stack** repository! If you have any questions or suggestions, feel free to reach out. Happy coding!