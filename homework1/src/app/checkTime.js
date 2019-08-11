const schedule = require('node-schedule');//定时器
const sendEmail = require('./../utils/sendEmail').sendEmail;
const init = require('./../utils/InitData').init;
const check = require('./../utils/checkDate').check;
const auth = require('./../assets/sendUser').auth;
const from =  require('./../assets/sendUser').from;
const subject =  require('./../assets/sendUser').subject;
const config = {
	host: 'smtp.qq.com',
	port: 465,
	auth: auth
}
const addressDetail = {
	from: from,
	subject: subject
}

const checkTime = ()=> {
	schedule.scheduleJob('59 21 22 * * *',()=>{
		let initData = new Promise((resolve,reject) => {
			let data = init('./../assets/employee_records.txt');
			if (data) {
				resolve(data);
			}
		})
		initData
		.then((data) => {
			return check(data)
		})
		.then((data) => {
			return sendEmail(data , config , addressDetail)
		})
		.catch(err => {
			console.log(err)
		})
	})
}
checkTime();

