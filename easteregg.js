// birthday
var url = location.href
var today = new Date();
var allowdate = today.getMonth()+1 + '/' + today.getDate();
if(allowdate == '5/26'){
  if(url == 'https://naochan83275.github.io/?mode=birthday&ord=13'){
    var msg = url.replace('https://naochan83275.github.io/?mode=birthday&ord=', '');
    document.getElementById('tabtitle').innerHTML = 'happy birthday,Naochan! | Naochan’s website(easteregg))';
    document.getElementById('msg').innerHTML = '誰か祝ってくれるのかということは置いといてとりあえず' + msg + '歳になりました。<br>※大急ぎで作ったのでミスがあるかもしれません。<br><small>[追記]実際ミスがあり8時に修正しました。</small>';
  }
}
