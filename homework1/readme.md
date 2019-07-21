## 综述
实现依据employee_records的定时生日邮件发送(每天早上8点),暂时只有用js写的beta1版,如果时间充足,会添加用java写的beta2版本.

#### 执行环境
beta1:需要node环境,并安装pm2.

#### 执行方式
beta1:在相应目录下执行:npm install&&pm2 start checkTime.js

#### 关于缺失文件
beta1:为了数据脱敏,没有在项目中给出smtp邮箱配置信息,需要使用者创建一个sendUser.js
```
var auth = {
	user: xxxx,//邮箱地址
	pass: xxxx,//开启smtp服务对应的密码或者授权码
}
exports.auth = auth;
```

#### 实现思路,缺陷与预计优化方式
beta1:beta1版本的实现思路是利用node-schedule每天早晨8点定时执行sendEmail,sendEmail是发邮件的函数,实现思路是按行遍历employee_records,寻找其中生日是今天的行,并将这些行中的每一行的信息以','分割为数组并保存到字段list中,然后通过nodemailer向list中的用户发送邮件.当前版本没有做异常处理,也没有对employee_records进行优化,由于每天都会遍历txt文件,因此如果数据过多,可能执行较为缓慢.暂时优化思路是将会将employee_records数据按照生日存到数据库中,这样每天不需要遍历txt文档,只需要读取相应生日节点的数据.或者按照生日创建哈希表,相同生日的信息存为一个数组,加快读取.