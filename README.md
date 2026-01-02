**Duck Backend
**
Duck is a **Node.js + Express** backend API built with a strong focus on **Clean Architecture**, **Single Responsibility Principle (SRP)**, and long-term scalability.

The project follows clear separation of concerns and is structured to be production-ready.

---

**Features**

- RESTful API structure
- Clean & scalable architecture
- Centralized error handling
- Winston-based logging
- MongoDB integration
- Environment variables support
- ES Modules
- Production-ready setup

**Project Structure
**
src/
├── index.js              # Application entry point (server startup)
├── app.controller.js     # App bootstrap (middlewares & routes)
├── routes/
│   ├── index.js          # Routes registry
│   ├── booking.routes.js
│   ├── user.routes.js
│   └── resources.routes.js
├── db/
│   └── connection.js     # Database connection
├── middleware/
│   └── error.middleware.js
├── utils/
│   └── logger.js         # Winston logger
└── config/
