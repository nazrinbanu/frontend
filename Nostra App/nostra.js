var bars= document.querySelector(".mainnav-icon")
var sidenavbar=document.querySelector(".sidenav")
var searcharea=document.querySelector('.searchin')

var dressareas=document.querySelector(".dresscollections")
var dressarea=dressareas.querySelectorAll(".dress")
var namedata=document.getElementById("name")

console.log(dressarea[1].textContent)
function opennavbar(){
    sidenavbar.style.left = "0"
}
function closenavbar(){
    sidenavbar.style.left = "-60%"
}
searcharea.addEventListener("keyup",function()
{
    var inputdata=event.target.value.toUpperCase()
    for(var i=0;i<dressarea.length;i=i+1){
        if(dressarea[i].querySelector("p").textContent.toUpperCase().indexOf(inputdata)<0){
            dressarea[i].style.display="none"
        }
        else{
            dressarea[i].style.display="block"
        }
    }
    

}


)

function fetchdata(event){
    fetch("http://localhost:8080/chicken/item").then(response => response.json())
    .then(data => console.log(data))

}