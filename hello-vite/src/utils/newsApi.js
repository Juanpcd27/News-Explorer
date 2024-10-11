import { checkServerResponse } from "./api";
import { apiKey } from "./constants";

const baseUrlNews = "https://newsapi.org/v2/everything";

export const fetchNews = (query) => {
  const result = {
    q: query,
    apiKey: apiKey,
    from: new Date(new Date().setDate(new Date().getDate() - 7)).toISOString(),
    to: new Date().toISOString(),
    pageSize: 100,
  };

  return fetch(
    `${baseUrlNews}?q=${result.q}&apiKey=${apiKey}&from=${result.from}&to=${result.to}&pageSize=${result.pageSize}`
  )
    .then(checkServerResponse)
    .then((data) => data.articles);
};
