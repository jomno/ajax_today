$(function() {
    $('#submit').click(function(){
        alert('hi?');
        $.ajax({
          method: "POST",
          url: "some.php",
          data: { name: "John", location: "Boston" }
        })
          .done(function( msg ) {
            alert( "Data Saved: " + msg );
        });
    })
});
