import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Tracks = sequelize.define("Track", {
    albumId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    trackNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
});