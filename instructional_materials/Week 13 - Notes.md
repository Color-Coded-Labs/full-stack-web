# Relational Databases and SQL

![Database Components](https://teachcomputerscience.com/wp-content/uploads/2016/12/dbase_components.png)

## Defining Relational Databases
A relational database is a type of database that stores and provides access to data points that are related to one another. Its key features include:

- **Structured Schema**: Data is organized into tables (think of them like spreadsheets), each with a defined structure or 'schema'.
- **Table-Based Organization**: Each table consists of rows and columns. Rows (or records) are individual entries, and columns (or fields) are the specific data points, like 'name', 'email', etc.

## Understanding SQL
SQL, or Structured Query Language, is the standard language for relational database management. It's used for:

- **Data Manipulation**: Adding, updating, or deleting records.
- **Data Querying**: Fetching specific data by querying the database.

SQL is essential because it provides a uniform way to interact with various relational databases, whether you're using MySQL, SQLite, or PostgreSQL.

## Core SQL Queries
The backbone of SQL lies in its queries. Here are some examples:

1. **SELECT** - Used to fetch data from a database.
   ```sql
   -- Selects all columns from the 'users' table
   SELECT * FROM users;
   
   -- Selects only the 'name' and 'email' columns from the 'users' table
   SELECT name, email FROM users;
   ```

2. **INSERT** - Adds new rows (records) to a table.
   ```sql
   -- Inserts a new record into the 'users' table
   INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');
   ```

3. **UPDATE** - Modifies existing data.
   ```sql
   -- Updates the 'email' of the user with id 1
   UPDATE users SET email = 'newemail@example.com' WHERE id = 1;
   ```

4. **DELETE** - Removes records from a table.
   ```sql
   -- Deletes the user with id 1
   DELETE FROM users WHERE id = 1;
   ```

## Database Structures: Tables, Rows, Columns, PK, and FK
Understanding the structure of a relational database is crucial:

- **Tables**: Collections of related data, like a list of users or a catalog of products.
- **Rows/Records**: Individual entries in a table. Each row in a 'users' table represents a different user.
- **Columns/Fields**: Attributes of the data. In a 'users' table, columns might include 'id', 'name', 'email', etc.
- **Primary Keys (PK)**: Unique identifiers for each row. For example, a user ID that uniquely identifies a user in the 'users' table.
- **Foreign Keys (FK)**: Columns that reference the primary key in another table, creating a link between them. For instance, an 'order' table may have a 'user_id' foreign key linking it to the 'users' table.

These components work together to create an organized and efficient way to store, retrieve, and manage data in a relational database environment. Understanding them is fundamental for anyone diving into the world of database management.

![Database Structure](https://miro.medium.com/v2/resize:fit:1200/1*wr_PNTP9fQHxXeMydaSfnQ.jpeg)

# Introduction to NoSQL Databases

## Overview of NoSQL Databases

Imagine NoSQL databases as a more free-form filing system, unlike the structured, table-based SQL approach. They come in various types, each suited to different data storage and retrieval needs:
 
- **Document**: Stores data in JSON-like documents (e.g., MongoDB). Ideal for storing data with varied structures.
- **Key-Value**: Simplest form, storing data as a collection of key-value pairs (e.g., Redis). Great for quick lookups by key.
- **Wide-Column**: Stores data in tables, rows, and dynamic columns (e.g., Cassandra). Efficient for querying large datasets.
- **Graph**: Designed for data whose relations are best represented as a graph (e.g., Neo4j). Perfect for complex hierarchies and networks.

## When to Use NoSQL Over SQL

- **Scalability**: NoSQL databases often provide better horizontal scalability, making them a good choice for applications that anticipate large-scale growth.
- **Flexibility**: NoSQL allows for a more flexible data model, which can evolve with your application's needs.
- **Speed**: Some NoSQL types (like key-value stores) offer faster data retrieval by simplifying the data model and optimizing for specific operations.

# Mongoose and MongoDB

#### 1. Setting up MongoDB Atlas
- **MongoDB Atlas** is a cloud database service for hosting MongoDB databases, known for its high availability, global scalability, and robust security features.
- **Setup Steps**:
  1. **Create an Account and Cluster**: Sign up on MongoDB Atlas and create a cluster.
  2. **Security Configuration**: Implement IP whitelisting and create database users.
  3. **Connection String**: Obtain the connection string from MongoDB Atlas for application integration.

#### 2. Understanding Mongoose Schemas and Models
- **Schema**: In Mongoose, a schema defines the structure of the data, specifying the fields and their types, default values, validators, etc. It's like a blueprint for how data is organized.
- **Model**: A Mongoose model is a wrapper on the Mongoose schema. A Mongoose schema defines the structure of the document, default values, validators, etc., whereas a model provides an interface to the database for creating, querying, updating, deleting records, etc.

#### 3. Creating a Mongoose Model in a Separate File
- **Purpose**: Models enable CRUD operations on documents within a MongoDB database.
- **User Model Example (`user.model.js`)**:
  ```javascript
  import mongoose from 'mongoose';

  const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  });

  const User = mongoose.model('User', userSchema);
  export default User;
  ```

#### 4. Setting up the Server and Connecting to MongoDB Atlas
- **Server Configuration (`server.js`)**:
  - Express server setup includes connecting to MongoDB Atlas using Mongoose.
  - Use `MONGO_URI` environment variable for the database connection string. You can replace `process.env.MONGO_URI` with the connection string given on the mongodb atlas website.
- **Server.js Code Example**:
  ```javascript
  import express from 'express';
  import mongoose from 'mongoose';
  import User from './user.model.js';

  const app = express();
  const PORT = process.env.PORT || 3000;

  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('MongoDB connected');
      app.listen(PORT, () => console.log(`App is listening to port: ${PORT}`));
    })
    .catch((err) => console.error(err));
  ```

#### 5. Integrating Models with Express Routes
- **Route to Create a User**:
  ```javascript
  router.post("/register", async (req, res) => {
    try {
      const { username, password } = req.body;
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();

      res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  ```
- **Explanation**: This route demonstrates the use of the User model to register a new user. It includes checking for existing users, hashing passwords, and saving the new user to the database.

#### Summary
These notes cover the setup of MongoDB Atlas, the creation and use of Mongoose models and schemas, the setup of an Express server, and the integration of models with Express routes for database operations. This approach facilitates a modular and clean codebase.