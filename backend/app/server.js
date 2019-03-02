// Import dependency //
import koa from 'koa';
import koaBody from 'koa-body';
import router from 'koa-route';
import config from 'config';

// Import module //
import { getAll, getWithTitle, getWithTitleAndChapter, getWithTitleAndChapterNum } from './action';

// Define Varriable //
const app = new koa();
const port = process.env.PORT || config.get('port');

// Use middleware //
app.use(koaBody({ multipart: true }));

// Router //
app.use(router.get('/api/all', getAll));
app.use(router.get('/api/:name', getWithTitle));
app.use(router.get('/api/:name/:chapter', getWithTitleAndChapter));
app.use(router.get('/api/:name/:chapter/:num', getWithTitleAndChapterNum));

// Running //
app.listen(port, () => {
	console.log('Starting node.js on port ' + port);
});

export default app;
