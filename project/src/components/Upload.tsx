import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload as UploadIcon } from 'lucide-react';
import { Button } from './ui/button';

export function Upload() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // TODO: Implement file processing
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc', '.docx'],
      'image/*': ['.png', '.jpg', '.jpeg']
    }
  });

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Upload de Documentos</h1>
      
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

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Documentos Necessários:</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
            <div>
              <h3 className="font-medium">RG ou CNH</h3>
              <p className="text-sm text-gray-500">Documento de identificação válido</p>
            </div>
            <Button>Upload</Button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
            <div>
              <h3 className="font-medium">Comprovante de Residência</h3>
              <p className="text-sm text-gray-500">Conta de luz, água ou telefone (últimos 3 meses)</p>
            </div>
            <Button>Upload</Button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
            <div>
              <h3 className="font-medium">Contrato Template</h3>
              <p className="text-sm text-gray-500">Arquivo Word ou PDF do contrato a ser preenchido</p>
            </div>
            <Button>Upload</Button>
          </div>
        </div>
      </div>
    </div>
  );
}