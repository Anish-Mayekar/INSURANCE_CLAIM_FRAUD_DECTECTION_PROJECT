import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';
import ClaimPage from './routes/ClaimPage';
import AdminPage from './routes/AdminPage';





function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/service' element={<ClaimPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
      </Routes>
      
    </div>
  );
}
export default App;
