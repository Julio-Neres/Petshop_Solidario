let count = 1;
document.getElementById("radio1").checked = true;
setInterval(function(){
    nextImage();
},5000)

function nextImage(){
    count++;
    if(count>4){
        count=1;
    }
    document.getElementById("radio"+count).checked = true;

}

function texto1() {
    var adocaoresponsavel = document.getElementById("adocaoresponsavel");

    
    var isExpanded = adocaoresponsavel.style.maxHeight === "none" || adocaoresponsavel.style.maxHeight === "";

  
    if (isExpanded) {
        adocaoresponsavel.style.maxHeight = "100px"; 
    } else {
        adocaoresponsavel.style.maxHeight = null; 
    }
}

function texto2() {
    var castracaopediatrica = document.getElementById("castracaopediatrica");

    
    var isExpanded = castracaopediatrica.style.maxHeight === "none" || castracaopediatrica.style.maxHeight === "";

  
    if (isExpanded) {
        castracaopediatrica.style.maxHeight = "100px"; 
    } else {
        castracaopediatrica.style.maxHeight = null; 
    }
}
