function image(id ,path, title ,content){
    this.id = id ;
    this.path = path;
    this.title = title;
    this.content= content;
}
var imagelist=["",
               new image( "i1",
                          "./assets/img/art-gallery/ace.jpg",
                          "THE ACE",
                          `It is the mandala design of an 'ACE'.
                           This art depicts the reality that everyone
                           always try to be KING in life  but there
                           is always a ACE, the real champion,that
                           No one wants to be....
                           `
                          ),
                new image( "i2",
                          "./assets/img/art-gallery/bike.jpg",
                          "GRAFFITI AND BIKE",
                          `It is the side design of 'bike' and graffiti on wall.
                           Its just a side view of bmw bike and a wall with
                           graffiti`
                          ),
                new image( "i3",
                          "./assets/img/art-gallery/burjkhalifa.jpg",
                          "DUBAI CITY",
                          `It is the design of dubai city.The art
                          contains the world largest architecture ,
                          THE BURJ KHALIFA.This art depicts that 
                          either you are burj khalifa in every room you
                          enter or just a side building.
                          `
                          ),
                new image( "i4",
                          "./assets/img/art-gallery/butterfly.jpg",
                          "THE BUTTERFLY AND THE COFFIN",
                          `It is the mandala design of a butterfly  and  a coffin .
                           This art depicts the dual nature.
                           The butterflies ,which are the symbols of life 
                           and The  coffins,which are the symbols of 
                           death.
                          `
                          ),
                new image( "i5",
                          "./assets/img/art-gallery/castleleaf.jpg",
                          "THE LEAFCASTLE",
                          `It is the design of a castle on a leaf.
                          If you are going to build something in the air 
                          it is always better to build castles than houses of cards
                          `
                          ),
                new image( "i6",
                          "./assets/img/art-gallery/emmastone.jpg",
                          "THE EMMA STONE",
                          "It is the potrait of Emma stone."
                          ),
                new image( "i7",
                          "./assets/img/art-gallery/guitar.jpg",
                          "A GUITAR WITH THE SEVEN STRINGS",
                          `It is the design of a guitar.`
                          ),
                new image( "i8",
                          "./assets/img/art-gallery/Imagination.jpg",
                          "POWER OF IMAGINATION",
                          `This art depicts the power of imagination.
                          imagination is the only place where you can create
                          what you can't see around you.you can break the laws of nature.
                          this is the one of the most important capabilities of an artistic
                          mind.if you can't imagine than you can't make change.
                        `
                          ),
                new image( "i9",
                          "./assets/img/art-gallery/mask.jpg",
                          "MASK MAN",
                          "It is a design of mask."
                          ),
                new image( "i10",
                          "./assets/img/art-gallery/musicalhall.jpg",
                          "THE MUSICAL HALL",
                          "This art show the front view of a musicall hall with piano."
                          ),
                 new image( "i11",
                          "./assets/img/art-gallery/mylogo.jpg",
                          "THE CREATIVE ANONYMOUS",
                          `This is the logo design for my art gallery.
                          It contains the differnt design shapes like circle ,
                          triangles.for desigining i have used mandala design.`
                          ),
                new image( "i12",
                          "./assets/img/art-gallery/Sandtimer.jpg",
                          "SEQUENCE OF LIFE",
                          `The art represent the life cycle of life.
                          It shows that you born and die at a same
                          place.The place help you to grow and at the 
                          end you got buried into that and that place is known as earth.
                           
                          `
                          ),
                new image( "i13",
                          "./assets/img/art-gallery/shoedesign.jpg",
                          "SHOE DESIGN",
                          "It is the mandala design on a shoe."
                          ),
                new image( "i14",
                          "./assets/img/art-gallery/themess.jpg",
                          "THE MESS",
                          "The art represent the three animals in it,THE LION ,THE WOLF ,THE OWL."
                          ),
                new image( "i15",
                          "./assets/img/art-gallery/upinair.jpg",
                          "UP IN THE AIR",
                          "It is the combination of a mandala design on hand and a landscape."
                          ),
                new image( "i16",
                          "./assets/img/art-gallery/winter.jpg",
                          "THE WINTERS",
                          "The art represent the calmness and view of winters and mountains.  "
                          ),
                new image( "i17",
                          "./assets/img/art-gallery/eiffle.jpg",
                          "THE EIFFLE TOWER",
                          `The art contain the design of The effile tower.`
                          ),
              ];
//grid populator
var i;var j; var st="";var st2="";
var l = imagelist.length;
var t = l%4; var r;
if (t == 0){
   r = l/4
}
else{
    r = Math.ceil(l/4)
}
for(i = 0  ;i < 4; i++){
    for(j = 1  ; j <= r ; j++){
        if (((i*r)+j) < l){
            st2+=` <button class="imgbutton"  onclick="antidisplayer();dsp('`+imagelist[((i*r)+j)].id+`');" >
              <img src="`+imagelist[((i*r)+j)].path+`"style="width:100%"></button>`;
           }
        else{
            break
        }
    }
    st+=`<div class="column">
        `+st2+`
        </div>`;
    st2="";
}

var populator = document.querySelector(".row");
populator.innerHTML= ``+st+`` ;
///displayer code
var x= document.getElementById('displayer');
var n = document.querySelector(".middlearea");
function antidisplayer(){
    if (x.style.display === "none" || x.style.display === "") {  
                    x.style.display = "block";
                    document.documentElement.style.overflowY = "hidden";
        }
    else {
                x.style.display = "none";
                n.innerHTML=``;
                document.documentElement.style.overflowY = "auto";

         }  
  }  
function dsp(t){   
    var  c = t;
        for(i = 1 ; i< imagelist.length ; i++){
              if (c === imagelist[i].id){
                      n.innerHTML=`
                                      <div class="imagearea">
                                          <img id ="imgdisp" src=`+imagelist[i].path+` >
                                      </div>
                                      <div class="blogarea">
                                          <p class="title">`+imagelist[i].title+`</p>
                                          <p class="content">`+imagelist[i].content+`</p>
                                      </div>
                                  `;
                      break ;
                   }
              }

}