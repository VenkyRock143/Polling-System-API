- # Polling-System-API

This repository contains a Polling System API built using Node.js, Express, and MongoDB.

- ## Live Demo
Access the live application [here](https://polling-system-api-h92m.onrender.com).

## Folder Stucture
```sh
├── config
│   ├── mongoose.js
│
├── controllers
│   ├──home_controller.js
│   ├──options_controller.js
│   └──questions_controller.js
│
├── models
│   ├──option.js
│   └──question.js
│
├── routes
│   ├──api
│   |  ├──v1
│   |  |   └── index.js
|   |  └── index.js
│   └── index.js
│
├── views
│   ├── _home.ejs
│   └── layout.ejs
│
├── index.js
├── .gitignore
├── package.json
└── README.md

```
## Key Features
- Create and manage questions and options.
- Add votes to options.
- Delete questions and options.
- View questions and their options.

## Getting Started
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Configure environment variables in `.env`.
4. Start the server: `node index.js`.

## File Structure
- `config/`: Configuration files.
- `controllers/`: Request handlers.
- `models/`: Database models.
- `routes/`: API routes.
- `views/`: View templates.
- `index.js`: Entry point of the application.

## API Endpoints
- Create a question: `POST /api/v1/create`
- Add an option to a question: `POST /api/v1/:id/options/create`
- Delete a question: `DELETE /api/v1/:id/delete`
- View a question: `GET /api/v1/:id`
- Add a vote to an option: `POST /api/v1/options/:id/addVote`
- Delete an option: `DELETE /api/v1/:id/option/delete`

- replace the :id with option id
- ##### To delete a option
- https://polling-system-api-h92m.onrender.com/api/v1/:id/option/delete
- replace the :id with option id
