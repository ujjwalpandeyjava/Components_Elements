setInterval(() => {
    var date = new Date()
    hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    hrotate = 30 * hr + min / 2 + sec / 120;
    mrotate = 6 * min +sec/60;
    srotate = 6 * sec;


    hours.style.transform = `rotate(${hrotate}deg)`
    minutes.style.transform = `rotate(${mrotate}deg)`
    seconds.style.transform = `rotate(${srotate}deg)`

}, 1000);