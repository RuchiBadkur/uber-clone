## Backend API Documentation

- 📝 Note: The credentials and token values used here are for demonstration only.

### 🔄 User Registration Flow


```
Client
  |
  | POST /user/register
  ↓
Validation Middleware
  |— If validation fails
  ↓              ↘
Controller     Error Response (400)
  |
  |— Check existing user
  |— Hash password
  |— Save user to DB
  ↓
Generate JWT Token
  ↓
Success Response (201 Created)
  └── { token, user }
``` 


### POST `/user/register`

This endpoint allows a new user to register by providing the necessary personal details such as first name, last name (optional), email, and password. The user’s password is securely hashed and stored in the database.

---

#### ✅ Request Format

##### **Headers**
```http
Content-Type: application/json
```

##### **Body**
```json
{
  "fullname": {
    "firstname": "String",
    "lastname": "String"
  },
  "email": "String",
  "password": "String"
}
```

---

#### 🧠 Validations

- `fullname.firstname`: **Required**, minimum **3 characters**
- `email`: Must be a **valid email format**
- `password`: Minimum **6 characters**

If any validation fails, an array of error messages will be returned.

---

#### 🔁 Sample Successful Response

##### **Status Code**: `201 Created`

```json
{
  "token": "jwt-token-random-string",
  "user": {
    "_id": "unique-id-string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "unique-email-string",
    "password": "hashed-password",
    "socketId": null,
    "__v": 0
  }
}
```

---

#### ❌ Error Responses

##### **400 Bad Request** – Validation Errors

```json
{
  "errors": [
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

---

#### ⚙️ Notes

- The response includes a **JWT token** for authentication.
- Passwords are hashed using **bcrypt** before saving.
- Users must provide a **unique email** address.
- The full name is stored as an object with separate `firstname` and `lastname`.

---

#### 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **bcrypt** (for password hashing)
- **jsonwebtoken** (for token generation)
- **express-validator** (for validation)

---

#### 🔐 Security Consideration

- Passwords are **never stored in plain text**.
- Token is signed using a **secure secret key** stored in `process.env.JWT_SECRET`.




### POST `/user/login`

This endpoint allows existing users to log in by providing their registered email and password. Upon successful login, a JWT token is returned for authentication.

---

#### ✅ Request Format

##### **Headers**
```
Content-Type: application/json
```

##### **Body**
```json
{
  "email": "ruchi@example.com",
  "password": "securePassword123"
}
```

---

#### 🧠 Validations

- `email`: Must be a valid email format
- `password`: Minimum 6 characters

If validation fails, the response will contain an array of error messages with a `400 Bad Request` status.

---

#### 🔁 Sample Successful Response

##### **Status Code**: `200 OK`
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR...",
  "user": {
    "_id": "60f7c94f2f1b2c001f1d4d1a",
    "fullname": {
      "firstname": "Ruchi",
      "lastname": "Badkur"
    },
    "email": "ruchi@example.com",
    "password": "$2b$10$E.b3Im...",
    "socketId": null,
    "__v": 0
  }
}
```

---

#### ❌ Error Responses

##### **400 Bad Request** – Validation Errors
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

##### **401 Unauthorized** – Invalid Credentials
```json
{
  "message": "Invalid email or password"
}
```

---

#### ⚙️ Notes

- Passwords are checked securely using **bcrypt**
- A **JWT token** is returned for authenticated requests
- Token is signed using a **secret key** from `process.env.JWT_SECRET`



