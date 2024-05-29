import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=6000';

export const useUserClient = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMesssage] = useState('');

  const reset = () => {
    setErrorMesssage('');
    setIsLoading(true);
  };

  async function getUsers() {
    try {
      reset();
      const { data } = await axios<User[]>(API_URL, { timeout: 5000 });
      return setUsers(data);
    } catch (error) {
      const axiosError = error as AxiosError;
      setErrorMesssage(axiosError.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return { users, getUsers, isLoading, errorMessage };
};
