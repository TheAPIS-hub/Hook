 
export function dateDiff(hisTime, nowTime){
  if (!arguments.length) return '';
  let arg = arguments,
    // now = new Date().getTime(),
    now = (new Date()).getTime(),
    diffValue = now - hisTime,
    result = "",
    sec = 1000,
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
    _min = diffValue / minute,
    _sec = diffValue / sec;
  // if (new Date().toDateString() == convertDateFromString(hisTime).toDateString()) {
  //     result.isToday = true;
  // }
  // if (_year >= 1) result = parseInt(_year) + "";
  // else if (_month >= 1) result = parseInt(_month) + "";
  // else if (_week >= 1) result = parseInt(_week) + "";
  if (_day > 1) result = parseInt(_day) + " days ago";
  else if (_day >= 1) result = parseInt(_day) + " day ago";
  else if (_hour > 1) result = parseInt(_hour) + " hours ago ";
  else if (_hour >= 1) result = parseInt(_hour) + " hour ago ";
  else if (_min > 1) result = parseInt(_min) + " mins ago";
  else if (_min >= 1) result = parseInt(_min) + " min ago";
  else if (_sec >= 1) result = "a few seconds ago";
  else result = "just now";
  return result;
}