import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';
import ClaimPage from './routes/ClaimPage';
import AdminPage from './routes/AdminPage';
import AdminHomepage from './routes/AdminHomepage';
import NotFraudReports from './routes/NotFraudReports';
import FraudReports from './routes/FraudReports';
import AllReports from './routes/AllReports';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/service' element={<ClaimPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/allreports' element={<AllReports/>}/>
        <Route path='/notfraudreports' element={<NotFraudReports/>}/>
        <Route path='/fraudreports' element={<FraudReports/>}/>
        <Route path='/adminhomepage' element={<AdminHomepage/>}/>
      </Routes>
    </div>
  );
}
export default App;
