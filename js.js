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

  let numberOfSlide = 17;
  wszystkie.addEventListener("click", () => {
      gallery_number = 0;
      numberOfSlide = 17;
      event1();
      translate();

  });
  wnetrza.addEventListener("click", () => {
      gallery_number = 1;
      numberOfSlide = 5;
      translate();
      event1();

  });
  elewacje.addEventListener("click", () => {
      gallery_number = 2;
      numberOfSlide = 4;
      translate();
      event1();
  });
  ogrody.addEventListener("click", () => {
      gallery_number = 3;
      numberOfSlide = 6;
      translate();
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
  let galleryContainer = document.getElementById("gallery-container");
  let image_contain = document.querySelectorAll(".img-container");
  let body = document.getElementById("body");
  let button_images = document.getElementById("button-images");
  galleryContainer.addEventListener("click", function (event) {
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
                      // images_onclick.removeChild(button_images);
                      button_images.classList.remove("button-active");
                  }
                  body.classList.remove("body-no-scroll");
              }
          }
      }

  })
  // mobile gallery

  let number_of_image = document.getElementById("number-of-img");
  let index = 1;


  function translate() {
      if (window.screen.width < 450) {
          galleryContainer.style.width = numberOfSlide + 1 + "00%";

          for (let i = 0; i <= 17; i++) {
              image_contain[i].style.transform = ("translate", "translate3d(+" + 0 + "px,0,0)");
          }
          index = 1;
          number_of_image.innerHTML = index + "/" + (numberOfSlide + 1);
      }
  }
  window.addEventListener("resize", () => {
      if (window.screen.width > 450) {
          for (let i = 0; i <= 17; i++) {
              image_contain[i].style.transform = ("translate", "translate3d(+" + 0 + "px,0,0)");
          }
          galleryContainer.classList.remove("animatee");
          galleryContainer.style.width = 100 + "%";
          index = 1;
          number_of_image.innerHTML = index + "/" + (numberOfSlide + 1);
      }
  })

  if (window.matchMedia("(max-width:450px)")) {
      number_of_image.innerHTML = index + "/" + (numberOfSlide + 1);
      let sliderTableElement = {
          el: {
              image_container: document.querySelectorAll(".img-container"),
          },
          image_container_width: document.querySelector(".img-container").offsetWidth,
          touchStartx: undefined,
          touchMovex: undefined,
          moveX: undefined,
          init: function () {
              this.bindEvents();
          },
          bindEvents: function (e) {
              galleryContainer.addEventListener("touchstart", (e) => {
                  sliderTableElement.start(e);
              });
              galleryContainer.addEventListener("touchmove", (e) => {
                  sliderTableElement.move(e);
              });
              galleryContainer.addEventListener("touchend", (e) => {
                  sliderTableElement.end(e);

              });
          },
          start: function (e) {
              this.touchStartx = e.targetTouches[0].pageX;
          },
          move: function (e) {
              this.touchMovex = e.targetTouches[0].pageX;
              this.moveX = (index - 1) * this.image_container_width + (this.touchStartx - this.touchMovex);
              galleryContainer.classList.add("animatee");
              if (index < numberOfSlide + 1) {
                  for (let i = 0; i <= 17; i++) {
                      this.el.image_container[i].style.transform = ("translate", "translate3d(-" + this.moveX + "px,0,0)");
                  }
              }
              if (this.touchMovex > this.touchStartx && index === numberOfSlide + 1) {
                  for (let i = 0; i <= 17; i++) {
                      this.el.image_container[i].style.transform = ("translate", "translate3d(-" + this.moveX + "px,0,0)");
                  }
              }
          },
          end: function (e) {

              let distance = Math.abs((index - 1) * this.image_container_width - this.moveX)
              if (distance > this.image_container_width / 3) {

                  if (this.touchMovex < this.touchStartx && index > 1 && index < numberOfSlide + 1) {
                      for (let i = 0; i <= 17; i++) {
                          this.el.image_container[i].style.transform = ("translate", "translate3d(-" + (this.image_container_width * index) + "px,0,0)");
                      }
                      index++;
                  } else if (this.touchMovex < this.touchStartx && index === 1) {

                      for (let i = 0; i <= 17; i++) {
                          this.el.image_container[i].style.transform = ("translate", "translate3d(-" + this.image_container_width + "px,0,0)");
                      }
                      index++;
                  }
                  if (this.touchMovex > this.touchStartx && index > 1) {
                      for (let i = 0; i <= 17; i++) {
                          this.el.image_container[i].style.transform = ("translate", "translate3d(-" + this.image_container_width * (index - 2) + "px,0,0)");
                      }
                      index--;
                  }
              } else {
                  for (let i = 0; i <= 17; i++) {
                      this.el.image_container[i].style.transform = ("translate", "translate3d(-" + (index - 1) * this.image_container_width + "px,0,0)");
                  }
              }
              sliderTableElement.end2();

          },
          end2: function (e) {
              galleryContainer.classList.remove("animatee");
              number_of_image.innerHTML = index + "/" + (numberOfSlide + 1);
          },
      }

      sliderTableElement.init();
  }
