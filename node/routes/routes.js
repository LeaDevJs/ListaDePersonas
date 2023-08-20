import express from 'express'
import { getAllPersons, getPerson, createPerson, updatePerson, deletePerson } from '../controllers/PersonController.js'
const router = express.Router()

router.get('/', getAllPersons)
router.get('/:id', getPerson)
router.post('/', createPerson)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson)

export default router
