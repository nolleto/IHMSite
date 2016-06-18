var KEY_CONTRASTE = 'k_contraste';

$(document).on('ready', function() {
  if (localStorage.getItem(KEY_CONTRASTE) == undefined) {
    localStorage.setItem(KEY_CONTRASTE, '0');
  }

  $('img, i').each(function() {
    var _this = $(this),
      alt = _this.attr('alt');

      if (alt && alt.length > 0) {
        _this.attr('title', alt);
      }
  });

  $('#contraste').on('click', function() {
    var value = localStorage.getItem(KEY_CONTRASTE);
    localStorage.setItem(KEY_CONTRASTE, (value == '1' ? '0' : '1'));
    contraste();
  });

  contraste();
});

function contraste() {
  var value = localStorage.getItem(KEY_CONTRASTE);

  //Normal
  if (value == '0') {
    $('#style-alto-contraste').remove();
  } else {
    $('head').append('<link id="style-alto-contraste" rel="stylesheet" type="text/css" href="css/appContraste.css" />');

  }
}
