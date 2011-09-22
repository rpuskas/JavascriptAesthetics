function Person(name,experience,id){
	var _name = name || 'anonymous';
	var _experience = experience || 0;
	var _id = id || -1; 
	return {
		id: _id,
		name: _name,
		experience: _experience,
		
		toString : function(){
			return _name + _experience;
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