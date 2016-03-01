A simple wrapper around local/sessionStorage.

**Things you should know of**
- The key value is always stored as a string and returned as a string. localStorage always invokes #toString prototype method for types which are not string, like Object, Number, Array. You should consider casting non-string objects to strings before storing them. For Objects, you will usually want to manually cast them to strings with JSON#stringify and parse them back to Objects using JSON#parse.

Test Documentation
===================================
Run in your browser: https://rawgit.com/thurt/storage-manager/master/test/test.html