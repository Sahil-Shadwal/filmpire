import React, { useRef } from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import useStyles from './styles';
import useAlan from './Sidebar/Alan';
import { Actors, MovieInformation, Movies, NavBar, Profile } from './index';
import { createSessionId } from '../utils';

const App = () => {
  const classes = useStyles();

  const alanBtnContainer = useRef();
  useAlan();
  const token = localStorage.getItem('request_token');
  console.log(token);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/approved?" element={<Movies />} />

          <Route exact={false} path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actor/:id" element={<Actors />} />
          <Route exact={false} path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default App;
