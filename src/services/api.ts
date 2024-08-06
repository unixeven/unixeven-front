import axios from 'axios';
import { handleError } from './errorHandler';
import { DataMessage, SendMailResponse } from '@/types/definitions';

const instance = axios.create({
  // baseURL: 'http://localhost:3000/api',
  baseURL: 'https://unixeven-backend.onrender.com/api',
});

export const submitContactForm = async (
  formData: DataMessage
): Promise<SendMailResponse> => {
  try {
    const { data } = await instance.post<SendMailResponse>(
      `/mail/send`,
      formData
    );

    console.log(`data:`, data);
    return data;
  } catch (error: unknown) {
    handleError(error);
    throw error;
  }
};
