import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/persons/'

const CompEditPerson = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [age, setAge] = useState()
    const [country, setCountry] = useState('')   
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            name: name,
            lastname: lastname,
            age: age,
            country: country
        })
        navigate('/')
    }

    useEffect( ()=>{
        getPersonById()
    },[])

    const getPersonById = async () => {
        const res = await axios.get(URI+id)
        setName(res.data.name)
        setLastname(res.data.lastname)
        setAge(res.data.age)
        setCountry(res.data.country)
    }

    return (
        <div>
        <h3>Edit POST</h3>
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                    value={name}
                    onChange={ (e)=> setName(e.target.value)}
                    type="text"
                    className="form-control"                        
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Apellido</label>
                <textarea
                    value={lastname}
                    onChange={ (e)=> setLastname(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Edad</label>
                <textarea
                    value={age}
                    onChange={ (e)=> setAge(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Nacionalidad</label>
                <textarea
                    value={country}
                    onChange={ (e)=> setCountry(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>             
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
    )

}

export default CompEditPerson