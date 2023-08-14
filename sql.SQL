-- INSERT INTO table-name (property1,property2,...) values (value1,value2);


INSERT INTO customers (customerName , 	contactLastName ,contactFirstName ,phone ,addressLine1 ,addressLine2 , 	city ,state , 	postalCode , 	country,creditLimit ) values ('sahil ','belim','sahil ','869547231','aksharwadi ','vaghavadi road','bhavnagar ','gujrat','364001','india',86940.56);

-- UPDATE table-name SET property1 = value1 , property2 = value2 , .... WHERE condition 

UPDATE customers SET customerName= 'SAHIL BELIM' , contactLastName='BELIM',contactFirstName='SAHIL' WHERE customerNumber=500;

-- DELETE FROM table-name WHERE condition


DELETE FROM customers WHERE customerNumber=500



SELECT * FROM customers 

SELECT customerName , phone , creditLimit FROM customers 

-- SELECT customerName , phone , creditLimit FROM customers order by customerName

-- SELECT customerName , phone , creditLimit FROM customers order by creditLimit DESC

SELECT * FROM customers  WHERE creditLimit>=75000 


SELECT * FROM customers  WHERE creditLimit>=75000  order BY creditLimit

SELECT customerName,phone,state FROM customers WHERE state is NOT null  --not null 

SELECT customerName,phone,state FROM customers WHERE state is  null  -- null 


SELECT * FROM customers WHERE customerName Like "a%";

SELECT * FROM customers WHERE customerName Like "%ee%";

SELECT * FROM customers WHERE customerName Like "%co";

SELECT * FROM customers WHERE phone Like "__________";


SELECT sum(creditLimit) FROM customers;

SELECT sum(amount) FROM payments WHERE customerNumber=112

SELECT min(creditLimit) FROM customers

SELECT max(creditLimit) FROM customers

SELECT avg(amount) FROM payments

SELECT avg(creditLimit) FROM customers

SELECT COUNT(*) FROM customers

SELECT COUNT(*) FROM customers WHERE country ='USA'

-- fetch month wise total payment

SELECT sum(amount),left(paymentDate,4) FROM payments  group by left(paymentDate,4)
-- fetch year wise total payment

SELECT sum(amount),left(paymentDate,7) FROM payments  group by left(paymentDate,7)


SELECT customerNumber,customerName,phone  FROM customers

SELECT customerNumber,paymentDate,amount FROM payments

SELECT customers.customerNumber,customerName,phone,paymentDate,amount FROM customers join payments where customers.customerNumber = payments.customerNumber


SELECT customers.customerNumber,customerName,phone,paymentDate,amount FROM customers  , payments where customers.customerNumber = payments.customerNumber

SELECT c.customerNumber,customerName,phone,paymentDate,amount FROM customers as c , payments as p where c.customerNumber = p.customerNumber 

SELECT c.customerNumber,c.customerName,c.phone,p.paymentDate,p.amount FROM customers as c , payments as p where c.customerNumber = p.customerNumber 

-- display customerName,city,state,country and payment detail of those customers where amount is above 15000 and display it amount wise descending order

SELECT customerNumber,customerName,state,city,country FROM customers

SELECT * FROM payments 

SELECT customers.customerName,customers.state,customers.city,customers.country ,payments.* FROM customers ,payments where customers.customerNumber=payments.customerNumber and payments.amount>=15000

SELECT c.customerName,c.state,c.city,c.country ,p.* FROM customers as c ,payments as p where c.customerNumber=p.customerNumber and p.amount>=15000 

SELECT c.customerName,c.state,c.city,c.country ,p.* FROM customers as c ,payments as p where c.customerNumber=p.customerNumber and p.amount>=15000 order by amount desc


display customerNumber,customerName,orderNumber,orderdate,requireddate,status,shippeddate,productcode,quantityOrdered,priceEach,ProductName,ProductDescription in asending order of customerNumber wise 

SELECT c.customerNumber,c.customerName FROM customers as c

SELECT o.orderNumber,o.orderDate,o.requiredDate,o.status,o.shippedDate FROM orders as o

SELECT od.productCode,od.quantityOrdered,od.priceEach FROM orderdetails as od

SELECT p.productName,p.productDescription FROM products as p

SELECT c.customerNumber,c.customerName ,o.orderNumber,o.orderDate,o.requiredDate,o.status,o.shippedDate,od.productCode,od.quantityOrdered,od.priceEach, p.productName,p.productDescription FROM customers as c , orders as o , orderdetails as od , products as p where c.customerNumber=o.customerNumber and   o.orderNumber=od.orderNumber and p.productCode=od.productCode order by customerNumber


display customerNumber,customerName along with order count


SELECT c.customerNumber,c.customerName FROM customers as c

SELECT o.orderNumber, COUNT(*) FROM orders as o GROUP by o.customerNumber

SELECT c.customerNumber,c.customerName,  o.orderNumber, COUNT(*) FROM customers as c,orders as o where c.customerNumber= o.customerNumber  GROUP by o.customerNumber 

display total payment avg payment made in 2004
SELECT COUNT(*), SUM(amount), avg(amount) from payments WHERE paymentDate >='2004-01-01' and paymentDate<'2005-01-01'