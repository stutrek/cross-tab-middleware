# cross-tab-middleware

This is middleware that lets you opt in to sending actions across open browser tabs using [cross-tab-channel](https://github.com/stutrek/cross-tab-channel).

## Usage

### 1. Add it to your store

Pass `crossTabMiddleware` a string to identify and/or version your app.

#### Same Domain

```javascript
import crossTabMiddleware from 'cross-tab-middleware';

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

#### Cross Domain

To work across different domains, cross-tab-channel uses an iframe. That HTML file is entirely self contained and [can be found in the cross-tab-channel repo](https://github.com/stutrek/cross-tab-channel/blob/master/dist/iframe.html). It has no requirements and can be hosted statically.

```javascript
import crossTabMiddleware from 'cross-tab-middleware/crossDomain';

store = createStore(
    reducer,
    applyMiddleware(
        thunk,
        createdRouterMiddleware,
        promiseMiddleware(),
        crossTabMiddleware('//your-domain/path/to/iframe.html', 'your-app-name')
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
