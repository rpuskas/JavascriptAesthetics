
var codeRacer = (function() {
	
	var currentWord;
	var wordIndex = 0;
	var passage;
	var wordArray;
	
	return{
		
		setPassage : function(val)
		{

			passage = val;
			wordArray = passage.split(' ');
			currentWord = wordArray[wordIndex];

		},
			
		onKeyPressed : function(typedWord, wordComplete){
		
			if(currentWord === typedWord){
				
				currentWord = wordArray[++wordIndex];
				wordComplete(wordIndex);
				console.log(currentWord);
				
			}
		
		}
	}
	
})();

jQuery(document).ready(function(){
	
	var $console = $('#console');
	var $passage =$('#passage');
	
	codeRacer.setPassage($('#passage').text().trim())
	
	$console.focus();
	$console.keyup(function(){

		codeRacer.onKeyPressed( $(this).val(), function(wordIndex) { 
			
			$console.val('');
			
			//lame, this is the same as the codeRacer 
			var words = $passage.text().split(' ');
			words[wordIndex] = '<style class=current>' + words[wordIndex] + '</style>';
			
			$passage.text(words.join());  
		
		});
		
	})
	
});	