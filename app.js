
$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );


//$( function() {
   // $( "#draggable" ).draggable();
//  } );

$( function() {
    $( "#draggable" ).draggable();
    $( "#draggable1" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Gender" );
      }
    });
  } );




$(document).ready(function(){
	$("#email").keyup(function(){
var email=$("#email").val();
var valid_email=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

///^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;

///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


if  (valid_email.test(email)){
	
	$("#valid_email").text("valid email").css({"color":"green"});
}
	else{
		$("#valid_email").text("invalid email, Must contain @ sign and characters or numbers").css({"color":"red"});
		
	}
	
	});


});



$(document).ready(function(){
	$("#name").keyup(function(){
		
var name=$("#name").val().length;
if (name>3){
$("#first_name").text("valid name").css({"color":"green"});
}
else {$("#first_name").text("invalid name").css({"color":"red"});
	}
	});

});

$(document).ready(function(){
	$("#name1").keyup(function(){
		var name1=$("#name1").val().length;
		

if (name1>3){
$("#last_name").text("valid name").css({"color":"green"});}
else {$("#last_name").text("invalid name").css({"color":"red"});
	}
});
	});







$(document).ready(function(){
	$("#name").keyup(function(){
		$("#name1").keyup(function(){
		
var name=$("#name").val();
var name1=$("#name1").val();

$("#full_name").text(name+""+name1);

});
	});
	});


$(document).ready(function(){
	$("#password").keyup(function(){
		$("#password1").keyup(function(){
		
var pass=$("#password").val();
var pass1=$("#password1").val();

$("#match").click(function(){
if (pass==pass1){
$("#match").text("password matched").css({"color":"green"});}
else {$("#match").text("password has not matched").css({"color":"red"});
	}
});
	});
	});
	});
