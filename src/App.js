// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Certificates from './components/Certificates/Certificates';
import Experience from './components/Experience/Experience';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ContactMe from './components/ContactMe/ContactMe';


function App() {
  return (
    <div className="app">
    <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/certificates' element={<Certificates/>}/>
        <Route path='/contactme' element={<ContactMe/>}/>
        </Routes>
  
        </BrowserRouter>
    </div>
  );
}

export default App;
