function categories(id,title,content,background,backgroundl,bloglist){
    this.id = id;
    this.title = title;
    this.content = content;
    this.background=background;
    this.backgroundl=backgroundl;
    this.bloglist = bloglist;
    
}

var categoryobj=["",
                 new categories(
                                "c1",
                                "ARTIFICIAL INTELLIGENCE",
                                `This Section contains some intelligent Products On which I have worked or working.
                                 It contains my work in the field of Artificial Intelligence.It Contains Project Related to
                                 Machine Learning , Image Manipulation And Data Science.
                                 `,
                                `background-position-x: 50%; 
                                background-position-y:50%;
                                background-image: url(assets/img/AI.jpg);background-repeat: no-repeat;
                                background-size:30vw`,
                                `background-color:black;`,
                                [["c1b1","URLANE"]]
                    ),
                 new categories(
                                "c2",
                                "ASP.NET",
                               ` This section contains some Systems that i have developed using ASP.NET .
                                 These Systems mainly contain the functionality related to Ado.net 
                                `,
                                 `
                                 background-position-x: 50%; 
                                 background-position-y: 45%;
                                 background-repeat: no-repeat;
                                 background-image: url(assets/img/asp8.png);
                                 `,
                                 `background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);`,
                                [["c2b1","FOOD ORDERING SYSTEM"],["c2b2","STOCK MANAGMENT SYSTEM"]]
                   ),
                new categories(
                                "c3",
                                "ALGORITHMIC DESIGN",
                                `This Section contains Projects in which major part is algorithm designing and 
                                 implementing . I have created blogs about what is the main functioning of algorithms 
                                 and how my program works? and what is the flow of control of Algorithm? `,
                                `background-position-x: 50%; 
                                background-position-y:50%;
                                background-image: url(assets/img/algo2.jpg);background-repeat: no-repeat;
                                background-size:30vw`
                                ,
                                `background:black`,
                                [["c3b1","IMAGE TO TEXT CONVERTER"],["c3b2","TEXT TO IMAGE CONVERTER"]]
                   ),
                new categories(
                                "c4",
                                "CODING COMPETITIONS",
                                `These are some coding contest in which I have participated
                                 and I have created blogs about my experience . The  Blogs include details of questions
                                 related to that exam ,what are the mistakes that you should avoid?`,
                                `
                                background-position-x: 50%; 
                                background-position-y: 45%;
                                background-image: url(assets/img/code2.png);background-repeat: no-repeat;`,
                                `background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);`,
                                [["c4b1","INFYTQ"],["c4b2","TCS CODEVITA"],["c4b3","INFYTQ LEVEL2"]]
                   ),
                ];
var st="";
var bloglist,title,content;
var st2="";
var i;
var j;
for (i = 1 ; i<categoryobj.length ; i++ ){
    bloglist = categoryobj[i].bloglist;
    title = categoryobj[i].title;
    content = categoryobj[i].content;
    background = categoryobj[i].background;
    backgroundl = categoryobj[i].backgroundl;
    st2="";
    for(j = 0 ; j<bloglist.length ; j++){
                var id = bloglist[j][0]
                st2 +=`<li>
                       <button id='b`+i+``+j+`' onclick="window.location='projectblog.html?id=`+id+`';">`+bloglist[j][1]+`</button> 
                       </li> `;
        }
    st+=`<div class = "categorybox" style="`+backgroundl+`">
            <div style="`+background+`">
            <div class = "left">
                <div class ="title">
                    `+title+`
                </div>
                <div class ="content">
                    `+content+`
                </div>
            </div>
            <div class = "right">
                <div class = "buttonlist">
                    <ul>
                    `+st2+`
                    </ul>
                </div>
            </div>
            </div>
        </div>`;
}
var populator = document.querySelector("#middle");
populator.innerHTML= ` <div class = "pblogs">
                        Project Blogs
                        </div>`+st+``;