import { useState, useCallback } from "react";

export interface FetchUsersReturn {
  fetchdata: () => Promise<void>;
  error: boolean;
  loading: boolean;
}

const useFetchUsers = (url: string): FetchUsersReturn => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const localStorageKey = "users";

  const fetchdata = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("something");
      }
      const data = await response.json();
      localStorage.setItem(localStorageKey, JSON.stringify(data));
      console.log(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [url]);

  return { fetchdata, error, loading };
};

export default useFetchUsers;

// const apiUrl =
//   "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

// useEffect(() => {
//   const fetchUsers = async () => {
//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       localStorage.setItem(localStorageKey, JSON.stringify(data));
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchUsers();
// }, []);
