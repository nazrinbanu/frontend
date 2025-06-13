var bookitem=document.querySelector(".container")
var overlayitem=document.querySelector(".popup-overlay")
var popupitem=document.querySelector(".pop-up-box")
var bookname=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var descrip=document.getElementById("description")

var dataitem=document.getElementById("add-popup-button")

var cancelitem=document.getElementById("cancel")
var addoverlayitem=document.getElementById("add-overlay")
dataitem.addEventListener("click",function(){
    overlayitem.style.display="block"
    popupitem.style.display="block"

})
cancelitem.addEventListener("click",function(event){
    event.preventDefault();
    overlayitem.style.display="none"
    popupitem.style.display="none"
})
addoverlayitem.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","containerdiv")
    div.innerHTML=`<h2>${bookname.value}</h2>
                  <h4>${bookauthor.value}</h4>
                <p>${descrip.value}</p>
                <button onclick="deletedata(event)">Delete</button>`
    bookitem.append(div)
     overlayitem.style.display="none"
    popupitem.style.display="none"
})
function deletedata(event){
    event.target.parentElement.remove(


        
    )

}