// Import dependency //
import koa from 'koa';
import router from 'koa-route';
import config from 'config';

// Import module //
import { getAll, getWithTitle, getWithTitleAndChapter, getWithTitleAndChapterNum } from './action';

// Define Varriable //
const app = new koa();
const port = process.env.PORT || config.get('port');

// Router //
app
	.use(router.get('/api/all', getAll))
	.use(router.get('/api/:name', getWithTitle))
	.use(router.get('/api/:name/:chapter', getWithTitleAndChapter))
	.use(router.get('/api/:name/:chapter/:num', getWithTitleAndChapterNum));

// Running //
app.listen(port, () => {
	console.log('Starting node.js on port ' + port);
});

export default app;
