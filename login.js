document.getElementById('submit').addEventListener('click',function(){
    const email= document.getElementById('user-email');
    const password= document.getElementById('user-password');    
  
    if(email!==null && email.value.includes('@gmail.com')&&password!==null && password.value==='12345'){
        window.location.href='bank.html';
        email.value='';
    }
    else{
        alert('Please provide the valid email and password!');
    }
})

