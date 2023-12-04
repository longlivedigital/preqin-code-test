import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Method } from "../types/Method";
import ls from "local-storage";

const useFetch = ({
  url,
  method = Method.GET,
  body = null,
  query = null,
  headers = null,
  autoFetch = true,
}: {
  url?: string;
  method?: Method;
  body?: any | null;
  query?: any | null;
  headers?: any | null;
  autoFetch?: boolean;
}) => {
  const [data, setdata] = useState<any | null>(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const getData = () => {
    setloading(true);
    axios({
      method,
      url,
      data: body,
      params: query,
      headers: {
        Authorization: `Bearer ${ls("accessToken")}`,
        ...headers,
      },
    })
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    if (autoFetch) getData();
  }, [method, url, body, headers]);

  // fetchData can be called from user interaction as opposed to on load
  const fetchData = ({
    url,
    body = null,
    query = null,
    headers = null,
  }: {
    url?: string;
    body?: any | null;
    query?: any | null;
    headers?: any | null;
  }) => {
    setloading(true);
    axios({
      method,
      url,
      data: body,
      params: query,
      headers: {
        Authorization: `Bearer ${ls("accessToken")}`,
        ...headers,
      },
    })
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  return { data, loading, error, fetchData };
};

export default useFetch;
