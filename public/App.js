
var hrsHeading =document.getElementById("hrs")
var minHeading = document.getElementById("min")
var secHeading=document.getElementById("sec")

setInterval(()=>{

    var currentTime = new Date();
hrsHeading.innerHTML = (currentTime.getHours()<10?"0":"")+currentTime.getHours() ;
min.innerHTML = (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes() ;
sec.innerHTML=(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds() ;

}
 ),1000

