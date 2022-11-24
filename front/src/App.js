import './App.css';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import Crud from './components/Crud';
import Navbar from './components/Navbar';
import EditUser from './components/EditUser';

import {BrowserRouter , Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Navbar />
      <Routes>
      <Route path='/' element= {<Crud />}> </Route>
      <Route path='/all' element={<AllUsers />}></Route>
      <Route path='/add' element={<AddUser/>}></Route>
      <Route path='/edit/:id' element={<EditUser/>}></Route>




      </Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
