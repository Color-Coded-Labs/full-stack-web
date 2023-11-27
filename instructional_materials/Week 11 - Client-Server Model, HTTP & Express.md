### Resources
- [APIs](https://www.youtube.com/watch?v=tgbRY96q-KM)
- [Axios](https://www.youtube.com/watch?v=qM4G1Ai2ZpE)
- [Express](https://www.youtube.com/watch?v=SccSCuHhOw0)

### Topics
- Introduction to Express and its role in web application development.
- Basics of setting up a server with Express in Node.js.
- Understanding Express routing and handling different HTTP requests.
- Introduction to middleware in Express and its various uses.

### Learning Goals
By the end of this week, you should be able to:

- [ ] Set up a basic Express server and understand its structure.
- [ ] Create routes in Express to handle different HTTP methods like GET, POST, etc.
- [ ] Utilize middleware in Express for tasks such as logging requests, parsing request bodies, and more.
- [ ] Understand how Express integrates into the client-server model and facilitates web application development.

### Homework Assignment: Integrating External API with Express Server Using Axios

#### Objective
Build an Express server that interacts with an external API using Axios. Create GET and POST routes in your server that make requests to the chosen external API and return the data.

#### Step-by-Step Guide

1. **Project Initialization**:
   - If starting a new project, create a new folder and initialize a Node.js project with `npm init`.
   - Install Express using the command `npm install express`.

2. **Setting Up the Express Server**:
   - Create a file for your server, such as `server.js`.
   - In `server.js`, set up a basic Express server.

3. **Installing Axios**:
   - Run `npm install axios` to add Axios to your project. This will be used to make HTTP requests to the external API.

4. **Creating Express Routes**:
   - Define a GET route in your Express server to fetch data from the external API using Axios and return it to the client.
   - Define a POST route to submit data to the external API and return the response.

5. **Client-Side Integration**:
   - Adjust your frontend application to make requests to your new Express server instead of directly to the external API.

6. **Testing the Server**:
   - Use tools like Postman or your frontend application to test the GET and POST routes.
   - Ensure that your server correctly handles requests and responses to and from the external API.

#### Deliverables
Submit the following:
- Your project folder containing the `server.js` file and any other relevant files.

---

### Glossary of Key Terms
1. **Client-Server Model**: A computing structure that divides tasks between service providers (servers) and service requesters (clients).
2. **Express**: A minimal and flexible Node.js web application framework used for building web applications and APIs.
3. **Middleware**: Functions in Express that have access to the request and response objects, used to modify or analyze data.
4. **Routing**: The process of defining how an application responds to client requests to specific endpoints.
5. **express.json()**: A middleware in Express used to parse incoming requests with JSON payloads.
6. **HTTP Methods**: Set of request methods to indicate the desired action to be performed, such as GET, POST, PUT, and DELETE.
7. **API (Application Programming Interface)**: A set of rules and definitions for building and interacting with software applications, facilitating data exchange.
8. **Axios**: A JavaScript library used for making HTTP requests from node.js or XMLHttpRequests from the browser.

---
