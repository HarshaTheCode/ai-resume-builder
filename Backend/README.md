# AI Creator-Helper Backend

This is the backend for the AI Creator-Helper application. It handles user registration and provides basic API endpoints.

## Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the `Backend` directory:
    ```bash
    cd Backend
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

## Configuration

Create a `.env` file in the root of the `Backend` directory and add the following environment variables:

```
MOONGO_URI=<your-mongodb-connection-string>
PORT=<your-desired-port>
```

## Usage

To start the server, run the following command:

```bash
npm start
```

The server will start on the port specified in your `.env` file (e.g., `http://localhost:3000`).

## API Endpoints

### Root

*   **GET /**: Returns a simple message indicating the home page endpoint.

### User Routes

The following routes are available under the `/user` prefix.

*   **GET /user/**: Returns a test message for the user endpoint.

*   **POST /user/registration**: Registers a new user.

    **Request Body:**

    ```json
    {
      "username": "testuser",
      "email": "test@example.com",
      "password": "password123"
    }
    ```

    **Validation:**

    *   `email`: Must be a valid email address.
    *   `username`: Must be at least 1 character long.
    *   `password`: Must be at least 6 characters long.

    **Response:**

    *   If validation fails, it returns a JSON object with the validation errors.
    *   If the user is created successfully, it returns the message "user created".

## Dependencies

*   [dotenv](https://www.npmjs.com/package/dotenv)
*   [express](https://www.npmjs.com/package/express)
*   [express-validator](https://www.npmjs.com/package/express-validator)
*   [mongoose](https://www.npmjs.com/package/mongoose)
