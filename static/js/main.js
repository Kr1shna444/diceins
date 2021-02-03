//Navbar
const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


$(document).ready(function() {
  // executes when HTML-Document is loaded and DOM is ready
 console.log("document is ready");
   
 
   $( ".card" ).hover(
   function() {
     $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
   }, function() {
     $(this).removeClass('shadow-lg');
   }
 );
   

 // document ready  
 });
 




