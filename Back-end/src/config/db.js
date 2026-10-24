import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({ path: ".env.test" });

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,

  
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 5432),
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: false
  }
);

console.log({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  passwordLoaded: Boolean(process.env.DB_PASSWORD),
  passwordLength: process.env.DB_PASSWORD?.length
});

