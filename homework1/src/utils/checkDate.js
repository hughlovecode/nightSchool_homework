let check = (data)=> {
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

exports.check = check;