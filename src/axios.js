import axios from 'axios';

const instance = axios.create({
     baseURL: 'https://amazon-backend-server.vercel.app'
});

export default instance;