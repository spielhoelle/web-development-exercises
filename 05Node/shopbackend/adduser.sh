curl \
--header "Content-type: application/json" \
--request POST \
--data '{"firstname": "Jan", "lastname": "Schulz", "birthdate": "1985-09-20", "phone": "491733579330", "city":"Berlin", "street":"Kiautschoustr. 9", "email": "jan.schulz@devugees.org"}' \
http://localhost:3000/user