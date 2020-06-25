import axios from 'axios';

const apiSource = "api"

const Api = axios.create({baseURL: `http://localhost:3000/${apiSource}/`});
export default Api;
