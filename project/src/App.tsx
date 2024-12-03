import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Upload } from './pages/Upload';
import { Sidebar } from './components/layout/Sidebar';
import { Dashboard } from './pages/admin/Dashboard';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 bg-gray-100">
          <Routes>
            <Route path="/" element={<Upload />} />
            <Route path="/settings" element={<div>Configurações</div>} />
            <Route path="/users" element={<div>Usuários</div>} />
            <Route path="/admin" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;