
    $(".devourBtn").on("click", function(event) {
      var id = $(this).data("id");
    //   var newSleep = $(this).data("newsleep");
  
      var newState = {
        devoured: true
      };
     console.log(id)
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newState
      }).then(
        function(res) {
          console.log(res);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
     console.log("hello")
   
    $("#Add-Burger").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger").val().trim(),
    
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function(response) {
          console.log(response)
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  