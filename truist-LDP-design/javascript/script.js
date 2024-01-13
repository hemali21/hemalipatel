// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction();
  };
  
  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  
  /* navbar */
  var hamburger = document.getElementById("hamburger");
  var menu = document.getElementById("menu");
  var overlay = document.getElementById("overlay");
  var body = document.getElementById("body");
  
  function toggleMenu() {
    menu.classList.toggle("on");
    overlay.classList.toggle("on");
    body.classList.toggle("hidden");
  }
  hamburger.addEventListener("click", toggleMenu);
  menu.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
  
  /* modal */
  var modal = document.getElementById("myModal");
  var i;
  
  var img = document.getElementsByClassName("image");
  var modalImg = document.getElementById("img01");
  
   for(i=0;i< img.length;i++)
     {    
      img[i].onclick = function(){
  
      modal.style.display = "block";
         modalImg.src = this.src;
         document.querySelector("body").style.overflow = 'hidden';
  
   }
  }
  
  modal.onclick  = function() { 
     modal.style.display = "none";
     document.querySelector("body").style.overflow = 'visible';
  }
  