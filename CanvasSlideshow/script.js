var canvas, ctx;
var direction="forward";
var sequence = "sequential";
var transition = "normal";
var imageArray = {};
var caption;
var num;
var myIndex = 0;
var myImages =[
    { 
      "num":1,
      "src": "../shared/slideimages/img1.jpg",
      "caption": "Field of yellow flowers"
    },
    {
      "num":2,
      "src": "../shared/slideimages/img2.jpeg",
      "caption": "Sand Dome Dubia"
    },
    {
      "num":3,
      "src": "../shared/slideimages/img3.jpeg",
      "caption": "Millwoods houses"
    },
    {
      "num":4,
      "src": "../shared/slideimages/img4.jpeg",
      "caption": "Beautiful Road"
    },
    {
      "num":5,
      "src": "../shared/slideimages/img5.jpeg",
      "caption": "Beautiful Dubia"
    },
    {
      "num":6,
      "src": "../shared/slideimages/img6.jpeg",
      "caption": "Dubia Beach"
    },
    {
      "num":7,
      "src": "../shared/slideimages/img7.jpeg",
      "caption": "Canadian Mountains"
    },
    {
      "num":8,
      "src": "../shared/slideimages/img8.jpeg",
      "caption": "River Bank"
    },
    {
      "num":9,
      "src": "../shared/slideimages/img9.jpeg",
      "caption": "A walk in Japan"
    },
    {
      "num":10,
      "src": "../shared/slideimages/img10.jpeg",
      "caption": "People on a Bridge"
    },
    {
      "num":11,
      "src": "../shared/slideimages/img11.jpeg",
      "caption": "Rocky Ground"
    },
    {
      "num":12,
      "src": "../shared/slideimages/img12.jpeg",
      "caption": "Mountians"
    },
    {
      "num":13,
      "src": "../shared/slideimages/img13.jpeg",
      "caption": "Banff creek"
    },
    {
      "num":14,
      "src": "../shared/slideimages/img14.jpeg",
      "caption": "Banff Waterfall"
    },
    {
      "num":15,
      "src": "../shared/slideimages/img15.jpeg",
      "caption": "Banff Mountians"
    },
    {
      "num":16,
      "src": "../shared/slideimages/img16.jpeg",
      "caption": "Cotton Flower"
    },
    {
      "num":17,
      "src": "../shared/slideimages/img17.jpeg",
      "caption": "Sunlight brightens up Flower"
    },
    {
      "num":18,
      "src": "../shared/slideimages/img18.jpeg",
      "caption": "Yellow Flower"
    },
    {
      "num":19,
      "src": "../shared/slideimages/img19.jpeg",
      "caption": "Sunset"
    },
    {
      "num":20,
      "src": "../shared/slideimages/img20.jpeg",
      "caption": "Hotel Street lights"
    }
    
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function slideShow(){
  var c = document.getElementById("slides");
  var forward_backwards=document.getElementById("forward_backward");
  var cap = document.getElementById("caption");
  var ctx = c.getContext("2d"); 
  var stringified = JSON.stringify(myImages);
  var parsedObj = JSON.parse(stringified);
  var currentImage = new Image();
   
  
  if(sequence=="sequential"){
      forward_backwards.style.display="block";
      if(direction=="forward"){
      //myIndex++;
      if (myIndex > 19) {myIndex = 0} 
      
      currentImage.src = parsedObj[myIndex].src; 
      caption = parsedObj[myIndex].caption;
      number = parsedObj[myIndex].num;
      currentImage.onload = function(){
        if(transition=="normal"){
            ctx.drawImage(currentImage, 0, 0,800,500); 
        }else if(transition=="corner_effect"){
            ctx.clearRect(0,0,800,500);
            ctx.drawImage(currentImage, 0, 0,50,31); 
            setTimeout(function(){ctx.drawImage(currentImage, 0, 0,100,62);},200);
            setTimeout(function(){ctx.drawImage(currentImage, 0, 0,200,125);},200);
            setTimeout(function(){ctx.drawImage(currentImage, 0, 0,400,250);},200);
            setTimeout(function(){ctx.drawImage(currentImage, 0, 0,800,500);},200);
        }else if(transition=="swipe_right"){
            ctx.clearRect(0,0,800,500);
            ctx.drawImage(currentImage, 0, 0,0,500); 
            setTimeout(function(){ctx.drawImage(currentImage, 0, 0,50,500);},400);
            setTimeout(function(){ctx.drawImage(currentImage, 0, 0,100,500);},400);
            setTimeout(function(){ctx.drawImage(currentImage, 0, 0,200,500);},400);
            setTimeout(function(){ctx.drawImage(currentImage, 0, 0,400,500);},400);
            setTimeout(function(){ctx.drawImage(currentImage, 0, 0,800,500);},400);
        }else if(transition=="grow"){
            ctx.clearRect(0,0,800,500);
            ctx.drawImage(currentImage, 320,200,160,100); 
            setTimeout(function(){ctx.drawImage(currentImage, 160, 100,480,300);},300);
            setTimeout(function(){ctx.drawImage(currentImage, 0, 0,800,500);},300);
        }
      }
      cap.innerHTML = number+ "/20" + "   " + caption;
      setTimeout(slideShow, 2000);
       myIndex++;
       }else if(direction=="backward"){
          myIndex--;
          if (myIndex < 0) {myIndex = 19}  
          currentImage.src = parsedObj[myIndex].src; 
          caption = parsedObj[myIndex].caption;
          number = parsedObj[myIndex].num;
          currentImage.onload = function(){
            if(transition=="normal"){
            ctx.drawImage(currentImage, 0, 0,800,500); 
            }else if(transition=="corner_effect"){
                ctx.clearRect(0,0,800,500);
                ctx.drawImage(currentImage, 0, 0,50,31); 
                setTimeout(function(){ctx.drawImage(currentImage, 0, 0,100,62);},200);
                setTimeout(function(){ctx.drawImage(currentImage, 0, 0,200,125);},200);
                setTimeout(function(){ctx.drawImage(currentImage, 0, 0,400,250);},200);
                setTimeout(function(){ctx.drawImage(currentImage, 0, 0,800,500);},200);
            }else if(transition=="swipe_right"){
                ctx.clearRect(0,0,800,500);
                ctx.drawImage(currentImage, 0, 0,0,500); 
                setTimeout(function(){ctx.drawImage(currentImage, 0, 0,50,500);},400);
                setTimeout(function(){ctx.drawImage(currentImage, 0, 0,100,500);},400);
                setTimeout(function(){ctx.drawImage(currentImage, 0, 0,200,500);},400);
                setTimeout(function(){ctx.drawImage(currentImage, 0, 0,400,500);},400);
                setTimeout(function(){ctx.drawImage(currentImage, 0, 0,800,500);},400);
            }else if(transition=="grow"){
                ctx.clearRect(0,0,800,500);
                ctx.drawImage(currentImage, 320,200,160,100); 
                setTimeout(function(){ctx.drawImage(currentImage, 160, 100,480,300);},300);
                setTimeout(function(){ctx.drawImage(currentImage, 0, 0,800,500);},300);
            }
          }
          cap.innerHTML = number+ "/20" + "   " + caption;
          setTimeout(slideShow, 2000);
      }
  }else if(sequence=="random"){
      //Do something random
          myIndex= getRandomInt(20) ;
          currentImage.src = parsedObj[myIndex].src; 
          caption = parsedObj[myIndex].caption;
          number = parsedObj[myIndex].num;
          currentImage.onload = function(){
            if(transition=="normal"){
                ctx.drawImage(currentImage, 0, 0,800,500); 
            }else if(transition=="corner_effect"){
                ctx.clearRect(0,0,800,500);
                ctx.drawImage(currentImage, 0, 0,50,31); 
                setTimeout(function(){ctx.drawImage(currentImage, 0, 0,100,62);},200);
                setTimeout(function(){ctx.drawImage(currentImage, 0, 0,200,125);},200);
                setTimeout(function(){ctx.drawImage(currentImage, 0, 0,400,250);},200);
                setTimeout(function(){ctx.drawImage(currentImage, 0, 0,800,500);},200);
            }else if(transition=="swipe_right"){
                ctx.clearRect(0,0,800,500);
                ctx.drawImage(currentImage, 0, 0,0,500); 
                setTimeout(function(){ctx.drawImage(currentImage, 0, 0,50,500);},400);
                setTimeout(function(){ctx.drawImage(currentImage, 0, 0,100,500);},400);
                setTimeout(function(){ctx.drawImage(currentImage, 0, 0,200,500);},400);
                setTimeout(function(){ctx.drawImage(currentImage, 0, 0,400,500);},400);
                setTimeout(function(){ctx.drawImage(currentImage, 0, 0,800,500);},400);
            }else if(transition=="grow"){
                ctx.clearRect(0,0,800,500);
                ctx.drawImage(currentImage, 320,200,160,100); 
                setTimeout(function(){ctx.drawImage(currentImage, 160, 100,480,300);},300);
                setTimeout(function(){ctx.drawImage(currentImage, 0, 0,800,500);},300);
            }
          }
          cap.innerHTML = number+ "/20" + "   " + caption;
          setTimeout(slideShow, 2000); 
  }
  
  
    
}

function setBackward(){
    direction="backward"   
}
function setForward(){
    direction="forward"   
}

function RandomSequential(){
    var forward_backwards=document.getElementById("forward_backward");
    if(sequence=="sequential"){
       sequence="random" ;
       forward_backwards.style.display="none";
       
    }else if(sequence=="random"){
        sequence="sequential";
        forward_backwards.style.display="block";
        
   }
}
function StartStop(){
    var forward_backwards=document.getElementById("forward_backward");
    if(sequence!=""){
       sequence="" ;
       forward_backwards.style.display="none";    
    }else {
        sequence="sequential";
        forward_backwards.style.display="block"; 
        slideShow(); 
   }
}
function changeTransition(t){
    if (t=="normal"){
        transition="normal"
    }else if(t=="corner_effect"){
        transition="corner_effect"
   }else if(t=="swipe_right"){
        transition="swipe_right"
   }else if(t=="grow"){
        transition="grow"
   }
    
}
window.onload = function() {   
    slideShow();      
}



