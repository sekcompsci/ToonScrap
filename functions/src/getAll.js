import request from 'request-promise';
import cheerio from 'cheerio';

export async function handler(event, context) {
    try {
        const $ = await request({
            uri: config.get('weburl'),
            transform: body => cheerio.load(body)
        });

        let cartoon = [];

        // filter spacific eliment
        $('.grp').filter(function() {
            $(this)
                .children('.row')
                .each(function() {
                    let img = $(this)
                        .find('img')
                        .attr('src');
                    let name = $(this)
                        .find('.ttl')
                        .attr('title');
                    let link = $(this)
                        .find('.ttl')
                        .attr('href');

                    img = img.replace(/36/, 350);
                    link = link.split('/');

                    cartoon.push({ name, img, link: link[3] });
                });

            return {
                statusCode: 200,
                body: JSON.stringify({ status: 200, data: cartoon })
            };
        });
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ status: 500, data: err.message })
        };
    }
}
