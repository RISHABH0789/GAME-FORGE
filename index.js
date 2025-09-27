let username="";
while(username==""||username==null){
  username=window.prompt("Your Name:");
}
window.alert(`Hello ${username} this is beta version of GAME FORGE.If you have any suggestion give it to my gmail at last of webpage`);
document.getElementById("myh1").textContent=`Hello ${username}`;
