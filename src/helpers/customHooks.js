import { useState, useEffect } from "react";

export const useFetchDatoCms = (query) => {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    setIsFetching(true);
    fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_API}`,
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  useEffect(() => {
    if (data) {
      setIsFetching(false);
    }
  }, [data]);

  return { ...data, isFetching };
};

export const useOnce = (callback) => {
  const [hasRun, setHasRun] = useState(false);
  useEffect(() => {
    if (!hasRun) {
      callback();
      setHasRun(true);
    }
  }, [callback, hasRun]);
};

export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export default useOutsideClick;
