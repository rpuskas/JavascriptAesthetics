function Person(name,experience,id){
	var name = name || '- not entered -';
	var experience = experience || 0; 
	return {
		id: id,
		name: name,
		experience: experience,
		
		toString : function(){
			return name + experience;
		}
		
	}
};

function Team(persons){
	
	var _persons = persons || [];
	var _name = 'team name not entered';
	var getIndex = function(personId){
		for(i = 0;i<_persons.length;++i){
			if(_persons[i].id == personId){
				return i;
			}
		}
	}
	return {
		setName : function(name){
			_name = name;
		},
		getName : function(){
			return _name;
		},
		
		add : function(person){
			_persons.push(person);
		},
		remove : function(id){
			var indexToRemove = getIndex(id);
			_persons = _persons.slice(0,indexToRemove).concat( _persons.slice(indexToRemove+1)  )
		},
		people : function(){
			return _persons;
		},
		totalExperience : function(){	
			var total = 0;
			$.each(_persons, function(){
				total += parseInt(this.experience);
			});
			return total;
		}
	}
};