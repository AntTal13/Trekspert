import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import MainPage from '../MainPage/MainPage';
import RunsPage from '../RunsPage/RunsPage';
import NavBar from '../../components/NavBar/NavBar';
import RunDetail from '../../components/RunDetail/RunDetail';
import EditRunForm from '../../components/EditRunForm/EditRunForm';
import Timer from '../Timer/Timer';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [runs, setRuns] = useState([]);

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/runs" element={<RunsPage user={user} setUser={setUser} runs={runs} setRuns={setRuns}/>} />
              <Route path="/" element={<MainPage />} />
              <Route path="/runs/:id" element={<RunDetail />} />
              <Route path="/runs/:id/edit" element={<EditRunForm user={user} runs={runs} />} />
              <Route path="/timer" element={<Timer />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
