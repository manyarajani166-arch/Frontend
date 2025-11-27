let s1 = document.getElementById("btn1");
let s2 = document.getElementById("btn2");
let s3 = document.getElementById("btn3");
let s4 = document.getElementById("btn4");
let s5 = document.getElementById("btn5");
let s6 = document.getElementById("shp");
s1.addEventListener("click", function(){
    s6.style.width = "200px";
    s6.style.height = "200px";
    s6.style.borderRadius = "100%";
});
s2.addEventListener("click",function(){
    s6.style.width = "400px";
    s6.style.height = "200px";
    s6.style.borderRadius = "0%";
});
s3.addEventListener("click",function(){
    s6.style.width = "200px";
    s6.style.height = "200px";
    s6.style.borderRadius = "0%";
});
s4.addEventListener("click",function(){
    s6.style.width = "200px";
    s6.style.height = "400px";
    s6.style.borderRadius = "0%";
});
s5.addEventListener("click",function(){
    s6.style.boxShadow = "10px 10px 5px rgba(0,0,0,0.4)";
});