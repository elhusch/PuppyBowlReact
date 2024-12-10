import './App.css';
import React from 'react';
import AllPlayers from './Components/AllPlayers';
import SinglePlayer from './Components/SinglePlayer';
import NewPlayerForm from './Components/NewPlayerForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/new-player" element={<NewPlayerForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;