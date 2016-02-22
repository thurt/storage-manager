'use strict'
function StorageManager(type) {
  if (type !== 'localStorage' && type !== 'sessionStorage') throw new ReferenceError(`StorageManager does not support storage type ${type}`)

  const myStore = window[type]

  return {
    get(key) {
      var item = myStore.getItem(key)
      if (item) return item
      return false
    },
    getAll() {
      var key = ''
      var map = {}
      var item = null
      for (var i = 0; i < myStore.length; i++) {
        key = myStore.key(i)
        if (~key.indexOf('_')) continue
        item = myStore.getItem(key)
        map[key] = item
      }
      return map
    },
    set(key, obj) {
      try {
        var data
        if (typeof obj !== 'string') data = JSON.stringify(obj)
        else data = obj

        myStore.setItem(key, data)
        return true
      }
      catch(e) {
        console.error(e)
        return false
      }
    },
    remove(key) {
      var item = myStore.getItem(key)
      if (!item) return false
      myStore.removeItem(key)
      return true
    },
    getLength() {
      return myStore.length
    },
    clear() {
      myStore.clear()
    }
  }
}

module.exports = StorageManager