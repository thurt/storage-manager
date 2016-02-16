'use strict'
function StorageManager(type) {
  if (!isAvailable(type)) return alert('Your browser does not support storage type', type)

  const myStore = window[type]

  return {
    get(key) {
      if (myStore[key]) return JSON.parse(myStore[key])
      return false
    },
    getAll() {
      var key = ''
      var map = {}
      for (var i = 0; i < myStore.length; i++) {
        key = myStore.key(i)
        map[key] = JSON.parse(myStore[key])
      }
      return map
    },
    set(key, obj) {
      try {
        myStore[key] = JSON.stringify(obj)
        return true
      }
      catch(e) {
        console.error(e)
        return false
      }
    },
    remove(key) {
      if (!myStore[key]) return false
      delete myStore[key]
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

function isAvailable(type) {
	try {
		var storage = window[type]
		var x = '__storage_test__'
		storage.setItem(x, x)
		storage.removeItem(x)
		return true
	}
	catch(e) {
		return false
	}
}
