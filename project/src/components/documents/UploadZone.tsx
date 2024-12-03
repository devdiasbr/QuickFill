import React from 'react';
import { Upload as UploadIcon } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

interface UploadZoneProps {
  onDrop: (files: File[]) => void;
}

export function UploadZone({ onDrop }: UploadZoneProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc', '.docx'],
      'image/*': ['.png', '.jpg', '.jpeg']
    }
  });

  return (
    <div 
      {...getRootProps()} 
      className={`
        border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
        transition-colors duration-200 ease-in-out
        ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}
      `}
    >
      <input {...getInputProps()} />
      <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
      <p className="mt-2 text-sm text-gray-600">
        Arraste e solte seus documentos aqui, ou clique para selecionar
      </p>
      <p className="text-xs text-gray-500 mt-1">
        PDF, Word, ou imagens (máximo 10MB)
      </p>
    </div>
  );
}