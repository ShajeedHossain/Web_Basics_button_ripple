const btnElem=document.querySelector(".btn");

btnElem.addEventListener("mouseover", (event)=>{
    const y=(event.pageY - btnElem.offsetTop);
    const x=(event.pageX - btnElem.offsetLeft);

    btnElem.style.setProperty("--xPos", x+"px");
    btnElem.style.setProperty("--yPos", y+"px");

})