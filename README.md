A simple wrapper around local/sessionStorage

```javascript
var store = require('store-manager')('localStorage') // or 'sessionStorage'

// anything that can pass through JSON.stringify
store.set('key', { data: 1, object: 2 })
store.set('key2', 'a simple string')
store.getLength() // 2
var keyMap = store.getAll()
/*
  keyMap = {
    key: {
      data: 1,
      object: 2
    },
    key2: 'a simple string'
  }
*/
var singleKey = store.get('key2') // singleKey = 'a simple string'
store.remove('key2')
store.clear()

```