//scroll
let button_header = document.getElementById("button-header");
let arrow = document.getElementById("arrow");
//menu button
let button_home = document.getElementById("Button-home");
let button_onas = document.getElementById("button-o-nas");
let button_specializacje = document.getElementById("button-specializacje");
let button_gallery = document.getElementById("button-gallery");
let button_kontakt = document.getElementById("button-kontakt");

button_kontakt.addEventListener("click", () =>{
    document.getElementById("contact-tag_scroll").scrollIntoView({
        behavior: 'smooth',
        block: "start"
      });
})
button_gallery.addEventListener("click", () =>{
    document.getElementById("galeria_scroll").scrollIntoView({
        behavior: 'smooth',
        block: "start"
      });
})
button_specializacje.addEventListener("click", () =>{
    document.getElementById("specializacje_scroll").scrollIntoView({
        behavior: 'smooth',
        block: "start"
      });
})
button_onas.addEventListener("click", () =>{
    document.getElementById("about").scrollIntoView({
        behavior: 'smooth',
        block: "start"
      });
})
button_home.addEventListener("click", () =>{
    document.getElementById("header").scrollIntoView({
        behavior: 'smooth',
        block: "start"
      });
})
//mobile
let mobile_button_home = document.getElementById("mobile-Button-home");
let mobile_button_onas = document.getElementById("mobile-button-o-nas");
let mobile_button_specializacje = document.getElementById("mobile-button-specializacje");
let mobile_button_gallery = document.getElementById("mobile-button-gallery");
let mobile_button_kontakt = document.getElementById("mobile-button-kontakt");

mobile_button_kontakt.addEventListener("click", () =>{
    document.getElementById("contact-tag_scroll").scrollIntoView({
        behavior: 'smooth',
        block: "start"
      });
})
mobile_button_gallery.addEventListener("click", () =>{
    document.getElementById("galeria_scroll").scrollIntoView({
        behavior: 'smooth',
        block: "start",
      });

})
mobile_button_specializacje.addEventListener("click", () =>{
    document.getElementById("specializacje_scroll").scrollIntoView({
        behavior: 'smooth',
        block: "start"
      });
})
mobile_button_onas.addEventListener("click", () =>{
    document.getElementById("about").scrollIntoView({
        behavior: 'smooth',
        block: "start"
      });
})
mobile_button_home.addEventListener("click", () =>{
    document.getElementById("header").scrollIntoView({
        behavior: 'smooth',
        block: "start"
      });
})

arrow.addEventListener("click", () =>{
    document.getElementById("header").scrollIntoView({
        behavior: 'smooth',
        block: "start"
      });
})
button_header.addEventListener("click", () =>{
    document.getElementById("about").scrollIntoView({
        behavior: 'smooth',
        block: "start"
      });
})

window.addEventListener("scroll", function() {
    let header_height = document.getElementById("header");
    let about_height = document.getElementById("about");
    let about_height_content = document.getElementById("about-concent");
    let about_us = about_height.offsetHeight + about_height_content.offsetHeight;
    let specializacje_height = document.getElementById("specializacje_scroll");
    let gallery_height = document.getElementById("galeria_scroll");
    let gallery_height_content = document.getElementById("gallery-section");
    let gallery_All_height = gallery_height.offsetHeight + gallery_height_content.offsetHeight;
    let contact_height = document.getElementById("contact_scroll"); 
    let contact_tag = document.getElementById("contact-tag_scroll");
    let contact_all_height = contact_height.offsetHeight + contact_tag.offsetHeight;

    
    if(document.body.scrollTop || document.documentElement.scrollTop < header_height.offsetHeight){
        remove_acitve()
        mobile_button_home.classList.add("nav-active");
        button_home.classList.add("nav-active");
        
    }else if(document.body.scrollTop || document.documentElement.scrollTop < about_us + header_height.offsetHeight) {
    
        remove_acitve()
        mobile_button_onas.classList.add("nav-active");
        button_onas.classList.add("nav-active");
    }else if(document.body.scrollTop || document.documentElement.scrollTop < about_us + header_height.offsetHeight + specializacje_height.offsetHeight){
      
        remove_acitve()
        mobile_button_specializacje.classList.add("nav-active");
        button_specializacje.classList.add("nav-active");
    }else if(document.body.scrollTop || document.documentElement.scrollTop < about_us + header_height.offsetHeight + specializacje_height.offsetHeight + gallery_All_height){
     
        remove_acitve()
        mobile_button_gallery.classList.add("nav-active");
        button_gallery.classList.add("nav-active");
    }else if(document.body.scrollTop || document.documentElement.scrollTop < about_us + header_height.offsetHeight + specializacje_height.offsetHeight + gallery_All_height + contact_all_height){
        remove_acitve()
        mobile_button_kontakt.classList.add("nav-active");
        button_kontakt.classList.add("nav-active");
    }
  
    
})

function remove_acitve(){
    let buttons_nav = document.querySelectorAll(".menu_No_active");
    for(let i = 0; i <= 9; i++){
      buttons_nav[i].classList.remove("nav-active");
    }
  
}
