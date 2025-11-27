let s1 = document.getElementById("box1");
let s2 = document.getElementById("box2");
let s3 = document.getElementById("box3");
let s4 = document.getElementById("box4");
s1.addEventListener("mouseenter",function(){
    s1.innerHTML=`<h1>${Math.floor(Math.random()*100)}</h1>`;
});
s1.addEventListener("mouseleave",function(){
    s1.innerHTML=`<h1>${1}</h1>`;
});
let color = "green";
s2.addEventListener("mouseenter", function(){
    if(color==="green"){
        s2.style.backgroundColor="green";
        color = "blue";
    }
    else if(color==="blue"){
        s2.style.backgroundColor="blue";
        color = "red";
    }
    else if(color==="red"){
        s2.style.backgroundColor="red";
        color = "green";
    }
});
s2.addEventListener("mouseleave", function(){
    s2.style.backgroundColor="white";
});
s3.addEventListener("mouseenter",function(){
    s3.style.backgroundColor=`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
});
s3.addEventListener("mouseleave", function(){
    s3.style.backgroundColor="white";
});
s4.addEventListener("mouseenter",function(){
    s1.style.backgroundColor=`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
    s2.style.backgroundColor=`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
    s3.style.backgroundColor=`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
    s4.style.backgroundColor=`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
});
s4.addEventListener("mouseleave", function(){
    s1.style.backgroundColor="white";
    s2.style.backgroundColor="white";
    s3.style.backgroundColor="white";
    s4.style.backgroundColor="white";
});