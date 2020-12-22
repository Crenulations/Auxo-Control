var core_utils = require('./core_utils.js')

//==========================================================
//=========== THE CORE LOOP ================================
//======== ~One loop to rule them all~~~ =======================
//  The core loop handles all periodic checks and actions

// Constants
const server_loop = 10000;

// Variables
var loop_num = 0;

const run = () => {
  core_utils.loadFutureNotifications();

  console.log("Beginning Primary Loop -%- ")
  setInterval(loop, server_loop);
}
module.exports.run = run;


function loop(){
}
