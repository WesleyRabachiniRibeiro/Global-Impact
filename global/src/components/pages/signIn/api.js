import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:8080/BetterDays/rest'
});

export default api