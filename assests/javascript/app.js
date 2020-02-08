// event listener for submit button to get user name.
$('#submitButton').on('click', function(event) {

    // prevent the form from submitting itself.
    event.preventDefault();
    
    // get the user from the input and store it in a variable.
    var userName = $('#name').val().trim();
    console.log(userName);
    
    // add the user to local storage.
    localStorage.setItem("username", userName);
});