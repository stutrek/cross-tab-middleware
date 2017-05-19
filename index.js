import CrossTab from 'cross-tab-channel';

export default function (appName) {
	var channel = new CrossTab(appName + '-middleware');
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
}
