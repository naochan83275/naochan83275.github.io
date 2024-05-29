// birthday
var url = location.href
var today = new Date();
var ord = today.getFullYear()-2011;
var allowdate = today.getMonth()+1 + '/' + today.getDate();
var allowurl = 'https://naochan83275.github.io/?mode=birthday&ord=' + ord;
// 以下デバッグ用

var allowdate = '5/26';
var ord = 18;

// デバックここまで
if(allowdate == '5/26'){
  if(url == allowurl){
    var msg = url.replace('https://naochan83275.github.io/?mode=birthday&ord=', '');
    document.getElementById('tabtitle').innerHTML = 'happy birthday,Naochan! | Naochan’s website(easteregg))';
    document.getElementById('msg').innerHTML = '誰か祝ってくれるのかということは置いといてとりあえず' + msg + '歳になりました。<br>※大急ぎで作ったのでミスがあるかもしれません。<br><small>[追記]実際ミスがあり8時に修正しました。</small>';
  }else{
    if(url.indexOf('https://naochan83275.github.io/?mode=birthday) = -1){
      document.getElementById('msg').innerHTML = 'urlパラメータ“ord”が間違っているようです。なった年齢をord=の後に指定してください。';
    }
  }
}
