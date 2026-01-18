
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import CreateDeal from './screens/CreateDeal';
import CommunityHub from './screens/CommunityHub';
import ChallengeDetails from './screens/ChallengeDetails';
import UploadProof from './screens/UploadProof';
import Profile from './screens/Profile';
import LockScreen from './screens/LockScreen';
import Ranking from './screens/Ranking';
import { storage } from './services/storage';
import { User, Challenge } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User>(storage.getUser());
  const [challenges, setChallenges] = useState<Challenge[]>(storage.getChallenges());

  useEffect(() => {
    const interval = setInterval(() => {
      setUser(storage.getUser());
      setChallenges(storage.getChallenges());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const refreshData = () => {
    setUser(storage.getUser());
    setChallenges(storage.getChallenges());
  };

  return (
    <Router>
      <div className="max-w-md mx-auto min-h-screen bg-background-light dark:bg-background-dark shadow-2xl relative overflow-hidden">
        <Routes>
          <Route path="/" element={<Dashboard user={user} challenges={challenges} />} />
          <Route path="/lockscreen" element={<LockScreen user={user} challenges={challenges} />} />
          <Route path="/create-deal" element={<CreateDeal onCreated={refreshData} />} />
          <Route path="/community" element={<CommunityHub />} />
          <Route path="/ranking" element={<Ranking user={user} />} />
          <Route path="/challenge-details/:id" element={<ChallengeDetails challenges={challenges} />} />
          <Route path="/upload-proof" element={<UploadProof challenges={challenges} onUploaded={refreshData} />} />
          <Route path="/profile" element={<Profile user={user} challenges={challenges} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
