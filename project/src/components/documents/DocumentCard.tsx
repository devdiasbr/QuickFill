import React from 'react';
import { Button } from '@/components/ui/button';

interface DocumentCardProps {
  title: string;
  description: string;
  onUpload: () => void;
}

export function DocumentCard({ title, description, onUpload }: DocumentCardProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <Button onClick={onUpload}>Upload</Button>
    </div>
  );
}