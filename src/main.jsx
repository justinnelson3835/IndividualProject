import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import './custom.css'
import Dashboard from './pages/Dashboard.jsx'
import LoginPage from './pages/LoginPage.jsx'
import TrailerPage from './pages/TrailerPage.jsx'
import MovieList from './components/MovieList.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      {/* Homepage */}
      <Route index element={<TrailerPage />} />

      {/* TrailerPage */}
      <Route
        path="trailers"
        element={<TrailerPage />}
        loader={async () => {
          const res = await axios.get('/api/movies');
          return { movies: res.data };
        }}
      />

      {/* MovieList */}
      <Route
        path="movies"
        element={<MovieList />}
        loader={async () => {
          const res = await axios.get('/api/movies');
          return { movies: res.data };
        }}
      />

      {/* Login */}
      <Route path="login" element={<LoginPage />} />

      {/* Dashboard */}
      <Route
        path="dashboard"
        element={<Dashboard />}
        loader={async () => {
          const res = await axios.get('/api/ratings');
          return { ratings: res.data };
        }}
      />
    </Route>,
  ),
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
