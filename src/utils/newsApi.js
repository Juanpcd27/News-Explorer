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

export const savedNews = (data) => {
  const result = {};
  result.name = data.name;
  result.author = data.author;
  result.source = data.source;
  result.description = data.description;
  result.urlToImage = data.urlToImage;
  result.publishedAt = data.publishedAt;

  return result;
};
