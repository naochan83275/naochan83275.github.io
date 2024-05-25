// birthday
var url = location.href
if(url == 'https://naochan83275.github.io/?mode=birthday&ord=13'){
  var msg = url.replace('https://naochan83275.github.io/?mode=birthday&ord=', '');
  document.getElementById('msg').innerHTML = '誰か祝ってくれるのかということは置いといてとりあえず' + url + '歳になりました。<br>※深夜1時に大急ぎで作ったのでミスがあるかもしれません。<br><small>[追記]実際ミスがあり8時に修正しました。</small>';
}
