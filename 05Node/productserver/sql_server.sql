insert into products (title, type, description, price, imageurl) 
values ('Harry Potter', 1, 'Some magic and stuff', 19.99, 'harry.jpg');

insert into products (title, type, description, price, imageurl) 
values ('The Meg', 2, 'Some big shark and stuff', 9.99, 'mega.jpg');

insert into products (title, type, description, price, imageurl) 
values ('Bob Marley', 3, 'Some reggae and stuff', 15.99, 'bob.jpg');

select * from products;

insert into product_types (name) values ('book'), ('movie'), ('music');

select * from product_types;

select 
	products.*,
	product_types.*
from
	products
join
	product_types
on
	products.type = product_types.id;

-- GET /products
select * from products;

-- q = harry
select * from products where lower(title) like '%harry%' or lower(description) like '%harry%';

-- POST
insert into products (title, type, description, price, imageurl) 
values ('Bob Marley', 3, 'Some reggae and stuff', 15.99, 'bob.jpg');

-- DELETE 
delete from products where id = 2;


