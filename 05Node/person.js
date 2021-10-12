module.exports = function Person(firstname, lastname, email, yearOfBirth)
{
	this.firstname = firstname;
	this.lastname = lastname;
	this.email = email;
	this.yearOfBirth = yearOfBirth;

	this.calculateAge = function() {
		return( 2017 - this.yearOfBirth );
	}
}
