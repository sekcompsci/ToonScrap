import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://toon-scrape.herokuapp.com/api',
	timeout: 10000
});

export default instance;
