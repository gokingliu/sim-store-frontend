# 一键打包

通过 shell 脚本，同步 Github 仓库代码，本地进行编译后，打包为 Docker 镜像

# 第一步：添加 Github SSH key

- 生成公钥

`ssh-keygen -t rsa -C '921229265@qq.com'`

- 复制公钥

`cat ~/.ssh/id_rsa.pub`

## 打开 Github 添加 SSH key

https://github.com/settings/ssh/new


# 第二步：配置 go 环境

https://go.dev/doc/install

- 下载 go 执行文件

`wget https://dl.google.com/go/go1.20.4.linux-amd64.tar.gz`

- 解压 go 执行文件

`rm -rf /usr/local/go && tar -C /usr/local -xzf go1.20.4.linux-amd64.tar.gz`

- 添加执行文件到环境变量

`echo 'export PATH=$PATH:/usr/local/go/bin' >> $HOME/.profile`

`source $HOME/.profile`

- 更换包管理地址

`go env -w GOPROXY=https://goproxy.cn`

# 第三步：配置 node 环境

`apt install nodejs npm`

`npm install n -g`

`n stable`

关闭终端，重新打开才会生效

# 第四步：设置 Mysql

`set GLOBAL max_connections=256;`

`service mysql restart`

# 第五步：执行脚本

- ssl 证书

`mkdir -p ~/wechat/ssl`

`cd ~/wechat/ssl`

上传 zip 证书到此目录

`unzip 120.*.zip`

`rm 120.*.zip`

`cat ca_bundle.crt >> certificate.crt`

- ssl 校验文件

`mkdir -p ~/wechat/.well-known/pki-validation`

`cd ~/wechat/.well-known/pki-validation`

上传 txt 文件到此目录

# 第五步：执行脚本

`chmod a+x start.sh`

`./start.sh`

# 脚本内容如下
```shell
#!/bin/bash

# 清理旧文件
echo "********** 第 1 步：准备工作 **********"
rm -rf ~/wechat/build
mkdir -p ~/wechat/build
cd ~/wechat/build
pwd

echo "********** 第 2 步：克隆代码 **********"
git clone git@github.com:gokingliu/wechatapi.git
git clone git@github.com:gokingliu/wechatweb.git

echo "********** 第 3 步：打包服务端 **********"
cd wechatapi
git pull
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build
cp wechatapi ../wechatweb/app/

echo "********** 第 4 步：打包前端 **********"
cd ../wechatweb
git pull
npm i
npm run build

echo "********** 第 5 步：清理旧容器、旧镜像 **********"
docker container stop wechats
docker container rm wechats
docker image rm wechats:1

echo "********** 第 6 步：打包新镜像 **********"
chmod a+x app/*
docker build -t wechats:1 .

echo "********** 第 7 步：启动新容器 **********"
docker run -d \
--name=wechats \
--restart=unless-stopped \
--hostname=wechats \
--net=host \
-v /root/wechat/ssl:/ssl \
-v /root/wechat/.well-known:/.well-known \
wechats:1

echo "********** 结束 **********"
```
