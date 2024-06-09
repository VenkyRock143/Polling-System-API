# Polling System API

## Features

- Created index.js and imported required depedencies like       express,ejs,mongoose,dotnev to secure sensitive files
- Then Created Required routes,controllers,configs,models and views

## Installation

Polling System API requires [Node.js]to run.

Install the dependencies and start the server.

```sh
npm i express
npm i ejs
npm i mongoose
npm i dotnenv
node index.js
```
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

### Link
- #### https://polling-system-api-h92m.onrender.com

POSTMAN
 - ### In this Polling System API App only API as been designed please open the POSTMAN and do below actions to run the APIs
 - #### This are question routes
- ##### To create a question
- https://polling-system-api-h92m.onrender.com/api/v1/create
- Below the send request form.Select body then select raw then set type as JSON to take JSON as input enter the question for title and id with (for example 1,2..etc)
- ##### To add a option to question
- https://polling-system-api-h92m.onrender.com/api/v1/:id/options/create
- Below the send request form.Select body then select raw then set type as JSON to take JSON as input enter the option for text.replace the :id with Question id
- ##### To delete a question
- https://polling-system-api-h92m.onrender.com/api/v1/:id/delete
- replace the :id with Question id
- ##### To view a question
- https://polling-system-api-h92m.onrender.com/api/v1/:id
- replace the :id with Question id

- #### This are option routes
- ##### To add a vote to option
- https://polling-system-api-h92m.onrender.com/api/v1/options/:id/addVote

- # Polling-System-API

This repository contains a Polling System API built using Node.js, Express, and MongoDB.

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

For more details, visit the [GitHub repository](https://github.com/VenkyRock143/Polling-System-API).

- replace the :id with option id
- ##### To delete a option
- https://polling-system-api-h92m.onrender.com/api/v1/:id/option/delete
- replace the :id with option id
