let button=document.getElementById("mybutton")
button.addEventListener('mouseover', (event) => {
    button.style.backgroundColor ="#FFFFFF";
    button.style.color = '#000000';
});
button.addEventListener('mouseout',(event)=>{
    button.style.backgroundColor ="transparent";
    button.style.color ="white";
});
let mytitle=document.getElementById("title");
mytitle.addEventListener("mouseover",(event)=>{
    mytitle.style.mixBlendMode="overlay";
})
mytitle.addEventListener("mouseout",(event)=>{
    mytitle.style.mixBlendMode="";
})