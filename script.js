'use strict'
// 1行目に記載している 'use strict' は削除しないでください


window.onload = function () {
  let start = document.getElementById('start');//スタート
  start.addEventListener('click', countStart, false);

  let stop = document.getElementById("stop");//ストップ
  stop.addEventListener("click", countStop, false);

  let reset = document.getElementById("reset");//リセット
  reset.addEventListener("click", countReset, false);
}
//変数の定義
let count   = 300; 
let min     = 0;
let sec     = 0;
let start_f = false;
let interval;

//スタート
function countStart() {
  if (start_f === false) {
    interval = setInterval(countDown, 1000);
    start_f = true;
  }
}
//カウントダウン開始
function countDown () {
  if (count === 1) {
    let display = document.getElementById("default");
    display.style.color = 'red';
    display.innerHTML = "TIME UP!"
    clearInterval(interval);
  
  } else {
    count--;
    min = Math.floor(count / 60);//小数点になった分を整数に変換
    sec = count % 60;//60秒で割ったあまり
    let countDown = document.getElementById("default");
    countDown.innerHTML = ("0" + min) + ":" + ("0" + sec).slice( -2);
  }
}
//ストップボタン押す
function countStop() {
  clearInterval(interval);
  start_f = false;
}
//リセットボタン押す
function countReset() {
  clearInterval(interval);
  count = 180;
  start_f = false;
  let countDown = document.getElementById("default");
  countDown.style.color = 'biack';
  countDown.innerHTML = "05:00"
}

