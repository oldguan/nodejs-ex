
var tryCallApp = function (scheme, downloadUrl) {
    var nowTime = new Date().valueOf();
    setTimeout(function () {
        var launchTime = new Date().valueOf() - nowTime;
        if (launchTime < 28) {     //28是调试估算出来的打开本地app基本需要的时间
            window.location = downloadUrl; //下载app页面
        }
    }, 25);
    window.location = scheme;//自己定义的scheme协议
}
document.getElementById("btn").onclick = function () {
    console.log(this.href);
    var downloadUrl = "https://display.intdmp.com/site_login_ijf.htm?app_key=adhuae14a25b11a84bb6&user_id=not_login&sign=afd54be204e68ea073728e89e372f2ad";
    var url = "vipshop://showChannel?channelID=%23top-beauty&channelMenu=0&tra_from=tra%3AC01V4kqlvjozum7h%3A%3Awpxlxckx%3A887051%3A1994b9c392434d63b0c4069b13971768";

    tryCallApp(url, downloadUrl);

    return false;
}

console.log("log in index.js ");

