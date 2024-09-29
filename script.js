var btn=document.querySelector("button")
var h2=document.querySelector("h2")
 var growth= document.querySelector(".growth")
var grow=0;


btn.addEventListener("click",function(){
    var interval=setInterval(function(){
       grow++
        h2.innerHTML=grow +"%"
        growth.style.width=grow+"%"
    },40)

    setTimeout(function(){
        clearInterval(interval)
        btn.innerHTML="completed"
        btn.style.opacity=0.7
    },4000)
})

