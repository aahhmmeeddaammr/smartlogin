var username=document.getElementById("UserName");
var UserEmail=document.getElementById("UserEmail");
var Userpassword=document.getElementById("Userpassword");
var btn=document.getElementById("btn");
var users=new Array();
btn.onclick=function(){
     if(validate()){
          SETDATA();
          clear();   
     }
}
/*
Clear all inputs after user set his data
*/
function clear(){
     username.value="";
     UserEmail.value="";
     Userpassword.value="";
}
/**
 * set user's data in localstorage
 */
function SETDATA(){
     var user={
          name:username.value,
          email:UserEmail.value,
          password:Userpassword.value
     }
     users.push(user)
     localStorage.setItem("users",JSON.stringify(users));
}

function getDATA(){
     var lusers=localStorage.getItem("users");
     if(lusers){
          users=JSON.parse(lusers);
     }
}
/**
 * THIS function validate the inputs from user
 */
function validate(){
     var regex=/[a-zA-Z1-9]{8,}/gm;
     var regex2=/[a-zA-Z1-9]{3,}@[a-zA-Z]{1,}.[a-zA-Z]{2,}/gm;
     var regex3=/[a-zA-Z1-9]{3,}/gm
     getDATA();
     for(var i=0;i<users.length;i++){
          if(users[i].name.includes(username.value)||users[i].email.includes(UserEmail.value)){
               document.getElementById("output").innerHTML="THIS DATA USED";
               document.getElementById("output").style.color='red'
               return false;
          }
     }
     if(regex2.test(UserEmail.value)&&regex.test(Userpassword.value)&&regex3.test(username.value)){

          document.getElementById("output").innerHTML="SUCSSES";
          document.getElementById("output").style.color='green';
          return true;
     }
     document.getElementById("output").innerHTML="Enter correct data";
     document.getElementById("output").style.color='red'
     return false;
     
}
