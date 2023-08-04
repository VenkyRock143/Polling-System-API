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
│      ├──v1
│          └── index.js
|      └── index.js
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
