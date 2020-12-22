// ========== LOAD TIME PICKER FOR NEW CALENDAR EVENT ========
// I hope you dont need documentation hahaha i suck

loadTimePickers();

function loadTimePickers() {
  var timePickers = document.getElementsByClassName("time-picker-group")
  for (var i = 0; i < timePickers.length; i++) {
    var tp = timePickers[i];

    var tp_hours = tp.getElementsByClassName("hours")[0];
    var tp_min = tp.getElementsByClassName("minutes")[0];
    var tp_am_pm = tp.getElementsByClassName("am-pm")[0];

    tp_hours.value = "8"
    tp_min.value = "30"
    tp_am_pm.value = "AM"

    buttons = tp.getElementsByClassName("timeBut")

    buttons[0].onclick = create_hours_callback(tp_hours, true);
    buttons[1].onclick = create_minutes_callback(tp_min, true);
    buttons[2].onclick = create_am_pm_callback(tp_am_pm);
    buttons[3].onclick = create_hours_callback(tp_hours, false);
    buttons[4].onclick = create_minutes_callback(tp_min, false);
    buttons[5].onclick = create_am_pm_callback(tp_am_pm);


  }
}

function create_hours_callback(pickerVal, op) {
  return function() {
    //op defines the operation type
    var og = parseInt(pickerVal.value);
    var result = 0;
    if (op) { // ADD TIME
      if (og < 12)
        result = og + 1;
      else
        result = 1;
    } else { // SUB TIME
      if (og > 1)
        result = og - 1;
      else
        result = 12;
    }
    pickerVal.value = result;
  }
}

function create_minutes_callback(pickerVal, op) {

  //op defines the operation type
  return function() {
    var og = parseInt(pickerVal.value);

    if (op) { // ADD TIME
      if (og < 60)
        pickerVal.value = og + 1;
      else
        pickerVal.value = 0;
    } else { // SUB TIME
      if (og > 0)
        pickerVal.value = og - 1;
      else
        pickerVal.value = 60;
    }
  }
}

function create_am_pm_callback(pickerVal) {
  return function() {
    if (pickerVal.value == "AM")
      pickerVal.value = "PM"
    else
      pickerVal.value = "AM"
  }
}
