var assert = require('chai').assert
var StorageManager = require('../index')


describe('Instantiate', () => {
  it('throws ReferenceError when passing parameter that does not equal \'localStorage\' or \'sessionStorage\'', () => {
    assert.throws(() => {
      StorageManager('non-existant-storage-name')
    }, ReferenceError)
  })
  it('returns instance that operates on localStorage when passing parameter \'localStorage\'', () => {
    var myStore = StorageManager('localStorage')
    //----------------
    myStore.set('key', 'value')
    assert.strictEqual(myStore.get('key'), window.localStorage.getItem('key'))
    //----------------
    myStore.clear()
  })
  it('returns instance that operates on sessionStorage when passing parameter \'sessionsStorage\'', () => {
    var myStore = StorageManager('sessionStorage')
    //----------------
    myStore.set('key', 'value')
    assert.strictEqual(myStore.get('key'), window.sessionStorage.getItem('key'))
    //----------------
    myStore.clear()
  })
})

describe('Interface', () => {

  var myStore = StorageManager('sessionStorage')

  it('can store values with #set and retrieve values with #get', () => {
    myStore.set('key', 'value')
    var value = myStore.get('key')
    assert.strictEqual(value, 'value')
    //----------------
    myStore.clear()
  })
  it('can remove values with #remove', () => {
    myStore.set('key', 'value')
    assert.strictEqual(myStore.remove('key'), true)
    assert.strictEqual(myStore.get('key'), false)
    //----------------
    myStore.clear()
  })
  it('can retrieve all keys in the storage with #getAll', () => {
    myStore.set('a', 1)
    myStore.set('b', 2)
    myStore.set('c', 3)

    var result = myStore.getAll()
    assert.strictEqual(result.a, myStore.get('a')) // 1
    assert.strictEqual(result.b, myStore.get('b')) // 2
    assert.strictEqual(result.c, myStore.get('c')) // 3
    //----------------
    myStore.clear()
  })
  it('can get the length (ie. number of records) in storage', () => {
    myStore.set('a', 1)
    myStore.set('b', 2)
    myStore.set('c', 3)
    assert.strictEqual(myStore.length(), 3)
    //----------------
    myStore.clear()
  })
  it('can clear all records in storage with #clear', () => {
    myStore.set('a', 1)
    myStore.set('b', 2)
    myStore.set('c', 3)
    myStore.clear()
    assert.strictEqual(myStore.getLength(), 0)
    //----------------
    myStore.clear()
  })
  it('returns false when #get key is not found', () => {
    assert.strictEqual(myStore.get('does-not-exist'), false)
  })
  it('returns false when #remove key cannot be removed', () => {
    assert.strictEqual(myStore.remove('does-not-exist'), false)
  })
  it('returns true when #remove key is successfully removed', () => {
    myStore.set('key', 'value')
    assert.strictEqual(myStore.remove('key'), true)
    //----------------
    myStore.clear()
  })
})