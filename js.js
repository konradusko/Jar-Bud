  let menu = document.getElementById("hamburger");
  let menuMobile = document.getElementById("Mobile-active");
  menu.addEventListener("click", function () {

      if (menu.className === "active") {
          menu.classList.remove("active");
          menuMobile.classList.remove("Menu-main-mobile-active");
      } else {
          menu.className += "active";
          menuMobile.classList.add("Menu-main-mobile-active");
      }
  })
  window.addEventListener("click", function (event) {
      let isClickInside = menu.contains(event.target);
      if (isClickInside) {

      } else {
          menu.classList.remove("active");
          menuMobile.classList.remove("Menu-main-mobile-active");

      }
  })
  //banner
  let bannerStatus = 1;
  let bannerTimer = 5000;
  let ban1 = document.getElementById("img-ban1");
  let ban2 = document.getElementById("img-ban2");
  let ban3 = document.getElementById("img-ban3");
  let dot1 = document.querySelector(".one");
  let dot2 = document.querySelector(".two");
  let dot3 = document.querySelector(".three");

  window.onload = function () {
      bannerLoop();
  }

  let startBannerLoop = setInterval(function () {
      bannerLoop();
  }, bannerTimer);

  function dot() {
      if (bannerStatus === 1) {
          dot2.classList.remove("on");
          dot1.classList.remove("on");
          dot3.classList.add("on");
      } else if (bannerStatus === 2) {
          dot2.classList.remove("on");
          dot3.classList.remove("on");
          dot1.classList.add("on");
      } else if (bannerStatus === 3) {
          dot1.classList.remove("on");
          dot3.classList.remove("on");
          dot2.classList.add("on");
      }
  }

  function resetTimer() {
      clearInterval(startBannerLoop);
      startBannerLoop = setInterval(function () {
          bannerLoop();
      }, bannerTimer);

  }
  dot1.onclick = function () {
      bannerStatus = 1;
      bannerLoop();
      resetTimer();
  }
  dot2.onclick = function () {
      bannerStatus = 2;
      bannerLoop();
      resetTimer();
  }
  dot3.onclick = function () {
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
  let backgText = document.getElementById("text");
  buttonAbout.addEventListener("click", function () {
      let moreTekst = document.querySelector(".about-more-text");
      moreTekst.style.display = "block";
      buttonAbout.style.display = "none";
      backgText.classList.remove = "text";
      backgText.classList.add = "text-on";
  })
  // gallery buttons
  let wszystkie = document.getElementById("Wszystkie");
  let wnetrza = document.getElementById("Wnetrza");
  let elewacje = document.getElementById("Elewacje");
  let ogrody = document.getElementById("Ogrody");
  let wnetrza_Images = document.querySelectorAll(".wnetrza");
  let elewacje_Images = document.querySelectorAll(".Elewacje");
  let ogrody_Images = document.querySelectorAll(".ogrod");
  let gallery_number = 0;


  wszystkie.addEventListener("click", () => {
      gallery_number = 0;
      event1();

  });
  wnetrza.addEventListener("click", () => {
      gallery_number = 1;
      event1();
  });
  elewacje.addEventListener("click", () => {
      gallery_number = 2;
      event1();
  });
  ogrody.addEventListener("click", () => {
      gallery_number = 3;
      event1();

  });

  function event1() {
      switch (gallery_number) {
          case 0:
              for (let i = 0; i <= 4; i++) {
                  elewacje_Images[i].style.display = "flex";
              }
              for (let i = 0; i <= 5; i++) {
                  wnetrza_Images[i].style.display = "flex";
              }
              for (let j = 0; j <= 6; j++) {
                  ogrody_Images[j].style.display = "flex";
              }
              wszystkie.classList.add("gallery-active");
              ogrody.classList.remove("gallery-active");
              wnetrza.classList.remove("gallery-active");
              elewacje.classList.remove("gallery-active");
              break;
          case 1:
              for (let i = 0; i <= 5; i++) {
                  wnetrza_Images[i].style.display = "flex";
              }
              for (let j = 0; j <= 6; j++) {
                  ogrody_Images[j].style.display = "none";
              }
              for (let i = 0; i <= 4; i++) {
                  elewacje_Images[i].style.display = "none";
              }
              wnetrza.classList.add("gallery-active");
              ogrody.classList.remove("gallery-active");
              wszystkie.classList.remove("gallery-active");
              elewacje.classList.remove("gallery-active");
              break;
          case 2:
              for (let i = 0; i <= 4; i++) {
                  elewacje_Images[i].style.display = "flex";
              }
              for (let j = 0; j <= 6; j++) {
                  ogrody_Images[j].style.display = "none";
              }
              for (let i = 0; i <= 5; i++) {
                  wnetrza_Images[i].style.display = "none";
              }
              elewacje.classList.add("gallery-active");
              ogrody.classList.remove("gallery-active");
              wnetrza.classList.remove("gallery-active");
              wszystkie.classList.remove("gallery-active");
              break;
          case 3:
              for (let j = 0; j <= 6; j++) {
                  ogrody_Images[j].style.display = "flex";
              }
              for (let i = 0; i <= 5; i++) {
                  wnetrza_Images[i].style.display = "none";
              }
              for (let i = 0; i <= 4; i++) {
                  elewacje_Images[i].style.display = "none";
              }
              ogrody.classList.add("gallery-active");
              wszystkie.classList.remove("gallery-active");
              wnetrza.classList.remove("gallery-active");
              elewacje.classList.remove("gallery-active");
              break;
      }
  }
  // Gallery img 


  let body = document.getElementById("body");
  let button_images = document.getElementById("button-images");
  document.addEventListener("click", function (event) {
      if (window.screen.width > 450) {
          let obiekt = event.target.classList.contains("glob-img");
          let obiekt2 = event.target.classList.contains("image-on-click");
          let background_images = event.target.parentElement;
          let images_onclick = event.target;
          let obiekt3 = event.target.classList.contains("background-after-images");
          let obiekt4 = event.target.classList.contains("button-span");
          let obiekt5 = event.target.children;

          if (obiekt) {
              images_onclick.classList.add("image-on-click");
              button_images.classList.add("button-active");
              body.classList.add("body-no-scroll");
              background_images.classList.add("background-fixed");
              background_images.appendChild(button_images);
              images_onclick.classList.remove("glob-img");

          } else if (obiekt5) {
              if (obiekt4 || obiekt5.length == "3") {
                  background_images.classList.remove("background-fixed");
                  background_images.removeChild(button_images);
                  background_images.classList.remove("button-active");
                  background_images.firstElementChild.classList.remove("image-on-click");
                  background_images.firstElementChild.classList.add("glob-img");
                  body.classList.remove("body-no-scroll");
              } else if (obiekt5.length == "0") {

              } else {
                  obiekt5[0].classList.remove("image-on-click");
                  obiekt5[0].classList.add("glob-img");
                  images_onclick.classList.remove("background-fixed");
                  images_onclick.classList.remove("button-active");

                  if (body.className === "body-no-scroll") {
                      images_onclick.removeChild(button_images);
                  }
                  body.classList.remove("body-no-scroll");
              }
          }
      }

  })
  // mobile gallery

  //function test(event){


  let galleryContainer = document.getElementById("gallery-container");
  //let obiekt_test = event.target.classList.contains("glob-img");


  if (navigator.msMaxTouchPoints) {

  } else {


      console.log("xd");
      let sliderTableElement = {
          el: {
              image_container: document.querySelectorAll(".img-container"),
              img_slide: document.querySelectorAll(".glob-img"),


          },
          image_container_width: document.querySelector(".img-container").offsetWidth,
          touchStartx: undefined,
          touchMovex: undefined,
          moveX: undefined,
          index: 1,
          longTouch: undefined,

          init: function () {
              this.bindEvents();
          },
          bindEvents: function (e) {
              galleryContainer.addEventListener("touchstart", (e) => {
                  // let touchstart = e.targetTouches[0].pageX;
                  ;
                  sliderTableElement.start(e);
              })
              galleryContainer.addEventListener("touchmove", (e) => {

                  console.log("move");
                  sliderTableElement.move(e);
              });
              galleryContainer.addEventListener("touchend", (e) => {
                  sliderTableElement.end(e);
                  console.log("end");

              });
          },
          start: function (e) {
              //  this.longTouch = false;
              //  setTimeout(function () {
              //      sliderTableElement.longTouch = true;
              //  }, 250);
              this.touchStartx = e.targetTouches[0].pageX;
              console.log(this.image_container_width);
          },
          move: function (e) {
              this.touchMovex = e.targetTouches[0].pageX;
              this.moveX = (this.index-1) * this.image_container_width + (this.touchStartx - this.touchMovex);
              //  let speed = 100 - this.moveX / 6;
              galleryContainer.classList.add("animate-test");
              /*
              if(this.moveX < galleryContainer.offsetWidth){
                  galleryContainer.style.transform = ("translate", "translate3d(-" + this.moveX + "px,0,0)" )
                
              }
              */
              console.log(this.touchStartx);
              //  console.log(speed + "");
              //   console.log(this.index);
              console.log(this.moveX + "movex");
           
        if(this.index < 17){
              for (let i = 0; i <= 17; i++) {
                  this.el.image_container[i].style.transform = ("translate", "translate3d(-" + this.moveX + "px,0,0)");
              }
}

          },
          end: function (e) {

    
            if (this.touchMovex < this.touchStartx && this.index > 1 && this.index <18) {
                      for (let i = 0; i <= 17; i++) {
                          this.el.image_container[i].style.transform = ("translate", "translate3d(-" + (this.image_container_width * this.index) + "px,0,0)");
                          console.log("xd indexxxx");
                      }
                  this.index++;
                        console.log(sliderTableElement.index + "xd index lol");
                  }else if (this.touchMovex < this.touchStartx && this.index === 1) {
                  console.log("powinno pojsc w prwao");

                  for (let i = 0; i <= 17; i++) {
                      this.el.image_container[i].style.transform = ("translate", "translate3d(-" + this.image_container_width + "px,0,0)");
                      console.log("INDEX ZZERO");
                      
                  }
                    this.index++;
                        console.log(sliderTableElement.index + "xd index lol");
                  
                  } 
           if (this.touchMovex > this.touchStartx && this.index > 1) {
                 
 

                      for (let i = 0; i <= 17; i++) {
                          this.el.image_container[i].style.transform = ("translate", "translate3d(-" + this.image_container_width * (this.index-2) + "px,0,0)");
                          console.log("xd indexxxx LEWO");
                      }
               this.index--;
 console.log(sliderTableElement.index + "xd index lol");
                      
                  }/*else if (this.touchMovex > this.touchStartx && this.index === 1) {
                  console.log("powinno pojsc w prwao");

                  for (let i = 0; i <= 17; i++) {
                      this.el.image_container[i].style.transform = ("translate", "translate3d(" + this.image_container_width + "px,0,0)");
                      console.log("INDEX ZZERO LEWO");
                      
                  }
                    this.index--;
                        console.log(sliderTableElement.index + "xd index lol");
                  
                  } */ 
           
     


              
            
              sliderTableElement.end2();



          },
          end2: function (e) {
              galleryContainer.classList.remove("animate-test");

          },


      }




      sliderTableElement.init();

      console.log(sliderTableElement.index + "xd index lol");


  }
