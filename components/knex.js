
export const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
  },
})

