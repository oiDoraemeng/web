set names utf8;
#如果存在，丢弃数据库
drop database if exists login;
create database login charset=utf8;
#进入数据库
use login;
#创建数据表
create table laptop(
  id int primary key auto_increment,#自增主键
  user varchar(40) unique,  #用户名
  password varchar(20) not null  #非空密码
);
#插入几条数据
insert into laptop values(1,'root','123456');
insert into laptop values(2,'123456','root');
insert into laptop values(3,'帅','666666');
insert into laptop values(4,'shuai','654321');
insert into laptop values(5,'1111','888888');
