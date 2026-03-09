import { useState, useRef, useCallback } from 'react';

const EXPLAIN_API_URL = import.meta.env.VITE_EXPLAIN_API_URL || '/api/explain';

export function useExplanation() {
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState(null);
  const [error, setError] = useState(null);
  const cacheRef = useRef({ key: null, value: null });

  const fetchExplanation = useCallback(
    async ({ method, methodTitle, methodDescription, results, credences, budget }) => {
      // Cache hit: same method + credences combo
      const cacheKey = JSON.stringify({ method, credences });
      if (cacheRef.current.key === cacheKey && cacheRef.current.value) {
        setExplanation(cacheRef.current.value);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);
      setExplanation(null);

      try {
        const response = await fetch(EXPLAIN_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            method,
            methodTitle,
            methodDescription,
            results,
            credences,
            budget,
          }),
        });

        if (!response.ok) {
          const data = await response.json().catch(() => ({}));
          throw new Error(data.error || `Request failed (${response.status})`);
        }

        const data = await response.json();
        setExplanation(data.explanation);
        cacheRef.current = { key: cacheKey, value: data.explanation };
      } catch (err) {
        console.error('[Explain] Failed:', err);
        setError(err.message || 'Failed to generate explanation');
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const clearCache = useCallback(() => {
    cacheRef.current = { key: null, value: null };
  }, []);

  return { loading, explanation, error, fetchExplanation, clearCache };
}
