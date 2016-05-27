import axios from 'axios';

const api = 'http://45.32.235.206:8000/api';

export default axios.create({baseURL: api});
