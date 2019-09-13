function queans(que,ans){
    this.que = que;
    this.ans = ans;
}
var queanslist=["",
                 new queans(
                     "WHO I AM?",
                     `HELLO!
                     I am Sharvan sharma.</br>
                     I live in Amritsar,punjab,india.I am pursuing Bachelor of technology in computer science
                     from Guru Nanak Dev University,Amritsar.I have keen interest in developing products based on 
                     Artificial intelligence and Algorithmic design.I have contributed in some minor projects as algorithm 
                     designer.I have 1.5 year of competitive coding experience in PYTHON and I am 5 star programmer at 
                     hackerrank in problem solving section.I have experience of many minor projects in front-end development,
                     this website is one of them.Currently,I am full stack developer in Asp.net.
                     `
                 ),
                
                 new queans(
                    "WHAT I FOLLOW?",
                   `Basically, I follow some affirmations,one of them is written in my description box,and others are:
                    </br><b>"The 40% rule"</b></br>
                    When your mind is telling you that you’re done, that you’re exhausted, that you cannot possibly go any further,  you’re only actually 40% done.
                    </br><b>"Fight Until Die"</b></br>
                    STOP Working , Dreaming , Grinding only if you have acheived your goal or you are getting a deep sleep 
                    in a coffin.
                    `
                ),
                new queans(
                    "WHAT I LIKE?",
                    `I like to learn new stuff in the field of <b>'Fitness','Food','Cinema'</b>and<b> 'Music'</b>.</br>
                     I have practiced Traditional Wrestling ,Aesthetics,Calisthenics and Pilates exercises.
                     Diet plays an important role in fitness , so i have also a bit knowledge of nutrition.
                     </br>
                     I have a great interest in cinema .I like to watch Movies , Web series , Theatre dramas of every genre.
                     I also like to listen music of every genre and of many different languages , whether i understand or not,HAHAHA.</br>
                     so,that's what i am...`
                    
                ),

];
var st="";
for(i=1;i<queanslist.length;i++){
    st+=`<div class="rightpart">
    <div class="question">
        <p>`+queanslist[i].que+`</p>
    </div>
    <div class="answer">
        <p> `+queanslist[i].ans+`                                      
        </p>
    </div>
    </div>`;
}
var populator = document.querySelector(".rightp");
populator.innerHTML=st;
