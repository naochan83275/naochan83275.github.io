function change_theme(theme){
  if(theme == "system"){
    document.getElementById('html').classList.remove("theme-light", "theme-dark");
  }else{
    document.getElementById('html').classList.remove("theme-light", "theme-dark");
    document.getElementById('html').classList.add(theme);
  }
}
