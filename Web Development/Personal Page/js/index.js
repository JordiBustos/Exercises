window.onscroll = function() {scrollFunction()};

var elements = document.getElementsByClassName('social-icon'); // get all elements

function scrollFunction() {
   if (document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 865){
      changes()
   } else if (document.documentElement.scrollTop > 865) {
      dissapear()
   } else{
      backToNormal()
   }
}

function changes(){
   document.getElementById("about-section").style.backgroundColor = "#292929";
   document.getElementById('me').style.filter= 'grayscale(100%)';
   for(var i = 0; i < elements.length; i++){
            elements[i].style.color = "white";
   }
   document.getElementById('logo').src = "img/JB-logos_white.png";
}

function backToNormal(){
   document.getElementById("about-section").style.backgroundColor = "white";
      var elements = document.getElementsByClassName('social-icon'); // get all elements
      for(var i = 0; i < elements.length; i++){
         elements[i].style.color = "black"; elements[i].style.display = "inline-block";
      }
      document.getElementById('me').style.filter= 'none';
      document.getElementById('logo').style.display = 'block'
      document.getElementById('logo').src = "img/JB-logos_black.png";
}

function dissapear(){
   document.getElementById('logo').style.display = 'none'
   for(var i = 0; i < elements.length; i++){
      elements[i].style.display = "none";
   }
}




var words = 'Bustos Jordi',
    wordWrapper = document.getElementById('span'),
    wordWrapperContent = wordWrapper.innerHTML,
    addingWord = false

setInterval(function(){

   if(wordWrapperContent.length > 0 && !addingWord ) {
       wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
       wordWrapperContent = wordWrapper.innerHTML;
     } else {
       addingWord = true;
     }
   
     if( addingWord ){
       if( wordWrapperContent.length < words.length  ) {
         wordWrapper.innerHTML = words.slice(0, wordWrapperContent.length + 1);
         wordWrapperContent = wordWrapper.innerHTML;
       }
     }


}, 100);
