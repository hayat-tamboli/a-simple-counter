//alert("hello world");
let i=0;
document.getElementById("number").innerHTML=i ;
function increment() {
    i++;  
    document.getElementById("number").innerHTML=i ;
}
function decrement() {
    i--;    
    document.getElementById("number").innerHTML=i ;
}
function reset(){
    i=0;
    document.getElementById("number").innerHTML=i ;
}
