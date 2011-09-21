jQuery(document).ready(function(){

	var team = Team([]);
	var generator = new IdGenerator();
	$('#add-persons').hide();
	
	$('#person-add').live('click',function(){

		var name = $('#person-name').val();
		console.log(name);
		var experience  = $('#person-experience').val();
		
		team.add( Person(name,experience,generator.next()) );
		renderTemplate("#persons","#personsTemplate",team);
	});
	
	$('#next-add-people').click(function(){
		team.setName($("#team-name").val());
		$('#add-team').hide();
		renderTemplate("#persons","#personsTemplate",team);
		$('#add-persons').show();
	});
	
	$('#back-add-team').live('click',function(){
		console.log('here');
		$('#add-team').show();
		$('#add-persons').hide();
	});
	
	$('.removePerson').live('click', function() {
		var personId = $(this).attr('id').split('_')[1];
		team.remove(personId);
		renderTemplate("#persons","#personsTemplate",team);
	});
	
});