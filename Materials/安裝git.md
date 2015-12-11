在CentOS 7安裝git-2.6.3版
------------------------
```
#yum remove git
#yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel
#yum install gcc perl-ExtUtils-MakeMaker
#cd /usr/src
#wget https://www.kernel.org/pub/software/scm/git/git-2.6.3.tar.gz
#tar xzf git-2.6.3.tar.gz
#cd git-2.6.3
#make prefix=/usr/local/git all
#make prefix=/usr/local/git install
#echo "export PATH=$PATH:/usr/local/git/bin" >> /etc/bashrc
#source /etc/bashrc
#git --version
```
在Ubuntu安裝git
```
add-apt-repository ppa:git-core/ppa
apt-get update
apt-get install -y git
git --version
```
使用SSH認證
----------
參考官方文件  
https://help.github.com/articles/generating-ssh-keys/  
```
ls -al ~/.SSH
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_rsa
clip < ~/.ssh/id_rsa.pub
```
將Key放到GitHub上,最後不要換行  
```
ssh -T git@github.com
git remote -v
git remote set-url origin https://github.com/USERNAME/OTHERREPOSITORY.git
git remote set-url origin git@github.com:USERNAME/OTHERREPOSITORY.git
```
