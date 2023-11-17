const mysql = require('mysql');

async function connect() {
  try {
    mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "newpassword",
      database: "practice_test"
    });
    console.log("connected <3");
  } catch (error) {
    console.log("not connect database !!!!!!!");
  }
}

module.exports = { connect };
