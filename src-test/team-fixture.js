module('When creating a person');

test('should set default properties', function() {

	var person = Person()
	equals(person.name,'anonymous');
	equals(person.experience,0);
	equals(person.id,-1);

});

test('should set passed properties', function() {

	var person = Person('XXX',99,1)
	equals(person.name,'XXX');
	equals(person.experience,99);
	equals(person.id,1);

});

test('toString: should concatenate', function() {

	var person = Person('XXX',99,1)
	equals(person.toString(),'XXX99');

});

module('When creating a team');

test('people should be set', function() {

	var team = Team([Person(),Person()]);
	console.dir(team.people());
	equals(team.people().length,2);
	
});

module('When removing a person from a team')

test('should remove person from team', function() {

	var person1 = Person('',0,1);
	var person2 = Person('',1,2);
	
	var team = Team([person1,person2]);
	team.remove(person1.id);
	
	equals(team.people().length,1);
	equals(team.people()[0].id,2);
	
});