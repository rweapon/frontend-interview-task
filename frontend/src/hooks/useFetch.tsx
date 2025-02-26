import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3100";

export function useFetch<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(null);

      try {
        const response = await axios.get<T>(`${API_URL}${endpoint}`);
        setData(response.data);
      } catch (error) {
        console.error("Ошибка API:", error);
        setIsError("Ошибка загрузки данных. Попробуйте позже.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, isLoading, isError };
}
