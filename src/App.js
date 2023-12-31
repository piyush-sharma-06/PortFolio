import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import ContactMe from './routes/ContactMe';
import Project from './routes/Project';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import GoToTop from './components/GoToTop';


function App() {
  return (
    <div className="App overflow-x-hidden">
      <div className=''><Navbar /></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactMe />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
      </Routes>
      <GoToTop />
      <Footer />
    </div>
  );
}

export default App;
