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