(function() {
  if ('placeholder' in document.createElement('input')) {
    return;
  }

  var length = document.forms.length;
  for (var i = 0; l = length; i < l; i++) {
    showPlaceholder(document.forms[i].elements);
  }

}());
