function Parent(x,y){
	return {
		name: x,
		age: y,
		
		toString : function(){
			return x + y;
		}
		
	}
};

function Parents(parents){
	
	//Test: if parents is passed in empty, then _parents should be initialized to an array. otherwise push will be undefined
	var _parents = parents;
	return {
		
		//Test if adding a parent, general stuff that it is added to the collection
		add : function(parent){
			_parents.push(parent);
		},
		
		list : function(){
			//Test: does this allow for the collection to be modified outside the bounds of the Parents function? 
			return _parents;
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
	$('#parent-create').click(function(){

		var name = $('#parent-name').val();
		var age  = $('#parent-age').val();
		
		parents.add( Parent(name,age) );
		
		renderTemplate("#parents","#parentsTemplate",parents.list());
	})
	
});