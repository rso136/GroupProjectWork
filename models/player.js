var orm = require('../config/orm.js');

var player = {
	create: function (cols, vals, cb) {
		orm.create('players', cols, vals, function (res) {
			cb(res);
		});
	},
	update: function (objColVals, condition, cb) {
		orm.update('players', objColVals, condition, function (res) {
			cb(res);
		})
	},
	updateB: function (col, val, condition, cb) {
		orm.update('players', col, val, condition, function (res) {
			cb(res);
		})
	},
	lastValue: function (cb) {
		orm.lastValue('playerID', 'players', 'playerID', function (res) {
			cb(res);
		})
	},
	leftJoin: function(playerID, callback) {
		orm.leftJoin('*', 'players', 'quests', 'playerID', 'playerID', playerID, function (res) {
			callback(res);
		})
	}
};

module.exports = player;