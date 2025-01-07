# ImagiText
ImagiText is a Software-as-a-Service (SaaS) application designed to generate images based on user-provided text prompts. This project leverages the MERN (MongoDB, Express, React, Node.js) stack and integrates a credit-based system where users receive a default of 5 free credits upon signing up. To continue generating images after exhausting the free credits, users can purchase additional credits.

## Demo
You can check out the live demo of the blog website here: [Deployed Blog Website](https://bg-gone-front.vercel.app/)

Feel free to explore, create an account, and start experimenting!

## Features
- **Image Generation**: Generate stunning images based on user-provided text prompts.
- **Authentication**: Secure user login and registration using JSON Web Tokens (JWT).
- **Credits System**: Each new user receives 5 free credits. Purchase additional credits seamlessly through Razorpay integration.
- **Real-Time Notifications**: Toast notifications powered by react-toastify.
- **Responsive UI**: Smooth and dynamic interface created using Framer Motion and Vite.

## Technologies Used

**Frontend**
- React: For building the user interface.
- React Router DOM: For client-side routing.
- React Toastify: For real-time notifications.
- Vite: For blazing-fast frontend development.
- Axios: For handling HTTP requests.
- Framer Motion: For animations and transitions.

**Backend**
- Node.js: For server-side JavaScript runtime.
- Express: For building the server and APIs.
- MongoDB: As the database solution.
- Axios: For API communication.
- Razorpay: For payment integration.
- Bcrypt: For hashing user passwords securely.
- Dotenv: For managing environment variables.
- Form-Data: For handling file uploads.
- JSON Web Token (JWT): For user authentication.
- Mongoose: For interacting with MongoDB.
- CORS: For enabling Cross-Origin Resource Sharing.

## Getting Started
Follow the instructions below to get a local copy of the project up and running.

**Prerequisites**
Ensure you have the following installed on your system:
- Node.js (v16 or above)
- MongoDB
- npm (comes with Node.js)

**Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/Dhairya-Dave-0204/ImagiText.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd ImagiText
   ```
   
3. Install dependencies for both frontend and backend:
   ```bash
   # Frontend dependencies
   cd ../client
   npm install

   # Backend dependencies
   cd ../server
   npm install
   ```

**Environment Variables**
Create a .env file in the server directory and add the following variables:

  ```bash
  PORT=5000
  MONGO_URI=<Your MongoDB Connection String>
  JWT_SECRET=<Your JWT Secret>
  RAZORPAY_KEY_ID=<Your Razorpay Key ID>
  RAZORPAY_KEY_SECRET=<Your Razorpay Key Secret>
  FRONTEND_URL=<Your Frontend URL>
```

## Usage
1. Start the backend server:
  ```bash
    cd server
    npm run start
  ``` 
2. Start the frontend development server:
  ```bash
    cd client
    npm run dev
  ```  
3. Open your browser and navigate to the frontend URL

## Folder Structure
The project is organized as follows:
```bash
ImagiText/
|-- client/           # Frontend code
|   |-- public/       # Static assets
|   |-- src/          # React components, pages, and hooks
|-- server/           # Backend code
|   |-- config/       # Configuration files (e.g., database, environment setup)
|   |-- models/       # Mongoose models
|   |-- routes/       # API routes
|   |-- controllers/  # Request handlers
|   |-- middleware/   # Utility functions (e.g., auth middleware)
```

## Credits and Payments
- **Free Credits**: Upon registration, users are automatically credited with 5 free credits.
- **Additional Credits**: Users can purchase credits through the Razorpay payment gateway. The credits are instantly added to their account upon successful payment.

## Contributing
We welcome contributions to improve ImagiText. To contribute:

1. Fork the repository.

2. Create a new branch:
  ```bash
  git checkout -b feature/YourFeatureName
```

3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
   
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```

5. Open a pull request.
