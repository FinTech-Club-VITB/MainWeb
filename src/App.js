import Home from "./components/home";
import Footer from "./components/structures/footer";
import Navbar from "./components/structures/navbar";
import Event from "./components/events";
import Team from "./components/team";
import Resources from "./components/resources";
import {Routes, Route} from 'react-router-dom'
import ScrollToTop from "./components/common/scrollToTop";
import Page404 from "./components/common/page404";
import Finance101 from "./components/events/finance101";

function App() {
  return (
    <div>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route exact element={<Home/>} path='/'/>
        <Route element={<Finance101/>} path='/events/finance101'/>
        <Route element={<Event/>} path='/events'>
          {/* <Route element={<Finance101/>} path='/events/finance101'/> */}
          {/* <Route element={<Finance101/>} path='/events/finance101'/> */}
        </Route>
        <Route element={<Team/>} path='/our-team'/>
        {/* <Route element={<Resources/>} path='/resources'/> */}
        <Route path='*' element={<Page404/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
