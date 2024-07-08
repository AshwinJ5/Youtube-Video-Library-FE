import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import LandingPage from './Pages/LandingPage'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Routes, Route} from 'react-router-dom'
import WatchHistory from './Pages/WatchHistory';
import '../src/bootstrap.min.css'
import Home from './Pages/Home';

function App() {

  return (
    <>
   <Header/>
    
    <Routes>
      <Route path={'/'} element={<LandingPage/>}/>
      <Route path={'/watchhistory'} element={<WatchHistory/>}/>
      <Route path={'/home'} element={<Home/>}/>
    </Routes>

   <Footer/>
    </>
  )
}

export default App
