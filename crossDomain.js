var CrossDomain = require('cross-tab-channel/dist/CrossDomain');

module.exports = function (domain, appName) {
	CrossDomain.createIframe(domain);
	var channel = new CrossDomain(appName + '-middleware');
	return function (store) {
		channel.listen(function (action) {
			action.meta.crossTab = false;
			store.dispatch(action);
		});
		return function (next) {
			return function (action) {
				if (action.meta && action.meta.crossTab) {
					channel.emit(action);
				}
				next(action);
			};
		};
	};
};
