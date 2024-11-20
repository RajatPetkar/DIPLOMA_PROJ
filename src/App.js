import './App.css'
import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import LearnSign from './Pages/LearnSign';
import Navbar from './Components/Navbar';
import SignToText from './Pages/SignToText';
import TextToSign from './Pages/TextToSign';
import ChatBotEmbed from './Components/ChatBotEmb';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/text-to-sign' element={<TextToSign />} />
          <Route exact path='/sign-to-text' element={<SignToText />} />
          <Route exact path='/learn-sign' element={<LearnSign />} />
          <Route exact path='*' element={<Home />} />
        </Routes>
        <ChatBotEmbed/>
      </div>
    </Router>
  )
}

export default App;