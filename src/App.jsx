// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import FindScholarship from './pages/FindScholarship';
import Dashboard from './pages/Dashboard';
import Help from './pages/Help';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Apply from './pages/Apply';
import ViewDetails from './pages/ViewDetails';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-scholarship" element={<FindScholarship />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/help" element={<Help />} />
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/view-details" element={<ViewDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
