  var menu = document.getElementById("hamburger");
  var menuMobile = document.getElementById("Mobile-active");
  menu.addEventListener("click", function () {

      if (menu.className === "active") {
          menu.classList.remove("active");
          menuMobile.classList.remove("Menu-main-mobile-active");
      } else {
          menu.className += "active";
          menuMobile.classList.add("Menu-main-mobile-active");
      }
  })
window.addEventListener("click", function(event){
       var isClickInside = menu.contains(event.target);
    if (isClickInside){
          console.log('You clicked inside');
    }else{
        menu.classList.remove("active");
          menuMobile.classList.remove("Menu-main-mobile-active");
          console.log('You clicked outsite');
    }
})
  //banner
  var bannerStatus = 1;
  var bannerTimer = 5000;
  var ban1 = document.getElementById("img-ban1");
  var ban2 = document.getElementById("img-ban2");
  var ban3 = document.getElementById("img-ban3");
  var dot1 = document.querySelector(".one");
  var dot2 = document.querySelector(".two");
  var dot3 = document.querySelector(".three");

window.onload = function () {
      bannerLoop();
  }
   
  var startBannerLoop = setInterval(function () {
      bannerLoop();
  }, bannerTimer);

function dot(){
    if(bannerStatus === 1){
        dot2.classList.remove("on");
        dot1.classList.remove("on");
        dot3.classList.add("on");
    }else if(bannerStatus === 2){
        dot2.classList.remove("on");
        dot3.classList.remove("on");
        dot1.classList.add("on");
    }else if(bannerStatus === 3){
        dot1.classList.remove("on");
        dot3.classList.remove("on");
        dot2.classList.add("on");
    }
}
function resetTimer(){
         clearInterval(startBannerLoop);
     startBannerLoop = setInterval(function () {
      bannerLoop();
  }, bannerTimer);
    
}
dot1.onclick = function(){
   bannerStatus = 1;
    bannerLoop();
  resetTimer();
}
dot2.onclick = function(){
   bannerStatus = 2;
    bannerLoop();
 resetTimer();
}
dot3.onclick = function(){
   bannerStatus = 3;
    bannerLoop();
    resetTimer();
}

  function bannerLoop() {
      if (bannerStatus === 1) {
          ban2.style.opacity = "0";
          setTimeout(function () {
              dot();
              ban1.style.right = "0px";
              ban1.style.zIndex = "1000";
              ban2.style.right = "-100%";
              ban2.style.zIndex = "1500";
              ban3.style.right = "100%";
              ban3.style.zIndex = "500";
          }, 600);
          setTimeout(function () {
              ban2.style.opacity = "1";
          }, 1500);
          bannerStatus = 2;
      } else if (bannerStatus === 2) {
          ban3.style.opacity = "0";
          setTimeout(function () {
               dot();
              ban2.style.right = "0px";
              ban2.style.zIndex = "1000";
              ban3.style.right = "-100%";
              ban3.style.zIndex = "1500";
              ban1.style.right = "100%";
              ban1.style.zIndex = "500";
          }, 600);
          setTimeout(function () {
              ban3.style.opacity = "1";
          }, 1500);
          bannerStatus = 3;
      } else if (bannerStatus === 3) {
          ban1.style.opacity = "0";
          setTimeout(function () {
               dot();
              ban3.style.right = "0px";
              ban3.style.zIndex = "1000";
              ban1.style.right = "-100%";
              ban1.style.zIndex = "1500";
              ban2.style.right = "100%";
              ban2.style.zIndex = "500";
          }, 600);
          setTimeout(function () {
              ban1.style.opacity = "1";
          }, 1500);
          bannerStatus = 1;
      }
  }
//about button
let buttonAbout = document.getElementById("about-button");
buttonAbout.addEventListener("click", function(){
    var moreTekst = document.querySelector(".about-more-text");
    moreTekst.style.display = "block";
    buttonAbout.style.display = "none";
})