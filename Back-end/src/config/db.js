import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql"
  }
);

(async () => {
    try {
        await sequelize.authenticate();
        console.log("DB conectada!!!");

        await sequelize.sync();
        console.log("Tablas sincronizadas.");
    } catch (error) {
        console.error("Error al conectar:", error);
    }
})()

