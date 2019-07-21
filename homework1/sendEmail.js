const nodeEmailer = require('nodemailer');
const auth = require('./sendUser.js').auth;
const fs = require('fs');
//发件账户配置
const config = {
	host: 'smtp.qq.com',
	port: 465,
	auth: auth
}
console.log(config);
const sendEmail = ()=>{
	var initArr = new Promise((resolve,reject) => {
		var arr;
		var num = fs.readFile("employee_records.txt" ,(ree ,data) => {
			arr = data.toString().split('\n');
			var temp = arr.filter(function(item){
				return item !== ""
			})
			if(temp){
				resolve(temp)
			}
		})
	})
	var initData = (data) => {
		var result = new Promise((resolve , reject) => {
			var list = [];
			data.forEach(item => {
				let detail = item.split(',');
				list.push(detail);
			})
			resolve(list)
		})
		return result;
	}
	var filterData = (data)=> {
		var result = new Promise((resolve,reject) => {
			let t = new Date();
			let month = t.getMonth()+1;
			if(month < 10){
				month = '0' + month;
			}else{
				month = month +'';
			}
			let day = t.getDate();
			if(day < 10){
				day = '0' + day;
			}else{
				day = day +'';
			}
			let date = '/' + month + '/' + day;
			let temp = data.filter(function(item){
				return item[2].indexOf(date) > -1;
			})
			resolve(temp);
		})
		return result;
	}
	var send = (data) => {
		var result = new Promise((resolve,reject) => {
			var transporter = nodeEmailer.createTransport(config);
			//发送邮件
			let t = 0;
			data.forEach(item => {
				//收件账户配置
				var addressee = {
					from: '1010502449<1010502449@qq.com>',
					subject: 'Happy birthday!',
					to: item[3],
					text: 'Happy birthday!dear '+item[1],
				}
				transporter.sendMail(addressee, (err , info)=> {
					t++;
					if(err){
						return console.log(err);
					}
					console.log('邮箱'+ item[3] +'发送成功!');
					if(t === data.length) {
						resolve('全部成功发送')
					}
				})
			})
		}) 
		return result;
	}
	initArr
	.then(data => {
		return initData(data)
	})
	.then(data => {
		return filterData(data)
	})
	.then(data => {
		return send(data)
	})
	.then(data => {
		console.log(data)
	})
	.catch(err => {
		console.log(err)
	})

}

exports.sendEmail = sendEmail;