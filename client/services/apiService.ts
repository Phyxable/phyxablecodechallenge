import axios from 'axios';
import { API_BASE_URL } from '@env';

export const getBooks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books`);
    return response.data;
  } catch (err: any) {
    throw err
  }
};
