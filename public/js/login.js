document.getElementById('login-form').addEventListener('submit',(event)=>{
event.preventDefault()

const username = document.getElementById('username').value.trim()
const password = document.getElementById('password').value.trim()

if (username && password) {
    // Send a POST request to the API endpoint
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    }).then((response)=>{
        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/dashboard');
          } else {
            alert(response.statusText);
          }
    })

    .catch((error)=>{
        alert('error caught, try again')
    })
  }
})