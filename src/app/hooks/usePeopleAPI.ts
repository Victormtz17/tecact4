'use client';
import { useState, useEffect, useCallback } from 'react';
import { PeopleResponse, Result } from '../types/http/people.response';

export const usePeopleApi = () => {
  const [currentPerson, setCurrentPerson] = useState<Result | null>(null);
  const [personHistory, setPersonHistory] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://randomuser.me/api/');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data: PeopleResponse = await response.json();
      const person = data.results[0];
      setCurrentPerson(person);
      setPersonHistory(prevHistory => [person, ...prevHistory]);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(); // Fetch initial data on mount
  }, [fetchData]);

  return { currentPerson, personHistory, loading, error, fetchData };
};