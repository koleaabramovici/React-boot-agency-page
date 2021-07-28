// import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Services from './pages/Services';
import Portofolio from './pages/Portofolio';
import About from './pages/About';
import Team from './pages/Team';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import PortofolioModal from './components/portofolio/PortofolioModal';
// import PortofolioMap from './components/PortofolioMap';

function App() {
  return (
    <>
     <Nav />
     <Header/>
     <Services/>
     <Portofolio/>
     <PortofolioModal/>
     <About/>
     <Team/>
     <Clients/>
     <Contact/>
     <Footer/>
     

    </>
  )
  
}

export default App;
