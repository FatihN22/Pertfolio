/* Back TO Top Area*/

const backTo = document.getElementById('backTop')
backTo.addEventListener('click', (e) => {;
    window.scrollTo({top:0, behavior:"smooth"})
})
window.onscroll = function() {scrollFunction()};
window.addEventListener('load',function(){
  scrollFunction();
});
function scrollFunction(){
  if(window.pageYOffset > 550){
    backTo.style.display = 'block';
    if(window.innerWidth < 1200){
      if(window.scrollY >= document.body.scrollHeight - window.innerHeight){
        backTo.style.bottom = '3.5rem'
      }else{
        backTo.style.bottom = '2rem'
      }
    }
  }else{
    backTo.style.display = 'none'
  } 
}

/* Back TO Top Area End*/

/*TRACKBAR*/
function traceBar(){
  let track = document.getElementById('cubuk'),
    element = document.documentElement,
    dBody = document.body,
    scrolltop = element['scrollTop'] || dBody['scrollTop'],
    scrollbottom = (element['scrollHeight'] || dBody['scrollHeight']) - window.innerHeight,
    scrollpercent = scrolltop / scrollbottom * 100 + '%';
    
    
    track.style.width = scrollpercent
};
window.addEventListener('scroll',traceBar);
/*TRACKBAR END*/ 

 /* Theme Switch Area*/

const theme = document.querySelector(".container"); 
const swch = document.querySelector("#switch"); 

// Sayfa yüklenirken, önceki tema tercihini yükle
if (localStorage.getItem("theme") === "light") {
  theme.classList.add("light");
} else {
    theme.classList.remove('light')
    theme.classList.add("dark");
}

swch.addEventListener("click", () => {
  if (theme.classList.contains("dark")) {
    theme.classList.remove("dark");
    theme.classList.add("light");
    localStorage.setItem("theme", "light"); // Kullanıcının yeni tema tercihini kaydet
  } else {
    theme.classList.remove("light");
    theme.classList.add("dark");
    localStorage.setItem("theme", "dark"); // Kullanıcının yeni tema tercihini kaydet
  }
});


const theme2 = document.querySelector(".container");
const swch2 = document.querySelector("#switch2");
swch2.addEventListener("click", () => {   
    if(theme2.classList.contains('dark')){
        theme2.classList.remove('dark');
        theme2.classList.add('light');
    }else{
        theme2.classList.remove('light');
        theme2.classList.add('dark');
    }
})
/* Theme Switch Area End*/
/* Theme Switch Area End*/

/* Side Navbar Area */

const navHover = document.querySelectorAll(".navbtn") 
const navSpan = document.querySelectorAll(".title-span");
navHover.forEach( (eleman, index) => { 

    eleman.addEventListener("mouseover", function(){
        // navSpan[index].style.opacity = '1'; 
        navSpan[index].classList.add('nav-span');
    })
    eleman.addEventListener("mouseleave", function(){
        // navSpan[index].style.opacity = '0';
        navSpan[index].classList.remove('nav-span');
    })
})
// /* Side Navbar Area End */
navHover.forEach(nav => {
  nav.addEventListener()
});
/*IMAGE POP UP*/ 

function popUp(imgSrc){
  let modal = document.getElementById('myModal');
  let modalImg = document.getElementById('pop-img');
  modal.style.display = 'block';
  modalImg.src ='images/profile.webp'
  
  modal.addEventListener('click',function(){
    modal.style.display = 'none';
  });

  let span = document.getElementById('close');
  span.onclick = function(){
    modal.style.display = 'none';
  }
}

/* IMAGE POP UP END*/ 

// Mobile Menu

function MobileNav(){
 
    const Mtoggle = document.getElementById("mobile-links");
    const mTog = document.getElementById("mTog");
    const togBtn = document.getElementById("mobile-toggle");
    
    document.addEventListener('click', function(e) {
      if (!Mtoggle.contains(e.target) && e.target != mTog ) {
          Mtoggle.style.transform = "translateX(-1000px)";

          mTog.classList.add('bx-menu-alt-left');
          mTog.classList.remove('bx-log-out-circle');
          togBtn.style.left = "5%";
          Mtoggle.style.backdropFilter = "none";
      }
  });

    if (Mtoggle.style.transform === "translateX(0px)" ){
        Mtoggle.style.transform = "translateX(-1000px)";
        Mtoggle.style.backdropFilter = "none";
        mTog.classList.add('bx-menu-alt-left');
        mTog.classList.remove('bx-log-out-circle');
        togBtn.style.left = "5%";
        

    } else{
        Mtoggle.style.transform = "translateX(0px)"     
        mTog.classList.add('bx-log-out-circle');
        mTog.classList.remove('bx-menu-alt-left');
        togBtn.style.transition = "500ms";
        togBtn.style.left = "37%";
        Mtoggle.style.backdropFilter = "blur(23px)";
    }   
}