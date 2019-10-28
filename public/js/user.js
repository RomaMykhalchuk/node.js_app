let button = document.getElementById('submit');

button.onclick = async e => {
 
  e.preventDefault();

  let form = document.getElementById('formElem');
  let userName = form.elements['userName'].value;
  let userEmail = form.elements['userEmail'].value;
  let userPassword = form.elements['userPassword'].value;

let userData = {
   name:userName,
   email:userEmail,
   password:userPassword
}  

 let data = JSON.stringify(userData);


  let response = await fetch('/join',{
    method:'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body:data
  });
  let result = await response.text();
  alert(result);
};
