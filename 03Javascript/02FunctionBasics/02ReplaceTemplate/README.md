[Exercise on Codepen](https://codepen.io/noreading/pen/oPrKBj?editors=0012)  
[Solution on Codepen](https://codepen.io/noreading/pen/gdNVRR?editors=0012)

# Function to template generation

1.
Create an array of 3 user objects.  
Each user has an username, an email, an account_balance and an activation code.

users:

| Name | email |   Balance | activation |
|---|---|----|
| John | john@gmail.com |   0 | 2w3e4r5t|
| Mary | mary@hotmail.com | 0 | 90ungnvx|
| Bob | bob@gmail.com | 	  0 | 7fnkd9xj|

2.
Create a function attachMailTexts() that accepts one
parameter users which looks like 1.
attachMailTexts() returns an array of user objects
with a new key mailText whose value is based on the
following template string:
```
var mailTemplate =
    "Hallo $USERNAME, \n" +
    "Thank you for your registration at MyService.com! \n" +
    "Your Account Balance is $ACCOUNT_BALANCE. \n" +
    "Please hit the activation link in order to \n" +
    "complete your registration: \n" +
    "https://myservice.com/activation/$ACTIVATIONCODE \n" +
    "\n" +
    "MyService.com - Team";
```
