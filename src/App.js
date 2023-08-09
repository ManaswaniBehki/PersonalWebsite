import './App.scss';
import {Routes, Route, useLocation} from "react-router-dom";
import Home from './containers/home';
import About from './containers/aboutme'
import Resume from './containers/resume'
import Skills from './containers/skills'
import Contact from './containers/contact'
import Navbar from './components/navbar';
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import particles from './utilis.js/particles';


function App() {

 

  const location = useLocation();
  console.log(location);
  // to only put partucles on home page

  const particlesInit = async(main)=>{
    // await loadFull(main)
    // console.log(main);
    await loadFull(main)
  }

  const renderparticlejsinhomepage = location.pathname === "/";


  
  return (
    <div className="App">
      {/* particles js */}

      {
        renderparticlejsinhomepage && (
          <Particles
          id="tsparticles" options={particles}
          init={particlesInit}
    
        />
        )
      }
      

    {/* /> */}
      {/* navbar */}
      <Navbar />

      

      {/* mainpage */}

      <div className='App_main-page-content'>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
