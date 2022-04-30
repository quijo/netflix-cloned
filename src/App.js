
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'

function App() {
  return (
   <div >
   <Router>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
     </Routes>
   </Router>
   </div>
  );
}

export default App;
