# cross-tab-middleware

This is middleware that lets you opt in to sending actions across open browser tabs.

## Usage

### 1. Add it to your store

You can make sure you're not sending actions to other apps by specifying your app's name. If you're versioning, you can put a version in there too.

```javascript
store = createStore(
	reducer,
	applyMiddleware(
		thunk,
		createdRouterMiddleware,
		promiseMiddleware(),
		crossTabMiddleware('your-app-name')
	)
);
```

### 2. Add `crossTab: true` to your actions

The middleware will see that this action should be sent across tabs and do so.

```javascript
export function loadUser () {
	return {
		type: USER_LOAD,
		meta: {
			crossTab: true
		},
		payload: {
			promise: userService.load()
		}
	};
}
```
