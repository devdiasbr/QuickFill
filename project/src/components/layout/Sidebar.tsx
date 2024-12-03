import React from 'react';
import { FileIcon, Settings, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Sidebar() {
  const menuItems = [
    { icon: FileIcon, label: 'Documentos', path: '/' },
    { icon: Settings, label: 'Configurações', path: '/settings' },
    { icon: Users, label: 'Usuários', path: '/users' },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4">
      <div className="flex items-center space-x-2 mb-8">
        <FileIcon className="w-8 h-8" />
        <span className="text-xl font-bold">DocFlow</span>
      </div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map(({ icon: Icon, label, path }) => (
            <li key={path} className="p-2 hover:bg-gray-800 rounded">
              <Link to={path} className="flex items-center space-x-2">
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}