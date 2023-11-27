## Resources
- [Promises](https://www.youtube.com/watch?v=DHvZLI7Db8E)
- [Async/await](https://www.youtube.com/watch?v=V_Kr9OSfDeU)
- [Fetch](https://www.youtube.com/watch?v=cuEtnrL9-H0)

## Topics
- Understanding and working with Promises in JavaScript.
- Fundamentals of APIs and their role in web development.
- Making HTTP requests using the `fetch` API and Axios.
- Simplifying asynchronous code with async/await.

## Learning Goals
By the end of this week, you should be able to:

- [ ] Explain what a Promise is in JavaScript and its three states: pending, fulfilled, and rejected.
- [ ] Understand when and how to create their own Promises in practical scenarios.
- [ ] Describe what an API is and its importance in software development, using real-world analogies.
- [ ] Demonstrate making different types of HTTP requests (GET, POST, DELETE, PUT) using `fetch` and Axios.
- [ ] Refactor promise-based code to use async/await for better readability and maintenance.

## Homework Assignment: Create a Web Application Using an External API

### Objective
Build a simple web application that fetches and displays data from a public API.

### Step-by-Step Guide

1. **Set Up Your Project**:
   - **Create a Folder**: Name it something descriptive, like `api-web-app`.
   - **Initialize Your Project** (do this step only if you're using Axios): Open your terminal, navigate to your project folder, and run `npm init -y` to create a `package.json` file.

2. **Create Necessary Files**:
   - **HTML File**: Create an `index.html` file. This will be your main page.
   - **JavaScript File**: Create a `script.js` file for your JavaScript code.
   - **CSS File** (Optional): Create a `styles.css` file for styling your application.

3. **Find a Public API**:
   - Visit websites like [public-apis/public-apis](https://github.com/public-apis/public-apis) to find a public API. Choose one that doesn’t require authentication for simplicity, like a weather or news API.

4. **Understand the API**:
   - **Read the Documentation**: Understand how to make requests to your chosen API and what kind of data it returns.
   - **Test API Requests**: Use tools like Postman or your browser to test API requests.

5. **Start Coding**:
   - **Set Up HTML Structure**: In `index.html`, create a basic structure. Include links to your `script.js` and `styles.css`.
   - **Fetch Data**: In `script.js`, write a function using `fetch` or Axios to get data from the API.
   - **Display Data**: Process and display the data in your HTML using JavaScript. Ensure that the data is presented clearly to the user.

6. **Basic Styling**:
   - Use your `styles.css` to apply basic styling.
   - **Focus on Readability**: Ensure text is easily readable.
   - **Layout**: Aim for a simple layout, with centered content and sensible margins/padding.

7. **Run and Test Your Application**:
   - Open your `index.html` in a browser to see your application in action.

8. **Document Your Code**:
   - Add comments to your JavaScript and CSS files to explain your code.

### Deliverables
Submit the following in a zip file or as a link to your GitHub repository:
- Your project folder containing `index.html`, `script.js`, and `styles.css`.
- A brief document explaining your chosen API and any challenges you faced.

Remember, the goal is to create a functional web application that interacts with an API. The design doesn't have to be elaborate, but the application should be user-friendly, and the code well-documented.

## Glossary of Key Terms

1. **API (Application Programming Interface)**: A set of rules and definitions that allows different software applications to communicate with each other, acting as an intermediary for data and functionality exchange.

2. **Promise**: An object in JavaScript that represents the eventual completion or failure of an asynchronous operation. It allows handling of the result once the operation completes, with three states: pending, fulfilled, and rejected.

3. **HTTP Request**: A message sent by a client to a server in the web, requesting actions on resources. Common types include GET, POST, DELETE, and PUT.

4. **Fetch API**: A native JavaScript API used for making network requests. It provides an easy way to fetch resources asynchronously over the network.

5. **Axios**: A popular JavaScript library used for making HTTP requests. It offers more features and a simpler syntax compared to the Fetch API.

6. **Async Function**: A function declared with the `async` keyword, automatically transforming it to return a Promise, and allowing the use of `await` within it.

7. **Await Keyword**: Used in async functions in JavaScript to pause the execution until a Promise is resolved, then resumes execution and returns the resolved value.

8. **Callback Hell**: A situation where multiple nested callback functions lead to complex and hard-to-maintain code. Often occurs in asynchronous programming without proper structure.

9. **GET Request**: An HTTP request used to retrieve data from a server, without affecting the data.

10. **POST Request**: An HTTP request used to send data to a server to create a new resource.

11. **DELETE Request**: An HTTP request used to delete a resource from a server.

12. **PUT Request**: An HTTP request used to update an existing resource on a server.