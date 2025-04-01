# 🎵 Music Booking API  

A RESTful API for booking music artists for events, managing artist profiles, and handling event listings.  

---

## 🚀 Overview  
This API allows users to:  

📌 Manage artist profiles (Create, Read, Update, Delete).  
🎤 List and manage events (CRUD operations).  
🎟️ Book artists for events and manage bookings.  
🔐 Secure API endpoints with authentication.  

---

## 📂 Features  
✅ **Artist Management** – Add, update, and remove artists from the platform.  
✅ **Event Listings** – Create events and assign artists.  
✅ **Booking System** – Users can book artists for events.  
✅ **MongoDB Database** – Data persistence for artists, events, and bookings.  
✅ **Authentication (JWT)** – Secure API endpoints.  
✅ **Scalable & Well-Structured Code** – Follows MVC architecture.  

---

## 🛠️ Tech Stack  

| Technology  | Usage           |
|------------|----------------|
| Node.js    | Backend runtime |
| Express.js | Web framework   |
| MongoDB    | NoSQL database  |
| Mongoose   | ORM for MongoDB |
| JWT        | Authentication  |
| Postman    | API testing     |

---

## 📜 API Documentation  
📌 **Base URL:** `http://localhost:3000/`  

### 1️⃣ User Endpoints 👤  

| Method | Endpoint        | Description |
|--------|----------------|-------------|
| POST   | `/users/signup` | Register a new user |
|        | **Body:**       |  |
|        | `{`            |  |
|        | `"email": "henry@gmail.com",` |  |
|        | `"password": "lapadula",` |  |
|        | `"name": "Henry Terry",` |  |
|        | `"role": ["artist", "host", "admin"]` |  |
|        | `}`            |  |
| POST   | `/users/login`  | Authenticate user & get token |
|        | **Body:**       |  |
|        | `{`            |  |
|        | `"email": "henry@gmail.com",` |  |
|        | `"password": "lapadula"` |  |
|        | `}`            |  |

---

### 2️⃣ Artist Endpoints 🎤  

| Method | Endpoint        | Description |
|--------|----------------|-------------|
| POST   | `/artists`      | Create an artist |
| GET    | `/artists`      | Get all artists |
| GET    | `/artists/:id`  | Get a single artist |
| PUT    | `/artists/:id`  | Update an artist |
| DELETE | `/artists/:id`  | Delete an artist |

---

### 3️⃣ Event Endpoints 🎭  

| Method | Endpoint        | Description |
|--------|----------------|-------------|
| POST   | `/events`       | Create an event |
| GET    | `/events`       | Get all events |
| GET    | `/events/:id`   | Get a single event |
| PUT    | `/events/:id`   | Update an event |
| DELETE | `/events/:id`   | Delete an event |

---

### 4️⃣ Booking Endpoints 🎟️  

| Method | Endpoint        | Description |
|--------|----------------|-------------|
| POST   | `/bookings`     | Create a booking |
| GET    | `/bookings`     | Get all bookings |
| GET    | `/bookings/:id` | Get a single booking |
| PUT    | `/bookings/:id` | Update a booking |
| DELETE | `/bookings/:id` | Delete a booking |

---

## 🔧 Installation & Setup  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/opiziepazzle/music-booking.git
cd music-booking



2. Install Dependencies
npm install


3. Set Up Environment Variables
Create a .env file and add:
MONGODB_URI=your_mongodb_connection_string
JWT_KEY=your_jwt_secret
PORT=3000


4. Run the Server
npm start


📌 Project Structure
music-booking/
app/
│── controllers/
│   ├── userController.js
│   ├── artistController.js
│   ├── eventController.js
│   ├── bookingController.js
│── models/
│   ├── userModel.js
│   ├── artistModel.js
│   ├── eventModel.js
│   ├── bookingModel.js
│── routes/
│   ├── userRoutes.js
│   ├── artistRoutes.js
│   ├── eventRoutes.js
│   ├── bookingRoutes.js
│── middleware/
│   ├── App.middleware.js
│   ├── ErrorHandler.middleware.js
│── config/
│   ├── Mongo.database.js
│── .gitignore
│── server.js
│── package.json
│── README.md




🛡️ Security & Scalability
JWT Authentication for secure API access.

MongoDB Schema Design ensures efficient data management.

Middleware for Validation & Authorization.


👨‍💻 Author
Adigun Hakeem Opeyemi
🚀 Backend Developer | Node.js | MongoDB | API Architect

Feel free to contribute, raise issues, or fork the project! 😊