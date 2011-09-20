function Parent(name,age,id){
	var name = name || '- not entered -';
	var age = age || 0; 
	return {
		id: id,
		name: name,
		age: age,
		
		toString : function(){
			return name + age;
		}
		
	}
};

function IdGenerator(){
	var i = 0;
	return {
		next : function(){
			return ++i;
		}
	}
}

function Parents(parents){
	
	var _parents = parents || [];
	var getIndex = function(parentId){
		for(i = 0;i<_parents.length;++i){
			if(_parents[i].id == parentId){
				return i;
			}
		}
	}
	return {
		
		add : function(parent){
			_parents.push(parent);
		},
		
		remove : function(id){
			var indexToRemove = getIndex(id);
			_parents = _parents.slice(0,indexToRemove).concat( _parents.slice(indexToRemove+1)  )
		},
		
		list : function(){
			return _parents;
		},
		totalYears : function(){	
			var total = 0;
			$.each(_parents, function(){
				total += parseInt(this.age);
			});
			return total;
		}
	}
};

//Note!: important to keep the references to the collections out of the javascript. otherwise, the identities of the 
//		 view will leak into the tests causing them to be brittle and break unnecessarily
function renderTemplate(container,template,collection){
	
	//Test: should always set the collection to empty first to prevent duplication of information in the template
	$(container).empty()
	
	//Test: will be difficult, but some how make sure that this is rendered. perhaps not worth it
	$(template).tmpl(collection).appendTo(container);
	
};

jQuery(document).ready(function(){

	//Very little to test at this level: if it is not pulled out of the load, probably not worth testing
	var parents = Parents([]);
	var generator = new IdGenerator();
	$('#add-children').hide();
	$('#parent-create').click(function(){

		var name = $('#parent-name').val();
		var age  = $('#parent-age').val();
		
		parents.add( Parent(name,age,generator.next()) );
		renderTemplate("#parents","#parentsTemplate",parents);
	});
	
	$('#next').click(function(){
		$('#add-parents').hide();
		$('#add-children').show();
	});
	
	$('.removeParent').live('click', function() {
		var parentId = $(this).attr('id').split('_')[1];
		parents.remove(parentId);
		renderTemplate("#parents","#parentsTemplate",parents);
	});
	
});