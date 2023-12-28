var UserEmail=document.getElementById("UserEmail");
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
     UserEmail.value="";
     // UserEmail.value="";
     Userpassword.value="";
}
function check(){
     for(var i=0;i<users.length;i++){
          if(users[i].email==(UserEmail.value) && users[i].password==(Userpassword.value)){
               localStorage.setItem("useee",users[i].name);
               return true;
          }
     }
     return false;
}
