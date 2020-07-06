var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "o61qijqeuqnj9chh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "qk81o87irf8wz4oi",
  password: "pkuxwxvuu7qh75zt",
  database: "q53a4wl858842kq9"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;