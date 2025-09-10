import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globals.css';

// Import components
import Home from './routes/Home';
import Intro from './routes/Intro';
import Found from './routes/Found';
import Find from './routes/Find';
import MyPosts from './routes/MyPosts';
import SignIn from './routes/SignIn';
import SignupID from './routes/SignupID';
import SignupPW from './routes/SignupPW';
import SignupSchool from './routes/SignupSchool';
import FoundRegister from './routes/FoundRegister';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/found" element={<Found />} />
          <Route path="/find" element={<Find />} />
          <Route path="/myposts" element={<MyPosts />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup/id" element={<SignupID />} />
          <Route path="/signup/password" element={<SignupPW />} />
          <Route path="/signup/school" element={<SignupSchool />} />
          <Route path="/found/register" element={<FoundRegister />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
