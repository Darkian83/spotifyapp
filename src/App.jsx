import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentialsSlice } from "./store/slices/credentials.slice";
import ProtectedRoutes from "./Pages/ProtectedRoutes";
import TrackPage from "./Pages/TrackPage";
import ArtistPage from "./Pages/ArtistPage";
import PlaylistPage from "./Pages/PlaylistPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const obj = { token, username, email };
    dispatch(setCredentialsSlice(obj));
  }, []);

  return (
    <div className="principal">
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/track/:id" element={<TrackPage />} />
          <Route path="/artist/:id" element={<ArtistPage />} />
          <Route path="/playlist" element={<PlaylistPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
