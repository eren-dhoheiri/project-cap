import axios from 'axios';

const baseURL = 'https://5f1d81b639d95a00169540a4.mockapi.io/';

const mockApi = axios.create({
  baseURL: String(baseURL)
});

export default mockApi;
