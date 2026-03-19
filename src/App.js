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
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { ROUTES } from './utils/constants';


function App() {
  return (
    <div className="app">
    <BrowserRouter>
     <ScrollToTop />
     <Navbar/>
     <Routes>
        <Route path={ROUTES.HOME} element={<Home/>}/>
        <Route path={ROUTES.SKILLS} element={<Skills/>}/>
        <Route path={ROUTES.EXPERIENCE} element={<Experience/>}/>
        <Route path={ROUTES.PROJECTS} element={<Projects/>}/>
        <Route path={ROUTES.CERTIFICATES} element={<Certificates/>}/>
        <Route path={ROUTES.CONTACT} element={<ContactMe/>}/>
        </Routes>
  
        </BrowserRouter>
    </div>
  );
}

export default App;
