function logout (){
    fetch('/api/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      }).then((response)=>{
          if (response.ok) {
              // If successful, redirect the browser to the profile page
              document.location.replace('/');
            } else {
              alert(response.statusText);
            }
      })
  
      .catch((error)=>{
          alert('error caught, try again')
      })
}

document.getElementById('logout').addEventListener('click', logout)