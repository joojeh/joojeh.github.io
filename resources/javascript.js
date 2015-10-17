// Your Javascript will go here
$(document).ready(function() {
  /* Add code from the next steps here */
  $("#copyright").click(function(){ 
  	$(this).css('color','purple'); 

  	});

  });

   function replaceName() {
      var myNewName = window.prompt('Pick a new name!');
      document.getElementById('user-name').innerHTML = myNewName;
    }
/*
    document.onclick = replaceName;


  	/*this function changes the color of the copyright you click on to purple */