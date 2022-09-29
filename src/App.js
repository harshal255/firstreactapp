import './App.css';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Search from './components/Search';
import Download from './components/Download';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App text-white overflow-hidden bg-[#081730]">


      <Hero></Hero>
      <Experience></Experience>
      <Search></Search>
      <Download></Download>
      <Footer></Footer>
    </div>
  );
}

export default App;
