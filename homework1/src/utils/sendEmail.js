const nodeEmailer = require('nodemailer');
let sendEmail = (data,config,addressDetail)=>{
	var result = new Promise((resolve,reject) => {
		var transporter = nodeEmailer.createTransport(config);
		//发送邮件
		let t = 0;
		data.forEach(item => {
			//收件账户配置
			var addressee = {
				from: addressDetail.from,
				subject: addressDetail.subject,
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

exports.sendEmail = sendEmail;