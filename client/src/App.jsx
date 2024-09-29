import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/shared/Navbar.jsx';
import Login from './components/auth/Login.jsx';
import Signup from "./components/auth/Signup.jsx"
import Home from './components/Home.jsx';
import Jobs from './components/Jobs.jsx';
import Browse from './components/Browse.jsx';
import Profile from './components/Profile.jsx';
import JobDescription from './components/JobDescription.jsx';
import EditProfileForm from "./components/EditProfileForm.jsx"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/browse" element={<Browse/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/edit-profile" element={<EditProfileForm/>} />
        <Route path="/description/:id" element={<JobDescription/>} />
      </Routes>
    </Router>
  );
}

export default App;
