var {createClient} = require("webdav");
var {account}=require('../setting.json')

if(!account.username||!account.password) return console.error("请配置账号密码")

console.log("WebDAV",createClient)
const client = createClient(
  'https://dav.jianguoyun.com/dav/',
  account
);

module.exports ={
  client
} 