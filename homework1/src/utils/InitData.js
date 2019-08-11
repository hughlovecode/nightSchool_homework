const fs = require('fs');
let init = (url) => {
    var initArr = new Promise((resolve,reject) => {
		var arr;
		var num = fs.readFile(url ,(ree ,data) => {
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
    const res = initArr
	.then(data => {
		return initData(data)
    })
    return res;
}
exports.init = init