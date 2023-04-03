import { useState, useCallback } from "react";
import { UserType } from "../SharedComponent/UserType";

export interface FetchDetailReturn {
  fetchdata: () => Promise<void>;
  error: boolean;
  user: UserType | null;
  loading: boolean;
}

const useFetchDetail = (url: string): FetchDetailReturn => {
  const [error, setError] = useState<boolean>(false);
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchdata = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("something");
      }
      const data = await response.json();
      setUser(data);
      console.log(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [url]);

  return { fetchdata, error, user, loading };
};

export default useFetchDetail;
