const schedule = require('node-schedule');//定时器
const sendEmail = require('./sendEmail').sendEmail;

const checkTime = ()=> {
	schedule.scheduleJob('00 00 08 * * *',()=>{
		sendEmail()
	})
}
checkTime();