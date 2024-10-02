# SoleMates - E-commerce Application

SoleMates is a fully functional e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js). This application allows users to easily browse products, manage their shopping cart, and complete purchases securely.

## Overview

### Features

- User registration and login
- Manage cart, addresses, and orders
- Update and delete cart items and addresses
- Responsive layout for optimal viewing on various devices
- Interactive lightbox gallery for product images
- Add items to cart and remove them as needed
- Secure payment processing via Stripe

## Technologies Used

- **Frontend:**
  - [React](https://reactjs.org/) - JavaScript library
  - [Tailwind CSS](https://tailwindcss.com/) - CSS framework
  - [Ionicons](https://ionicons.com) - Icons
- **Backend:**
  - [Node.js](https://nodejs.org/) - JavaScript runtime
  - [Express](https://expressjs.com/) - Node.js framework
  - [MongoDB](https://www.mongodb.com/) - NoSQL database
  - [Stripe](http://stripe.com/) - Online payment service provider
- **Deployment:**
  - [Render](https://render.com/) - Cloud Application Platform
- **State Management:**
  - [Redux Toolkit](https://redux-toolkit.js.org/) - Toolset for efficient Redux development

## Installation

To run this application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Hikmahx/solemates.git
   ```
2. Navigate to the project directory:
   ```bash
   cd solemates
   ```
3. Install the dependencies for both the client and server:
   ```bash
   cd client
   npm install
   cd ../
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the server directory and add your MongoDB connection string and Stripe secret key.

5. Start the server:
   ```bash
   cd solemates
   npm run server
   ```

6. Start the client:
   ```bash
   cd client
   npm start
   ```

## Usage

Once the application is running, navigate to `http://localhost:3000` in your browser to view the SoleMates e-commerce platform. You can register a new account, log in, browse products, and manage your shopping cart.

## Contributing

Contributions are welcome! If you have suggestions for improvements or features, please open an issue or submit a pull request.

## Author

- **GitHub:** [Syed Mahad Hussaini](https://github.com/mahadhussaini)
- **Email:** [mahadarshad214@gmail.com](mailto:mahadarshad214@gmail.com)
