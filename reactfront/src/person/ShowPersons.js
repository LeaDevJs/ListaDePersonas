import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/persons/'


const CompShowPersons = () => {
    
    const [persons, setPersons] = useState([])
    useEffect( ()=>{
        getPersons()
    },[])

    //procedimineto para mostrar todos las personas
    const getPersons = async () => {
        const res = await axios.get(URI)
        setPersons(res.data)
    }

    //procedimineto para eliminar una persona
    const deletePerson = async (id) => {
       await axios.delete(`${URI}${id}`)
       getPersons()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Edad</th>
                                <th>Nacionalidad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {persons.map((person) => (
                                <tr key={person.id}>
                                    <td> { person.name } </td>
                                    <td> { person.lastname } </td>
                                    <td> { person.age } </td>
                                    <td> { person.country } </td>
                                    <td>
                                        <Link to={`/edit/${person.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deletePerson(person.id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowPersons