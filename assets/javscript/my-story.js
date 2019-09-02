function queans(que,ans){
    this.que = que;
    this.ans = ans;
}
var queanslist=["",
                 new queans(
                     "WHO I AM?",
                     `HELLO!
                     My name is Sharvan sharma.I live in Amritsar,punjab,india.I am pursuing Btech in computer science
                     from Guru Nanak Dev University,Amritsar.I have keen interest in developing products based on 
                     Artificial intelligence and Algorithmic design.I have contributed in some minor projects as algorithm 
                     designer.I have 1.5 year of competitive coding experience in PYTHON and I am 5 star programmer at 
                     hackerrank in problem solving section.I have experience of many minor projects in front-end development,
                     this website is one of them.Currently,I am full stack developer in Asp.net.
                    </br>
                     I have interest in learning new things in field of 'fitness','food','cinema'and 'music'.
                     In my life i have practiced traditional wrestling exercises,aesthetics,calisthenics 
                     and pilates exercises.Diet plays an important role in fitness,so i have also a bit knowledge of
                     nutrition.
                     </br>
                     I have huge interest in cinema also.I like to watch movies,web series,theatre dramas of every genre.
                     I also like to listen music of every genre and many languages ,whether i understad or not,HAHAHA.
                     so,basically that's what i am...
                     `
                 ),
                 new queans(
                    "WHAT I FOLLOW?",
                   `Basically, I follow some affirmations,one of them is written in my description box,and others are:
                    </br></br>"The 40% rule"</br></br>
                    which says,when you feel that you are fully exhausted then in actual you are 
                    40% exahausted.and the other one is
                    </br></br>"Fight Until Die"</br></br>
                    which says,your problems are going to over only after your time is over on this planet.
                    so fight back if you are alive'
                    `
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