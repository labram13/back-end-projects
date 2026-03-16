# Blog Post API (NoSQL)

## Project Details

Blog post API that focus on CRUD API endpoints for a user's blog post. Allows for user registration and login with authentication for accessing user posts. Dependencies for authentication include **Bcrypt** for safely hashing passwords and **JWT** tokens stored in cookies when confirming user credentials. For more details on project deliverables, please go to Roadmap's project website [Blogging Platform API](https://roadmap.sh/projects/blogging-platform-api).

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
`cd back-end-projects/blog-post-api-nosql`

3. Run `npm install` to install dependencies. A .env file will be included with a MongoDB URI and generated token for testing. 

4. `npm run dev` to run main Express server.

5. `npm run dev2` to run authentication server. 

6. Use Postman to test out API calls.

7. Create a user with a POST to https://localhost:4000 with a raw body in JSON format. Example would be:

```
{
    "username": johndoe,
    "password": password

}
```

You should get a status 200 showing a successful registration message. 

8. To test if user has been registered, send another POST to https://localhost:4000/login with the same credentials. You should receive a status 200. If you use credentials that do not exist, you will be sent an error code. 

9. Add a new post by sending a POST to https://localhost:3000/api/post with the following body or something similar with the same keys. 

```
{
    "title": "How to make bananas",
    "content": "Plant a banana tree",
    "category": "Technology",
    "tags": ["bananas", "trees"]
}

```