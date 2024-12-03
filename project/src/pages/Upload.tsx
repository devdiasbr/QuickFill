import React, { useCallback } from 'react';
import { DocumentCard } from '@/components/documents/DocumentCard';
import { UploadZone } from '@/components/documents/UploadZone';

export function Upload() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // TODO: Implement file processing
    console.log(acceptedFiles);
  }, []);

  const documents = [
    {
      id: 'id-doc',
      title: 'RG ou CNH',
      description: 'Documento de identificação válido'
    },
    {
      id: 'address',
      title: 'Comprovante de Residência',
      description: 'Conta de luz, água ou telefone (últimos 3 meses)'
    },
    {
      id: 'contract',
      title: 'Contrato Template',
      description: 'Arquivo Word ou PDF do contrato a ser preenchido'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Upload de Documentos</h1>
      
      <UploadZone onDrop={onDrop} />

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Documentos Necessários:</h2>
        <div className="space-y-4">
          {documents.map((doc) => (
            <DocumentCard
              key={doc.id}
              title={doc.title}
              description={doc.description}
              onUpload={() => console.log(`Upload clicked for ${doc.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}