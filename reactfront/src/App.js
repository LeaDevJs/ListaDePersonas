import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompShowPersons from './person/ShowPersons';
import CompCreatePerson from './person/CreatePerson';
import CompEditPerson from './person/EditPerson';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompShowPersons />} />
            <Route path='/create' element={ <CompCreatePerson />} />
            <Route path='/edit/:id' element={ <CompEditPerson />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
