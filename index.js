let username="";
while(username==""||username==null){
  username=window.prompt("Your Name:");
}
document.getElementById("myh1").textContent=`Hello ${username}`;
if(username=="Soumya"||username=="soumya"||username=="Soumya Singh"||username=="soumya singh"){
  document.getElementById("s").textContent="I am in love with you";
}
