'use strict'

var Cookie = function() {

  this.set = function(name, value, time) {
    var expires = '';
    if(time) {
      var date = new Date();
      date.setTime(date.getTime()+(time*24*60*60*1000));
      expires = '; expires='+date.toGMTString();
    }
    document.cookie = name+'='+value+expires+'; path=/';
  };

  this.get = function(name) {
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + name + '=');
    if(parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  };

  this.delete = function(name) {
    this.set(name, '', -1);
  };

};

module.exports = new Cookie();
