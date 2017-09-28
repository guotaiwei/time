(function (root) {
  var ONE_SECOND = 1000;
  var SECONDS = 60;

  var ONE_MINUTE = ONE_SECOND * 60;
  var MINUTES = 60;

  var ONE_HOUR = ONE_MINUTE * 60;
  var HOURS = 24;

  var ONE_DAY = ONE_HOUR * 24;

  var bornTime = new Date(2017, 3, 18, 17, 3).getTime()
  root.setInterval(function () {
    var duration = Date.now() - bornTime
    duration = duration / ONE_SECOND

    var ss = Math.floor(duration % SECONDS)
    duration = duration / SECONDS
    var mm = Math.floor(duration % MINUTES)
    duration = duration / MINUTES
    var hh = Math.floor(duration % HOURS)
    duration = duration / HOURS
    var dd = Math.floor(duration % ONE_DAY)

    document.querySelector('div.time').innerHTML = dd + ' 天 ' + hh  + ' 小时 '+ mm  + ' 分钟 '+ ss + ' 秒 '

  }, 1000);
}(window))
