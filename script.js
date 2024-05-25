function change_theme(theme){
  if(theme == 'system'){
    document.getElementById('html').classList.remove("theme-light", "theme-dark");
  }else{
    document.getElementById('html').classList.remove("theme-light", "theme-dark");
    document.getElementById('html').classList.add(theme);
  }
}

$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});

document.getElementById('msg').innerHTML = '誰か祝ってくれるのかということは置いといてとりあえず' + location.href.replace('https://naochan83275.github.io/?mode=birthday&ord=', '')'歳になりました。<br>※表示がおかしい場合は<a href="https://naochan83275.github.io/?mode=birthday&ord=13">ここ</a>にアクセスしてください。深夜1時に大急ぎで作ったのでミスがあるかもしれません。'
