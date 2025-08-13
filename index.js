function show()
{
    
    alert("You clicked");
}

// focus on the search bar when pressed "/"
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is '/'
  if (event.key === '/') {
    // Prevent the default browser behavior for '/' (e.g., quick search)
    event.preventDefault(); 
    
    // Get a reference to the input field
    const inputField = document.getElementById('cmdIn');
    
    // Set focus to the input field
    inputField.focus();
  }
});
