import axios from 'axios';
import { apiURL, env } from './env';

const sutAPI = axios.create({
	baseURL: `${apiURL}${env}`,
});

export default sutAPI;

// Exemplo de chamada GET para API - sutAPI.get(endpoint, options)
// sutAPI
// 	.get(`/plan/`, {
// 		headers: {
// 			token: 'Colocar Token Aqui',
// 		},
// 	})
// 	.then((res) => {
// 		console.log(res.data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// Exemplo de chamada POST para API - sutAPI.post(endpoint, payload, options)
// const payload = {
// 	nome: 'João',
// };
// sutAPI
// 	.post(`/plan/`, JSON.stringify(payload), {
// 		headers: {
// 			token: 'Colocar Token Aqui',
// 			'Content-Type': 'application/json',
// 		},
// 	})
// 	.then((res) => {
// 		console.log(res.data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});
