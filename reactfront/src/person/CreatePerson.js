import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/persons/'

const CompCreatePerson = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [age, setAge] = useState()
    const [country, setCountry] = useState('')

    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {name: name, lastname:lastname, age:age, country:country})
        navigate('/')
    }   

    return (
        <div>
           <h3>Create POST</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={name}
                        onChange={ (e)=> setName(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>Apellido</label>
                    <textarea
                        value={lastname}
                        onChange={ (e)=> setLastname(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>
                 <div className='mb-3'>
                     <label className='form-label'>Edad</label>
                    <textarea
                        value={age}
                        onChange={ (e)=> setAge(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>
                 <div className='mb-3'>
                     <label className='form-label'>Nacionalidad</label>
                    <textarea
                        value={country}
                        onChange={ (e)=> setCountry(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>    
                 <button type='submit' className='btn btn-primary'>Store</button>                  
           </form>
        </div>
    )
}

export default CompCreatePerson