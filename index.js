let username="";
while(username==""||username==null){
  username=window.prompt("Your Name:");
}
document.getElementById("myh1").textContent=`Hello ${username}`;