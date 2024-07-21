"use client";
import { useState, ChangeEvent } from 'react';
import axios from 'axios';

interface UploadResponse {
  summary: string;
}

const Upload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary]: [any,any] = useState<string>('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
  
    const formData = new FormData();
    formData.append('file', file); // Ensure this matches the server's expected field name
  
    try {
      const response = await axios.post<UploadResponse>('https://codology.onrender.com/tutorial', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSummary(response.data['response']); // Set the summary received from the server
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error('Error response:', error.response);
      } else {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Upload Document</h1>
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none mb-4"
        />
        <button
          onClick={handleUpload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Upload
        </button>
        {summary && (
          <div className="mt-4">
            <h2 className="text-xl font-bold">Summary</h2>
            <p>{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
