import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Season from './pages/Season';
import EpisodePlayer from './pages/EpisodePlayer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="season" element={<Season />} />
          <Route path="watch/:id" element={<EpisodePlayer />} />
          <Route path="contact" element={<div className="h-[50vh] flex items-center justify-center text-neutral-500">Próximamente</div>} />
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;