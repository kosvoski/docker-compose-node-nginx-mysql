const express = require('express')
const mysql = require('mysql2')

const app = express()
const port = 3000

var con = mysql.createConnection({
  host: "mysql",
  user: "user",
  password: "password",
  database: "base",
  port: 3306
});

app.get('/:name', (req, res) => {
  const name = req.params.name;

  let htmlConstruct = '<h1>Full Cycle Rocks!</h1>';

  con.connect(function(err) {
    if (err) 
      throw err;

    console.log("Connected!");

    var sql = "CREATE TABLE IF NOT EXISTS people (name VARCHAR(50));";
    con.query(sql, function (err, result) {
      
      if (err) 
        throw err;
      
      console.log("Table people created");
    });
    
    if (name == 'favicon.ico')
      return;

    sql = "INSERT INTO people (name) VALUES ('" + name + "')";
    con.query(sql, function (err, result) {
      
      if (err) 
        throw err;
      
      console.log(name + " inserted");
    });

    sql = "SELECT * FROM people";
    con.query(sql, function (err, result) {
      
      if (err) 
        throw err;
      
      
      htmlConstruct += '<ol>';
      result.forEach(people => {
        htmlConstruct += '<li>' + people.name + '</li>';
      });

      htmlConstruct += '</ol>';
      res.send(htmlConstruct);
      
    });
  });

})

app.get('/', (req, res) => {
  const name = req.params.name;

  let htmlConstruct = '<h1>Full Cycle Rocks!</h1>';

  con.connect(function(err) {
    if (err) 
      throw err;

    console.log("Connected!");

    var sql = "CREATE TABLE IF NOT EXISTS people (name VARCHAR(50));";
    con.query(sql, function (err, result) {
      
      if (err) 
        throw err;
      
      console.log("Table people created");
    });
    
    sql = "SELECT * FROM people";
    con.query(sql, function (err, result) {
      
      if (err) 
        throw err;
      
      htmlConstruct += '<ol>';
      result.forEach(people => {
        htmlConstruct += '<li>' + people.name + '</li>';
      });

      htmlConstruct += '</ol>';
      res.send(htmlConstruct);
      
    });
  });

})

app.listen(port, () => {
  console.log('Server http://localhost:' + port)
})
