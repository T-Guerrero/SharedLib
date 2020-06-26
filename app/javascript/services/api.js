import axios from 'axios';

const apiSource = "api"

const Api = axios.create({baseURL: `/${apiSource}/`});
export default Api;
