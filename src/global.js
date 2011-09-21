function IdGenerator(){
	var i = 0;
	return {
		next : function(){
			return ++i;
		}
	}
}

function renderTemplate(container,template,collection){
	$(container).empty()
	$(template).tmpl(collection).appendTo(container);
};