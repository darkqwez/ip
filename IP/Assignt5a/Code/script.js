document.getElementById("b1").addEventListener("click",()=>{
    document.getElementsByClassName("title")[0].style.color = "white";
})



document.getElementById("b1").addEventListener("mouseover",()=>{
    for(let i = 0 ; i<document.getElementsByClassName("title").length ; i++){
    document.getElementsByClassName("title")[i].style.color = "#33FF57";
}

})

document.addEventListener("keydown",(ee)=>{
    document.querySelector(".typer .text").innerHTML = "You just entered : "+ ee.key; 
})

document.querySelector("#colorch").addEventListener("click",()=>{
  var colors = ["#FF5733", "#33FF57", "#5733FF", "#FF3357", "#33FFFF", "#FFFF33"];

  function changeBackgroundColor() {
    var nn = Math.floor(Math.random() * colors.length);
    var colored = colors[nn];
    document.body.style.backgroundColor = colored;
  }
  changeBackgroundColor();
  setInterval(changeBackgroundColor, 500);
});


document.getElementById("elementAdd").addEventListener("click",()=>{
    para = document.createElement("h1");
    const node = document.createTextNode("Holla new element");
    para.appendChild(node);
    console.log(para);
    document.getElementById("first").appendChild(para);
});

document.getElementById("deleteAdd").addEventListener("click",()=>{
    const noder =document.querySelector(".butn");
document.getElementsByClassName("buttonss")[0].removeChild(noder);
});

document.getElementById("replaceAdd").addEventListener("click",()=>{
    var t2 = document.querySelectorAll(".title")[1].innerHTML;
    document.querySelectorAll(".title")[1].innerHTML =  document.querySelectorAll(".title")[0].innerHTML;
    document.querySelectorAll(".title")[0].innerHTML =t2;
});



