# cross-tab-middleware

This is middleware that lets you opt in to sending actions across open browser tabs using [cross-tab-channel](https://github.com/stutrek/cross-tab-channel).

## Usage

### 1. Add it to your store

Pass `crossTabMiddleware` a string to identify and/or version your app.

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

Let the middleware know you want this action to be sent to other tabs.

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
