
const fs = require('fs');
const { exec } = require('child_process');
//获取web链接
const {client}=require('./utils/webdavClinet.js')
const {logDirectoryContents}=require('./utils/index.js');
const setting=require("./setting.json")
//获取所有文件夹 并下载


 async function main(){
  if(!setting.info.syncFolder) return console.log("请配置同步文件夹")
  const directoryItemsArray = await logDirectoryContents(setting.info.syncFolder);

  //提交git
exec('git.sh',[], (err, stdout, stderr) => {
  if (err) {
    console.error('执行异常',err);
    return;
  }
  console.log('执行bash脚本成功');
});
}

main()

