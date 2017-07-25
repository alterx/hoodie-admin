var PouchDB = require('pouchdb-browser')
  .plugin(require('pouchdb-hoodie-api'));
  
module.exports = function (hoodie) {
  hoodie.myOnlineCollection = new PouchDB(location.origin + '/hoodie/store/api/mydbname').hoodieApi()

  hoodie.hello = function (what) {
    return Promise.resolve('Hello, ' + (what || 'world') + '!')
  }
}