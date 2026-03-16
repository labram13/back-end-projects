# Todo List API (NoSQL)

## Project Details

Todo list API that focus on CRUD API endpoints for a user's todo list. Allows for user registration and login with authentication for accessing user posts. Dependencies for authentication include **Bcrypt** for safely hashing passwords and **JWT** tokens stored in cookies when confirming user credentials. For more details on project deliverables, please go to Roadmap's project website [Todo List API](https://roadmap.sh/projects/todo-list-api).

## Tech Stack & Dependencies
- Express
- Node.js
- JWT Tokens
- Bcrypt (Hash Passwords)
- MongoDB (NoSQL Database)
- Dotenv

## Run locally

1. Open device terminal and clone github repo using the following command:

`git clone https://github.com/labram13/back-end-projects.git`

2. Navigate to clone repo using:
`cd back-end-projects/todo-api-nosql`

3. Run `npm install` to install dependencies. A .env file will be included with a MongoDB URI and generated token for testing. 

4. `npm run dev` to run main Express server.

5. Run Postman to test API calls. 

6. To register a new user, send POST to https://localhost:3000/register:

```
{
    "username": "john",
    "email": "john@gmail.com",
    "password": "password"
}
```

7. To login as a registered user, send POST to https://localhost:3000/login:

```
{
    "username": "john",
    "password": "password"
}
```
8. To add a todo item, send POST to https://localhost:3000/api/todos: 

```
{
    "title": "groceries",
    "description": "buy bananas"
}
```

9. To update a todo item, enter a todo item's id as a url parameter https://localhost:3000/api/todos/{todoid}.

```
{
    "title": "groceries",
    "description": "buy bananas"
}
```

10. Delete a todo item using a todo's id as a url paramater https://localhost:3000/api/todos/{todoid}

11. To test pagination feature, send GET request to https://localhost:3000/api/todos?page={page number}&limit={number of items}. Replace desired page number and number of items within the designated curly braces. 