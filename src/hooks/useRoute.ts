import { useEffect, useState } from "react";
import { Location, useLocation, useNavigate } from "react-router-dom";

function getQueryParams(location: Location) {
  const searchParams = new URLSearchParams(location.search);
  const entries = searchParams.entries();
  let result: any = {};
  for (const entry of entries) {
    const [key, value] = entry;
    result[key] = value;
  }
  return result;
}

function useQuerryString<T extends Object>(initialVallue: T) {
  const location = useLocation();
  const [qs, setQs] = useState("");
  const [params, setParams] = useState<T>(initialVallue as T);
  const url = location.pathname;
  const [currentUrl, setCurrentUrl] = useState(url);
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = getQueryParams(location);
    setQueryParams(queryParams);
    setParams(queryParams);
  }, [location.pathname]);

  const setQueryParams = (newParams: T) => {
    setParams(newParams);
    let searchParams = new URLSearchParams();
    for (let key in newParams) {
      const value = newParams[key] as string;
      if (value !== "") searchParams.append(key, value);
    }
    setQs(searchParams.toString());
    setCurrentUrl(`${url}?${searchParams.toString()}`);
    navigate(`${url}?${searchParams.toString()}`);
    return searchParams.toString();
  };

  return {
    queryString: qs,
    currentUrl,
    setQueryParams,
    params,
    setParams,
    getQueryParams,
  };
}

export default useQuerryString;
