 
var modal2 = document.getElementById("myModal2");
var span9 = document.getElementsByClassName("close9")[0];
$(document).ready(function(){
    $(".vitrina-but").click(function() {
        modal2.style.display = "block";
    });
});
span9.onclick = function() {
    modal2.style.display = "none";
}


window.onclick = function(event) {
    var e1 = event.target;

    if (e1 == modal2) {
        modal2.style.display = "none";
    }
};