import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Upload } from '@/pages/Upload';
import { Sidebar } from '@/components/layout/Sidebar';

function App() {
  return (
    <Router basename="/document-processor-saas">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 bg-gray-100">
          <Routes>
            <Route path="/" element={<Upload />} />
            <Route path="/settings" element={<div>Configurações</div>} />
            <Route path="/users" element={<div>Usuários</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;