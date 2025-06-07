# 🛡️ User Management API with Node.js + Express

This is a secure and modular **RESTful API** built using **Node.js** and **Express.js**, focused on authentication, routing, and middleware usage. It demonstrates how to generate and validate tokens using Node's native `crypto` module, with a clear separation of **public** and **private** routes.

---

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **Native `crypto` module** for token generation
- **Custom Middleware** for authorization and route protection
- No third-party JWT library used – built from scratch logic!

---

## 🚀 Features

- 🔐 Token-based Authentication using `crypto`
- 🧱 Public and Private Route Protection
- ⚙️ Custom Middleware for Authorization
- 🧭 Clean Routing with Route Modules
- 📚 Understanding and Implementing:
  - Application-level Middleware
  - Router-level Middleware
  - Error-handling Middleware
  - Built-in Middleware

---

## 🗂️ Project Structure

```

user-management-nodeJS/
├── middlewares/
│   ├── authMiddleware.js
│   └── errorHandler.js
├── routes/
│   ├── publicRoutes.js
│   └── privateRoutes.js
├── utils/
│   └── token.js
├── app.js
└── package.json

````

---

## 🛠️ Installation & Usage

```bash
# Clone the repository
git clone https://github.com/arpitr18/user-management-nodeJS.git

# Navigate into the directory
cd user-management-nodeJS

# Install dependencies
npm install

# Run the app
node app.js
````

---

## 🔐 How Auth Works

1. A user accesses a **public route** (e.g., login/register).
2. The app uses the `crypto` module to generate a unique token.
3. The token is sent back and stored client-side.
4. The user sends the token in headers for **protected routes**.
5. A custom **middleware** checks the token and allows or denies access.

---

## 🔍 Sample Routes

### ✅ Public Route

```http
GET /api/public/info
```

### 🔒 Private Route

```http
GET /api/private/dashboard
Authorization: Bearer <your-token>
```

---

## 💡 What I Learned

* Creating REST APIs from scratch using Express
* Token-based authentication without external libraries
* Setting up and structuring a Node.js project
* Building and using middleware functions
* Handling private/public routes cleanly

---

## 🤝 Contributing

Pull requests are welcome! If you'd like to add new features or improve the security model, feel free to fork and contribute.

---

## 📃 License

This project is licensed under the MIT License.

---

> Made with 🔥 and JavaScript by [Arpit](https://github.com/arpitr18)
