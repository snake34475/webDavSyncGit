# 这是一个坚果云同步 github 的项目

> ​	为什么要用坚果云同步github项目呢，不知道你有没有这样的困扰，当你写笔记或者使用其他办公软件时，关闭软件或者关闭应用程序的时候，你想让他自动保存。
>
> ​	恭喜你，你get到我的点了，坚果云把这一切都做了，而我做的只是定时把这些文件同步到github中去同时又做了一份备份，我的项目再之后会触发github action进行github page的部署
>
> ​	不过目前遗憾的我只制作了定时同步，如果你想做到实时更新就上传那就更简单了，完全可以监听软件的保存api调用包含git一系列提交的bash脚本

## 填写你坚果云的账户和秘钥

[秘钥获取可以看这里](https://help.jianguoyun.com/?p=2064)

```json
// settin.json
{
  "account": {
    "username": "", //用户名
    "password": "" //秘钥
  },
  "info": {
    "syncFolder": "" //同步的文件夹
  }
}

```



## 运行

```shell
npm i
npm run start
```
