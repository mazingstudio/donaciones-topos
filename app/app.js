document.write((function() {
  var button = '';

  button += '<style>html{padding-top: 65px}</style>'
  button += '<h1 style="margin:0; font-weight: 100;">Dona a los <a style="color:inherit;" target="_blank" href="https://topos.mx">topos.mx</a><small><a style="color:#fff; font-weight: 100; font-size: 1rem; margin: 0 0 0 20px; position: relative; top: -4px;" target="_blank" href="https://twitter.com/hashtag/Sismomexico2017?src=tren&data_id=tweet%3A910583997314457600">#sismomexico2017</a></small></h1>';
  button += '<form style="margin-bottom: 0; display:flex; align-items:center; justify-content: space-between;" name="_xclick" action="https://www.paypal.com/ca/cgi-bin/webscr" method="post">';
  button += '<input type="hidden" name="cmd" value="_xclick">';
  button += '<input type="hidden" name="business" value="donativos@brigada-rescate-topos.org">';
  button += '<input type="hidden" name="item_name" value="Donaci&oacute;n a equipo de rescate">';
  button += '<input type="hidden" name="currency_code" value="MXN">';
  button += '<span style="margin-right: 20px">Haz tu donativo a trav&eacute;s de paypal:</span>'
  button += '<input type="image" src="https://www.paypal.com/en_US/i/btn/x-click-butcc-donate.gif" border="0" name="submit" alt="Dona mediante PayPal">';
  button += '</form>';
  var wrapper = '<div style="box-sizing: border-box; position: fixed; top: 0; left: 0; width: 100%; display:flex; justify-content: space-between; align-items: center; background-color:#bc1905; font-family:sans-serif; color:#fff; padding:10px 20px;">' + button  +'</div>';

  return wrapper
})());
