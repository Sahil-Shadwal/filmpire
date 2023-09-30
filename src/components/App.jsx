import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Actors, MovieInformation, Movies, NavBar, Profile } from './index';
// import Actors from './Actors/actors';
// import MovieInformation from './MovieInformation/MovieInformation';
// import Movies from './Movies/Movies';
// import NavBar from './NavBar/NavBar';
// import Profile from './Profile/Profile';

const App = () => (
  <div>
    <CssBaseline />
    {/* <NavBar /> */}
    <main>
      <Routes>
        <Route path="/" element={<MovieInformation />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </main>
  </div>
);

export default App;
