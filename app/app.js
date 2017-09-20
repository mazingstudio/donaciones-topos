document.write((function() {
  var button = '';

  button += '<form name="_xclick" action="https://www.paypal.com/ca/cgi-bin/webscr" method="post">';
  button += '<input type="hidden" name="cmd" value="_xclick">';
  button += '<input type="hidden" name="business" value="donativos@brigada-rescate-topos.org">';
  button += '<input type="hidden" name="item_name" value="Donaci&oacute;n a equipo de rescate">';
  button += '<input type="hidden" name="currency_code" value="MXN">';
  button += '<input type="image" src="https://www.paypal.com/en_US/i/btn/x-click-butcc-donate.gif" border="0" name="submit" alt="Dona mediante PayPal">';
  button += '</form>';

  var anchor = '';
  anchor += '<a target="_blank" href="https://topos.mx">Brigada de Rescate Topos Tlaltelolco, A.C.</a>';

  var wrapper = '<div>' + button + ' -- ' + anchor +'</div>';

  return wrapper;
})());
