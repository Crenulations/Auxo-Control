async function newNotification() {
  const post = new Notification({
    title: "HEY",
    content: "IVE BEEN TRYING TO MEET YOU",
    date: Date.now()
  })
  await post.save()
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

function createDate(date,hours,minutes,am_pm) {
    var d = new Date(date)
    if(am_pm == "PM")
      d.setHours(hours+12)
    else
      d.setHours(hours)
    d.setMinutes(minutes)

    //this removes milliseconds
    console.log(d.toISOString().split('.')[0])
    return d
}

module.exports = {formatDate, createDate}
