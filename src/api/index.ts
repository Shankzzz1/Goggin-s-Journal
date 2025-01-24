import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Base URL of Django backend
});

export const fetchSampleData = async () => {
  const response = await api.get('sample/');
  return response.data;
};
