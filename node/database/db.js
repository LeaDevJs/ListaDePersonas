import {Sequelize} from 'sequelize'

const db = new Sequelize('db-personas', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})

export default db