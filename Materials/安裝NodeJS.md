在CentOS 7安裝NodeJS 5.2.0版
===========================
方法一:透過nvm管理
-----------------
### 安裝nvm
https://github.com/creationix/nvm  
依安裝說明執行
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
source ~/.bashrc
nvm install v5.2.0
nvm alias default v5.2.0
```
### nvm指令說明
```
nvm ls-remote (線上所有的版本)
nvm ls (本地安裝的版本)
nvm use v5.1.0 (切換版本,只有目前的連線有用)
nvm install node (安裝最新版)
nvm alias default v5.1.0 (設定預設的版本, 永久有用)
```
### 開防火牆
```
firewall-cmd --zone=public --add-port=3000/tcp --permanent
firewall-cmd --reload
```
安裝Raspberry pi 2 on Raspbian Jessie Lite
=========================================
取程式自行安裝
------------
```
wget https://nodejs.org/dist/v5.1.1/node-v5.1.1-linux-armv7l.tar.gz
cd /usr/local/
tar -zxvf ~/node-v5.1.1-linux-armv7l.tar.gz
cd /usr/bin/
ln -s /usr/local/node-v5.1.1-linux-armv7l/bin/node node
ln -s /usr/local/node-v5.1.1-linux-armv7l/bin/npm npm
```

安裝nginx
--------
```
apt-get install nginx
/etc/init.d/nginx start
hostname -I
http://localhost/
本地路徑
/usr/share/nginx/html/
系統路徑
/etc/nginx/
```
