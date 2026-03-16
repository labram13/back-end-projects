# Blog Post API (SQL)

## Project Details

Similar to our Blog Post API (NoSQL) but with PostgreSQL instead to practice SQL queries. This includes creating SQL scripts in DBeaver, where our PostgreSQL is hosted, to create the initial database and schema's for each table. As such, user registration has not been implemented as the focus is to get familiar with integrating SQL databases with our Express frameworking when making API calls. For more details on project deliverables, please go to Roadmap's website [Personal Blog](https://roadmap.sh/projects/personal-blog)

## Tech Stack & Dependencies
- Express
- Node.js
- PostgreSQL
- ps library

## Run locally

1. Open device terminal and clone github repo using the following command:

`git clone https://github.com/labram13/back-end-projects.git`

2. Navigate to clone repo using:
`cd back-end-projects/blog-post-api-sql`

3. Run `npm install` to install dependencies. A .env file will be included with PostgreSQL credentials to connect to the database.

4. `npm run dev` to run main Express server.