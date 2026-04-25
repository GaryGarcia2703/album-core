import { DataTypes } from "sequelize" 
import { sequelize } from "../config/db.js"

export const Album = sequelize.define("Album" , {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER
    },
    artist: {
        type: DataTypes.STRING,
    }
})