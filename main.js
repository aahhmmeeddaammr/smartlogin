var username=document.getElementById("UserName");
var Userpassword=document.getElementById("Userpassword");
var btn=document.getElementById("btn");
var users=new Array();

btn.onclick=function(){
     
     getDATA();
     if(check()){
          clear();
          location.href="home.html"
     }else{
          document.getElementById("output").innerHTML="Enter correct data";
          document.getElementById("output").style.color='red'
       
     }    
}

function getDATA(){
     var lusers=localStorage.getItem("users");
     if(lusers){
          users=JSON.parse(lusers);
     }
}

function clear(){
     username.value="";
     // UserEmail.value="";
     Userpassword.value="";
}
function check(){
     for(var i=0;i<users.length;i++){
          if(users[i].name==(username.value) && users[i].password==(Userpassword.value)){
               localStorage.setItem("useee",username.value);
               return true;
          }
     }
     return false;
}