import Home from "./components/home";
import Footer from "./components/structures/footer";
import Navbar from "./components/structures/navbar";
import Event from "./components/events";
import Team from "./components/team";
import Resources from "./components/resources";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Event/>} path='/event'/>
        <Route element={<Team/>} path='/our-team'/>
        <Route element={<Resources/>} path='/resources'/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
