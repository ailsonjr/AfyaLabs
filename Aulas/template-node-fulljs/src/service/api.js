import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/',
});

export const postform = axios.create({
  baseURL: 'https://webhook.site/d1f541ae-2934-42ea-8f9b-700582ec3a1f'
})
