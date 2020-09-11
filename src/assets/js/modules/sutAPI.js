import Axios from 'axios';
import { apiURL, env } from './env';

const sutAPI = Axios.create({
	baseURL: `${apiURL}${env}`,
});

export default sutAPI;
