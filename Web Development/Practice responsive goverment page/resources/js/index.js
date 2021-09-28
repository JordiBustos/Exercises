 //Get the scroll buttons:
 buttonBottom = document.getElementById("btnBottom");
 buttonTop = document.getElementById("btn");

 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
     if (document.documentElement.scrollTop > 1000) {
         buttonBottom.style.display = "block";
     } else {
         buttonBottom.style.display = "none";
     }
     if (document.documentElement.scrollTop < 1000) {
         buttonTop.style.display='block'
     } else {
         buttonTop.style.display = "none";
     }
 }

 // When the user clicks on the button, scroll to the top/bottom of the document
 function topFunction() {
 document.documentElement.scrollTop = 0;
 }

 function bottom(){
     window.scrollTo(0,document.body.scrollHeight);
 }

 //Change background-buttons color
 const btn = document.getElementById('change');

 function random(number) {
 return Math.floor(Math.random() * (number+1)); //Generates random number
 }

 btn.onclick = function() {
 const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
 document.getElementById("buttons-section").style.backgroundColor = rndCol;
 }

    /*Hidden/Shown*/
    var videoValue='1';
function changeVideo() {
    if (videoValue ==='1'){
        document.getElementById("content").style.display = 'none';
        videoValue = '';
    } else{
        document.getElementById("content").style.display = 'block';
        videoValue = '1';
    }
 }
 
 /*Change text*/

function changeText() {
    let text = [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        'Text succesfully changed :D',
        'One more...',
        'Made by Bustos Jordi'
    ]
      
    let paragraph = document.getElementById("text").innerHTML;
    
    if (paragraph == text[0]) {
        document.getElementById("text").innerHTML = text[1];
    } else if (paragraph == text[1]) {
        document.getElementById("text").innerHTML = text[2];
    } else if (paragraph == text[2]){
        document.getElementById("text").innerHTML = text[3];
    } else{
        document.getElementById("text").innerHTML = text[0];
    }
}
  