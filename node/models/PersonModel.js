//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const PersonModel = db.define('persons', {
     name: { type: DataTypes.STRING },
     lastname: { type: DataTypes.STRING },
     age: { type: DataTypes.INTEGER },
     country: { type: DataTypes.STRING }
 })

 export default PersonModel