export function formatNumber(num) {
  return num >= 1e3 && num < 1e4
    ? (num / 1e3).toFixed(1) + 'k'
    : num >= 1e4
    ? (num / 1e4).toFixed(1) + 'w'
    : num
}

export function dateDiff(hisTime, nowTime) {
  if (!arguments.length) return ''
  if (!hisTime || !nowTime) return ''

  var arg = arguments,
    now = arg[1] ? arg[1] : new Date().getTime(),
    diffValue = now - new Date(arg[0].replace(/ GMT.+$/, '')).getTime(),
    result = '',
    minute = 1000 * 60,
    hour = minute * 60,
    day = hour * 24,
    halfamonth = day * 15,
    month = day * 30,
    year = month * 12,
    _year = diffValue / year,
    _month = diffValue / month,
    _week = diffValue / (7 * day),
    _day = diffValue / day,
    _hour = diffValue / hour,
    _min = diffValue / minute

  if (_year >= 1) result = parseInt(_year) + 'Year ago'
  else if (_month >= 1) result = parseInt(_month) + 'Month ago'
  else if (_week >= 1) result = parseInt(_week) + 'Week ago'
  else if (_day >= 1) result = parseInt(_day) + 'Day ago'
  else if (_hour >= 1) result = parseInt(_hour) + 'Hour ago'
  else if (_min >= 1) result = parseInt(_min) + 'Min ago'
  else result = 'soon'
  return result
}
