
var COOKIENAME = "language";

function createCookie(language) {
   var name = COOKIENAME;
   var value = language;
   document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/";
}

function readCookie () {
   
   var nameEQ = encodeURIComponent(COOKIENAME) + "=";
   var ca = document.cookie.split(';');

   for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      
      while (c.charAt(0) === ' ') {
         c = c.substring(1, c.length);
      }

      if (c.indexOf(nameEQ) === 0) {
         return decodeURIComponent(c.substring(nameEQ.length, c.length));
      }
   }

   return null;
}