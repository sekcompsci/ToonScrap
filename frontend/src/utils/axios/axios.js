import { setup } from 'axios-cache-adapter';

const axios = setup({
    baseURL: 'https://toon-scrape.herokuapp.com/api',
    timeout: 20000,
    cache: {
        maxAge: 15 * 60 * 1000
    }
});

export default axios;
