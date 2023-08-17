const express = require("express");
const connection = require("./config");
const app = express();
app.use(express.json());

app.get("/", (_, resp) => {
  connection.query("Select * from users", (err, result) => {
    if (err) {
      resp.send("Something went wrong");
    } else {
      resp.send(result);
    }
  });
});

app.post("/", (req, resp) => {
  const data = req.body
  connection.query("INSERT INTO users SET ?", data, (err, result, _) => {
    if (err) {
      resp.send(err);
    } else {
      resp.send(result);
    }
  });
});

app.put("/", (req, resp) => {
  const data = req.body
  connection.query("INSERT INTO users SET ?", data, (err, result, _) => {
    if (err) {
      resp.send(err);
    } else {
      resp.send(result);
    }
  });
});

app.delete("/:id", (req, resp) => {
    connection.query("DELETE FROM users WHERE id= ?", req.params.id, (err, result, _) => {
      if (err) throw err
       else {
        resp.send(result);
      }
    });
  });

app.listen(4500);
