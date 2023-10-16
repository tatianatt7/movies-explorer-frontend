import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Landing from '../Landing';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import UserContext from '../../context/userContext';
import { KEY_JWT, KEY_MOVIES } from '../../utils/constants';
import { mainApi } from '../../utils/MainApi';

const App = () => {
  const [error, setError] = useState();
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  });
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem(KEY_JWT) || false,
  );
  const api = mainApi({ setLoggedIn });
  const [movies, setMovies] = useState(
    () => JSON.parse(localStorage.getItem(KEY_MOVIES)) || [],
  );
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await api.getProfile();
        if (user && Object.keys(user).length) {
          setCurrentUser(user);
        }
      } catch (e) {
        console.log(e);
      }
    };

    if (loggedIn) {
      checkUser();
    }
  }, [loggedIn]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Landing loggedIn={loggedIn} />} />
            <Route
              path="/signup"
              element={
                <Register
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                  api={api}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                  api={api}
                />
              }
            />

            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  component={Movies}
                  movies={movies}
                  setMovies={setMovies}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                  loggedIn={loggedIn}
                  api={api}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  component={SavedMovies}
                  movies={savedMovies}
                  setMovies={setSavedMovies}
                  loggedIn={loggedIn}
                  api={api}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  component={Profile}
                  loggedIn={loggedIn}
                  api={api}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <InfoTooltip isOpen={false} onClose={() => {}} message={error} />
        </main>
      </div>
    </UserContext.Provider>
  );
};

export default App;
