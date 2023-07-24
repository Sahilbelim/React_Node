
--  database

show DATABASES 
create database theeasylearn 
drop database theeasylearn --delete database
show tables
use company --active database

create table person(
	id int primary key auto_increment,

	name varchar(32) not null,

	surname varchar(32) not null,

	email varchar(128) unique not null,

	mobile int(10) not null,

	gender char(1) default 'm',

	birthdate date

)

drop table person
-----------------------------------------------
create table admin(
	id integer primary key auto_increment,
	email varchar(128) not null unique,
	password varchar(255) not null,
	created_at date,
	accessed_at datetime
)

-- insert(save) new row into table 
-- 1st method
-- syntax
-- insert into table-name values(value1,value2,value3,value4,value5)

-- example 
insert into admin values(NULL,'ankit@gmail.com','123123','2022-10-22',CURRENT_TIMESTAMP);


insert into person values(NULL,'kartik','updhayay','kartik@gmail.com',1472583690,'m','1984-04-30')

-- 2nd method 
insert into table-name (field1,field2,field3) values(value1,value2,value3)

insert into person(name,surname,email,mobile) values('mohan','patel','mohan@gmail.com',1258789541)


insert into admin (password,email,accessed_at) values ('star','star@gmail.com','2022-10-10')


-- how to remove/delete row/record/tuple from table 
-------------------------------------------------
-- syntax 
-- delete from tablename where condition 

example 
delete from admin where email='star@gmail.com'


delete from person where id=4

delete from person where id>=100

-- delete all row from table 
delete from person 


-- delete all row from table and reset id to 0
-- truncate table table-name 

truncate table person

-----------------------------------------
-- how to update existing rows in table (how to change value of fields)

-- update table-name set field-name  where condition 

example 
update customers set customername='Ankit',contactlastname='patel',creditlimit=9999999  where customernumber=103

update customers set creditlimit=creditlimit+5

update customers set creditlimit=creditlimit-5 where customernumber<=110

update amount by 1 rs in payments table  of those rows whose payment is received in 2003

update payments set amount=amount+1 where paymentdate>='2003-01-01' and paymentdate<='2003-12-31'


-- how to fetch and display row from table
------------------------------------------------------------------
-- syntax 
-- select *|<fields> from table-name [where condition] [group by fieldname] [having condition] [order by field-name] [limit]

-- fetch all fields of all rows from tables 

select * from customers

-- fetch only selected fields of all rows from tables 

select customerNumber,customerName,city,state,country from customers


-- fetch limited no of rows 
select * from customers limit 0,10
select * from customers limit 11,10
select customerNumber,customerName,city,state,country from customers limit 0,100

-- fetch rows customerName wise in asecnding order 
select * from customers order by customerName

select customerNumber,customerName,city,state,country from customers order by country, state, city

-- fetch rows customerName wise in descending order 

select * from customers order by customerName desc

select customerNumber,customerName,city,state,country from customers order by country desc, state, city desc


-- aggregate functions
----------------------------------------------------
findout total of payments 
select sum(amount) from payments 
select sum(amount) as total from payments 

-- findout minimum of amount of payments
select min(amount) from payments


-- findout maximum of amount of payments
select max(amount) from payments


-- findout average of amount of payments
select avg(amount) from payments

-- count no of customers
select count(*) from customers 

aggregate functions with where clause
findout total customers of use country 
select count(*) from customers where country='USA'


aggregate functions with group by clause
fetch count of customers from each and every country
select country,count(*) from customers group by country


aggregate functions with group by clause order by clause
select country,count(*) from customers group by country order by count(*) desc 

aggregate functions with group by clause having clause 
select country,count(*) from customers group by country having count(*)>10


fetch year wise total payment
SELECT sum(amount),left(paymentDate,4) FROM `payments` group by left(paymentDate,4)

fetch month wise total payment
SELECT sum(amount),left(paymentDate,7) FROM `payments` group by left(paymentDate,7)



how to fetch data from more then one table (join operation)

select p.* from payments as p 

select customerName,city,state,country from customers as c 

select p.*,customerName,city,state,country from payments as p, customers as c where p.

how to fetch data from more then one table (join operation)

display customerName,city,state,country and payment detail

select p.* from payments as p 

select customerName,city,state,country from customers as c 

select p.*,customerName,city,state,country from payments as p, customers as c where p.customerNumber = c.customerNumber

display customerName,city,state,country and payment detail of those customers where amount is above 15000 and display it amount wise descending order

select customerName,city,state,country,p.* from payments as p, customers as c where p.customerNumber = c.customerNumber and amount>15000 order by amount desc 


display customerNumber,customerName,orderNumber,orderdate,requireddate,status,shippeddate,productcode,quantityOrdered,priceEach,ProductName,ProductDescription in asending order of customerNumber wise 

select customerNumber,customerName from customers as c 
select orderNumber,orderdate,requireddate,status,shippeddate from orders as o 
select productcode,quantityOrdered,priceEach from orderdetails as od
 
select ProductName,ProductDescription from products as p 

now merge query 
select c.customerNumber,customerName,o.orderNumber,orderdate,requireddate,status,shippeddate,p.productcode,quantityOrdered,priceEach,ProductName,ProductDescription from customers as c,orders as o,orderdetails as od,products as p where c.customerNumber=o.customerNumber and o.ordernumber=od.ordernumber and p.productcode=od.productcode order by c.customerNumber

display customerNumber,customerName along with order count

select customerNumber,customerName from customers
select count(*),customerNumber from orders group by customerNumber

select c.customerNumber,customerName, count(*) from customers as c, orders as o where c.customerNumber=o.customerNumber group by c.customerNumber
