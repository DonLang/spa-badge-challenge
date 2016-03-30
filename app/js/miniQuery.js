/*!
 * minQuery
 */

 var SweetSelector = function(selection){
  if (selection.charAt(0) === "#"){
    var selected = document.getElementById(selection.substring(1))[0];
  } else if (selection.charAt(0) === ".") {
    var selected =  document.getElementsByClassName(selection.substring(1))[0];
  }  else {
    var selected = document.getElementsByTagName(selection)[0];
  };
};

var MiniQuery = function(selection){
  var AjaxWraper = (function(){
    return {
      request: function(xmlObject){
        return new Promise(function(resolve, reject) {
          var oReq = new XMLHttpRequest();
          oReq.open(xmlObject.type, xmlObject.url);

          oReq.onload = function(){
            if (oReq.status >= 200 && oReq.status < 300){
              resolve(oReq.response);
            } else {
              reject(oReq.statusText);
            }
          }

          if (xmlObject.type == 'POST'){
            oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          } else {
            oReq.send(xmlObject.data)};
          })
      }
    }
  })();
  var SweetSelector = function(selection){
    if (selection.charAt(0) === "#"){
      return document.getElementById(selection.substring(1));
    } else if (selection.charAt(0) === ".") {
      return document.getElementsByClassName(selection.substring(1))[0];
    } else {
      return document.getElementsByTagName(selection)[0];
    };
  };

  var selectionElement = SweetSelector(selection)

  selectionElement.hide = function(){
    var htmlElement = selectionElement
    var styling = htmlElement.style.display;
    htmlElement.setAttribute('data-display', styling);
    var styling = htmlElement.style.display = 'none';
  };
  selectionElement.show = function(){
    var htmlElement = selectionElement;
    htmlElement.style.display = htmlElement.getAttribute('data-display');
  };
  selectionElement.addClass = function(newClass){
    var htmlElement = selectionElement;
    htmlElement.className += " " + newClass;
  }
  selectionElement.removeClass = function(cutClass){
    var htmlElement = selectionElement;
    htmlElement.classList.remove(cutClass);
  }
  selectionElement.on = function(newEvent, actionToPerform){
    var htmlElement = selectionElement;
    htmlElement.addEventListener(newEvent, actionToPerform);
  }
  selectionElement.trigger = function(newEvent){
    var htmlElement = selectionElement;
    var newEvent = new Event(newEvent);
    htmlElement.dispatchEvent(newEvent);
  }


  selectionElement.ajax = function(xmlObject){
    var query = AjaxWraper.request(xmlObject)
    return query
  }
  return selectionElement
}









