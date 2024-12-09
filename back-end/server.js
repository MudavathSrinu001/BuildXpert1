const mysql = require("mysql2");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors"); // For allowing cross-origin requests

const app = express();
app.use(bodyparser.json()); // Using JSON parsing instead of URL encoding for API consistency
app.use(cors()); // Enables cross-origin requests, adjust as needed for production

const connection = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12750775",
  password: "3reqkDG2L8",
  database: "sql12750775",
});

// Connect to the database
connection.connect((error) => {
  if (error) {
    throw error;
  } else {
    console.log("Connected to the database successfully!");
  }
});

// Handle login API
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  connection.query(
    "SELECT * FROM login WHERE username = ? AND password = ?",
    [username, password],
    (error, results) => {
      if (error) {
        console.error("Database query error:", error);
        return res
          .status(500)
          .json({ success: false, message: "An error occurred" });
      }

      if (results && results.length > 0) {
        // Success response
        res.json({ success: true, message: "Login successful" });
      } else {
        // Failure response
        res.json({ success: false, message: "Invalid username or password" });
      }
    }
  );
});

// Handle signup API
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  connection.query(
    "INSERT INTO login (username, password) VALUES (?, ?)",
    [username, password],
    (error, results) => {
      if (error) {
        console.error("Database insert error:", error);
        return res
          .status(500)
          .json({
            success: false,
            message: "An error occurred while signing up",
          });
      }
      res.json({ success: true, message: "Signup successful" });
    }
  );
});

// Endpoint to fetch designer data
app.get("/api/designers", (req, res) => {
  const query = "SELECT * FROM designer";
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.json(results);
  });
});

// Endpoint to fetch designer data
app.get("/api/cement", (req, res) => {
  const query = "SELECT * FROM cement";
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.json(results);
  });
});

// Endpoint to fetch designer data
app.get("/api/electrician", (req, res) => {
  const query = "SELECT * FROM electrician";
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.json(results);
  });
});
///////////////

// Endpoint to fetch furniture data
app.get("/api/furniture", (req, res) => {
  const query = "SELECT * FROM furniture";
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.json(results);
  });
});

// Endpoint to fetch designer data
app.get("/api/furniture", (req, res) => {
  const query = "SELECT * FROM furniture";
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.json(results);
  });
});

///////

// Endpoint to fetch designer data
app.get("/api/iron", (req, res) => {
  const query = "SELECT * FROM iron";
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.json(results);
  });
});

//////

// Endpoint to fetch designer data
app.get("/api/marbles", (req, res) => {
  const query = "SELECT * FROM marbles";
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.json(results);
  });
});

///

// Endpoint to fetch designer data
app.get("/api/plumber", (req, res) => {
  const query = "SELECT * FROM plumber";
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.json(results);
  });
});

//

// Endpoint to fetch designer data
app.get("/api/sand", (req, res) => {
  const query = "SELECT * FROM sand";
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.json(results);
  });
});
////

// Endpoint to fetch designer data
app.get("/api/tiles", (req, res) => {
  const query = "SELECT * FROM tiles";
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.json(results);
  });
});
/////

// Endpoint to fetch designer data
app.get("/api/transportation", (req, res) => {
  const query = "SELECT * FROM transportation";
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.json(results);
  });
});

/////

// Endpoint to fetch designer data
app.get("/api/workers", (req, res) => {
  const query = "SELECT * FROM workers";
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.json(results);
  });
});

////

// Endpoint to fetch designer data
app.get("/api/bricks", (req, res) => {
  const query = "SELECT * FROM bricks";
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.json(results);
  });
});

app.get("/api/painter", (req, res) => {
  const query = "SELECT * FROM painter";
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.json(results);
  });
});

// Start the server on port 5001
const port = 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
