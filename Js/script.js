// nav active js start

const allLinks = document.querySelectorAll(".nav-link");
allLinks.forEach(link => {
    console.log(link.href);
    link.href === window.location.href ? link.classList.add("active") : "false";
});
// nav active js end

//responsive onclick menu start 
function openmenu() {
    let a = document.getElementsByClassName("nav")[0];
    a.style.display = "block";
}

function closemenu() {
    let a = document.getElementsByClassName("nav")[0];
    a.style.display = "none";
}
//responsive onclick menu start





// login js  start//
function openlogin() {
    let a = document.getElementById("login");
    a.style.display = "block";
    // let b =document.getElementById("Logi");
    // b.style.width="100%";
    // b.style.height="400px"
    // b.style.backdropFilter="blur(40px)"
   
}

function closelogin() {
    let a = document.getElementById("login");
    a.style.display = "none";
}


// login js end 






let slider = document.querySelector(".slider");
let slide_count=document.querySelectorAll(".slide").length;
let current_index=0;

function showslider(index){
    if(index >=slide_count){
        current_index=0;

    }else if (index < 0){
        current_index =slide_count -1;
    }
    else{
        current_index=index;
    }

    let  offset = -current_index*100;
    slider.style.transform=`translateX(${offset}%)`;
    slider.style.transition="1s"

    
}


   

document.querySelector(".left").addEventListener('click',function(){
    showslider(current_index - 1);
})

document.querySelector(".right").addEventListener('click',function(){
    showslider(current_index + 1);
})

showslider(current_index);


function autoslide(){
    showslider(current_index + 1);
}
setInterval(autoslide,3000)








