import request from 'request-promise';
import cheerio from 'cheerio';
import config from 'config';

const responeFormat = (ctx, status, data = null) => {
	ctx.type = 'json';
	ctx.status = status;
	ctx.body = {
		status,
		data
	};
};

const getAll = async (ctx) => {
	try {
		// get html page and transform to cheerio
		const $ = await request({
			uri: config.get('weburl'),
			transform: (body) => cheerio.load(body)
		});

		let cartoon = [];

		// filter spacific eliment
		$('.grp').filter(function() {
			$(this).children('.row').each(function() {
				let img = $(this).find('img').attr('src');
				let name = $(this).find('.ttl').attr('title');
				let link = $(this).find('.ttl').attr('href');

				img = img.replace(/36/, 350);
				link = link.split('/');

				cartoon.push({ name, img, link: link[3] });
			});

			return responeFormat(ctx, 200, cartoon);
		});
	} catch (error) {
		console.log('error', error);

		return responeFormat(ctx, 400);
	}
};

const getWithTitle = async (ctx, name) => {
	try {
		// get html page and transform to cheerio
		const $ = await request({
			uri: config.get('weburl') + name,
			transform: (body) => cheerio.load(body)
		});

		let cartoon = [];

		// filter spacific eliment
		$('.lst').filter(function() {
			$(this).children('.lng_').each(function() {
				var link = $(this).find('a').attr('href');
				var name = $(this).find('.val').text();
				var date = $(this).find('.dte').text();

				cartoon.push({ name, link, date });
			});

			return responeFormat(ctx, 200, cartoon);
		});
	} catch (error) {
		console.log('error', error);

		return responeFormat(ctx, 400);
	}
};

const getWithTitleAndChapterNum = async (ctx, name, chapter, num) => {
	try {
		// get html page and transform to cheerio
		const $ = await request({
			uri: config.get('weburl') + name + '/' + chapter + '/' + num,
			transform: (body) => cheerio.load(body)
		});

		let cartoon = [];

		// filter spacific eliment
		$('.prw').filter(function() {
			$(this).children('a').each(function() {
				let img = $(this).find('img').attr('src');

				cartoon.push({ img });
			});
		});

		return responeFormat(ctx, 200, cartoon);
	} catch (error) {
		console.log('error', error);

		return responeFormat(ctx, 400);
	}
};

const getWithTitleAndChapter = async (ctx, name, chapter) => {
	try {
		// get html page and transform to cheerio
		const $ = await request({
			uri: config.get('weburl') + name + '/' + chapter + '/?all',
			transform: (body) => cheerio.load(body)
		});

		let cartoon = [];

		// filter spacific eliment
		$('#image-container').filter(function() {
			$(this).children('center').each(function() {
				let img = $(this).find('img').attr('src');

				if (img) cartoon.push({ img });
			});
		});

		return responeFormat(ctx, 200, cartoon);
	} catch (error) {
		console.log('error', error);

		return responeFormat(ctx, 400);
	}
};

export { getAll, getWithTitle, getWithTitleAndChapter, getWithTitleAndChapterNum };
