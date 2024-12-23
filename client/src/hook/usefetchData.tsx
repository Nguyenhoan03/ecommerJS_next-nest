'use client';
import React, { useState, useEffect, useMemo, useCallback } from 'react';

interface FetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: Record<string, unknown>;
}

interface UseFetchDataResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useFetchData<T>(
  url: string,
  options: FetchOptions = {}
): UseFetchDataResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const stableOptions = useMemo(() => {
    return {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    };
  }, [options.method, options.headers, options.body]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}${url}`, {
        ...stableOptions,
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unexpected error occurred'));
    } finally {
      setLoading(false);
    }
  }, [url, stableOptions]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
}
