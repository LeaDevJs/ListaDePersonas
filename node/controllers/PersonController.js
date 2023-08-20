//importamos el Modelo
import PersonModel from "../models/PersonModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllPersons = async (req, res) => {
    try {
        const persons = await PersonModel.findAll()
        res.json(persons)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getPerson = async (req, res) => {
        try {
            const person = await PersonModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(person[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un registro
export const createPerson = async (req, res) => {
    try {
       await PersonModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message,
            "error":"error"
        } )
    }
}
//Actualizar un registro
export const updatePerson = async (req, res) => {
    try {
        await PersonModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un registro
export const deletePerson = async (req, res) => {
    try {
        await PersonModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}