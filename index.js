const display=document.getElementById("display");
function appendTodisplay(input){
    display.value+=input;
}
function clearDisplay(){
    display.value ="";
}
function calculate(){
    display.value=eval(display.value);
}
function deleteItem(){
    let dis = document.getElementById("display").value;
  document.getElementById("display").value = dis.substring(0, dis.length - 1);
}