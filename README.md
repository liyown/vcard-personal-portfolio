# 制作自己的个人主页,很漂亮的嘞
fork from https://github.com/codewithsadee/vcard-personal-portfolio
#### 本代码将原仓库修改了部分内容
- 将index拆分，将几个大的类别分别放置，易于维护；
- 将地图替换为高德接口，国内可以直接访问
- 添加docker github action，易于部署

部署示例：https://me.liuyaowen.club

**需要的话直接fork过去，点个star**
## 使用方法
- 主要代码文件为`index.html`、`about.html`、`resume.html`...等
- 将你自己的信息填入对应的文件标签中即可，代码很容易看懂
- 有问题提个issues，回答的很快

## 添加高德地图接口

- 在 https://console.amap.com/dev/index 中申请自己的key,很简单，在`我的应用`里面创建一个app，名字随意，获取到自己的apikey（不要使用我的啊）
- 在 https://developer.amap.com/tools/picker 获取你的坐标
- 将`contact.html`中的iframe替换为下面代码
```html
<iframe
src="https://restapi.amap.com/v3/staticmap?location=填入你的坐标&zoom=12&size=850*400&markers=mid,,A:填入你的坐标&key=填入你的key"
width="400" height="300" loading="lazy">
</iframe>
```
- 如特殊需求见高德官网：https://lbs.amap.com/api/webservice/guide/api/staticmaps/


## 部署方法
- docker部署

假如你已经有自己的服务器了，并且安装了docker

在仓库的Repository secrets中添加以下字段

> DOCKERHUB_PASSWORD donkerhub密码
> DOCKERHUB_USERNAME donkerhub用户名
> SERVER_HOST 服务器地址
> SERVER_PORT ssh端口，没有修改的话就是22
> SERVER_USER 服务器用户
> SERVER_PWD 服务器密码

OK了，如果你完成了上述操作，在你push代码后会自动的在服务器部署，此时只要使用`服务器地址:8088`就可以访问，如果想要更改访问端口，在`.github\workflows\main.yml`修改`docker run -dp 8088:80  --restart=always --name myprofile liuyaowen0925/myprofile:latest`的端口

- github page 部署

这个就很简单了，直接子仓库设置中的page设置，有很多教程，我就不罗嗦的

请看 https://blog.csdn.net/SiShen654/article/details/132471133
