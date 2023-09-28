import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Landing from '../Landing';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';

const App = () => {
  const location = useLocation();
  const [error, setError] = useState();
  const loggedIn = ({ pathname }) => Boolean(pathname !== '/');
  const includeHeader = ({ pathname }) =>
    Boolean(['/', '/movies', '/saved-movies', '/profile'].includes(pathname));
  const includeFooter = ({ pathname }) =>
    Boolean(['/', '/movies', '/saved-movies'].includes(pathname));

  return (
    <div className="App">
      {includeHeader(location) ? <Header loggedIn={loggedIn(location)} /> : ''}
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <InfoTooltip isOpen={false} onClose={() => {}} message={error} />
      </main>
      {includeFooter(location) ? <Footer /> : ''}
    </div>
  );
};

export default App;
