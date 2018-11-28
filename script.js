var joinButton=document.getElementById("button");

function checkEvent(event){
    event.preventDefault();

    var name=document.getElementById("name");  
    var valueName=name.value;

    if(valueName === ''){
        name.style.border="1px solid red";
        console.log('Name is not entered');
    } else{
        name.style.border="1px solid #a2ca28";
    }

    var email=document.getElementById('email');
    var valueEmail=email.value;

    if (valueEmail === '') {
        email.style.border="1px solid red";
        console.log('Email is not entered.');
    } else{
        email.style.border="1px solid #a2ca28"; 
    }
    var form=document.getElementById('form');
    var hidden=document.getElementById('hidden');
    
    if (valueName!==''&& valueEmail!==''){
        console.log('ok!');
        hidden.style.display="block"
        form.style.display="none";
    } 
}
joinButton.addEventListener('click', checkEvent);

