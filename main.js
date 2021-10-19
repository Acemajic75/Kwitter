function Login() {
     user_id= document.getElementById("user_id").value;
     localStorage.setItem("username", user_id);

     console.log(user_id);

     window.location= "kwitterroom.html";
}