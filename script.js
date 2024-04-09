function change_theme(theme){
  if(theme == "system"){
    document.getElementById('html').classList.remove("theme-light", "theme-dark");
  }else{
    document.getElementById('html').classList.remove("theme-light", "theme-dark");
    document.getElementById('html').classList.add(theme);
  }
}

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = 'navManu';
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});
