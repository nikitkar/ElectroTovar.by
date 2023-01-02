import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  port: process.env.PORT_BD,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
});

db.connect((err) => {
  if (err)
    return console.log("Error connection to the MySQL server: " + err.message);
  else
    return console.log(
      "The connection to the MySQL server has been successfully established"
    );
});

export { db };
