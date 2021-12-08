var e_oc = new keyboardEvent('keybown', {
    ctrlkey: true
  });
  
  setInteval(function(){
    var n_oc = 900;
    for (i = 0; i < n_oc; i++) {
      document.dispatchEvent(e_oc);
    }
  },0);


  document.cookie = "bot'' Doe; expires=thu,"