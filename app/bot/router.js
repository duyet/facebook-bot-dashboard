var Router = require('koa-router');
var controller = require('./controller');

var bot_router = new Router();

bot_router
	.get('/', controller.home)
	.get('/new', controller.addForm)
	.post('/new', controller.add)
	.post('/connect_bot', controller.connect)
	.all('/:note_id', controller.view)

module.exports = bot_router;