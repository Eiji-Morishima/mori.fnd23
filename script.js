'use strict'
// 1行目に記載している 'use strict' は削除しないでください
//青ボタン
let button1 = document.getElementById('btn1')
button1.addEventListener('click', function () {
    let result = "";
    let rdmNum = Math.floor(Math.random() * (10 + 1));
    console.log(rdmNum);
    if (rdmNum >= 6) {
        result = "Safe, 解除成功です!!";
    } else if (rdmNum < 6) {
        result = "Failed, 失敗です💀";
    }
    document.getElementById("result").innerHTML = result;
})
//赤ボタン
let button2 = document.getElementById('btn2')
button2.addEventListener('click', function () {
    let result = "";
    let rdmNum = Math.floor(Math.random() * (10 + 1));
    console.log(rdmNum);
    if (rdmNum >= 6) {
        result = "Safe, 解除成功です!!";
    } else if (rdmNum < 6) {
        result = "Failed, 失敗です💀";
    }
    document.getElementById("result").innerHTML = result;
})

