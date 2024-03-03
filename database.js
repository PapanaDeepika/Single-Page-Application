const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "Deepika@123",
  database: "deepika",
  max: 20,

});
pool.on("connect", () => {
  console.log("Database Successfully Connected");
});
pool.on("error", (err) => {
  console.error("error connecting to the database", err.stack);
});
module.exports = pool;