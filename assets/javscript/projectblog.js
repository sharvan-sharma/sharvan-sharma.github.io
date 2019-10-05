function blog(id,name,tags,contentarr){
    this.id=id;
    this.name = name;
    this.tags = tags;
    this.contentarr = contentarr;
}
var blogcontent = [
                   "",
                   new blog(   "c1b1",
                               "URLANE",
                               ['AI','TKINTER','OPENCV','PYTHON','ALGO DESIGN','HACKHATHON'],
                                [  [ "Introduction" , [`It is a smart and intellignet software which can detect number of vehicles
                                                         present in each lane at the tolls.It takes the square shaped picture of the area which is 100-200 m
                                                         apart from the toll station and then it divide that image in the form of grids and then
                                                         predict that Is there anything present in that grid?.We have designed an algorithm which generates
                                                         some data in the form of numbers about single grid and with the help of naive bayes algorithm 
                                                         of machine learning ,the machine predicts whether there is a object or not? This project is based on 
                                                         image maninpulation .We have used Pillow library of python for image manipulation.There are some images
                                                         :<br><hr ><r>
                                                         <center><img src="./assets/img/blogimages/sp6.png" width=200px></img></center>
                                                         The Image after processing 
                                                         <br><hr>
                                                         <br>
                                                         <center><img src="./assets/img/blogimages/sp6n.png" width=200px></img></center>`] ],  
                                    [ "Features" , [`The main feature of this python app is , Its Precision.The Algorihm is fast and efficient than
                                                     other image scaning algorithms like r-cnn,fast r-cnn because instead of scaning entire grid.our algorithm
                                                     scans only 5-10% pixels of grid and generate the result and the result is again fed as input to another machine learning
                                                     classification algorithm.`
                                                   ] ] ,
                                    [ "Challenges " ,  [
                                                        `<h4>Grid Scaning Algorithm</h4><br><br>
                                                        Main problem while designing the algorithm is' Not to scan entire grid pixels ' So we have to scan
                                                        the grid pixels in a way that we can predict accurately using less pixel.After considering different shapes
                                                        to scan the grid like we use circle,triangle,square and many other.we select a shape which is like
                                                        <br>
                                                        <center><img src="./assets/img/blogimages/pattern.png" width=200px></img></center>
                                                        <br>
                                                        This shape covers the entire grid and while scaning in this way we store the pixel change according to initial value.
                                                        of that pixel when there is no object.then we generate a number for each line in this shape.we use bresenhams line
                                                        scaning algorithm for scaning.
                                                        
                                                        `,
                                                        `<br><br><h4>Defining variables for Machine learning Classifiction Algorithm</h4><br><br>
                                                        Another challenge is to define the variables for classiification,According to our pattern we have
                                                        data of 18 lines so we divide this pattern into different sections like 4 square and  2 diagonals.
                                                        first we take the values (percentage change of pixels over total pixel scanned in a line) of four lines
                                                        and then we apply classification algorithm and generate the value in 0(for object not present) and 1(for object present)
                                                        and after applying this on each square and diagonal we have six values in the form of 0 and 1 .Then we again apply
                                                        classification algorithm on this data and make our final prediction over that grid.
                                                        `
                                                        ]],
                                    ['Github link',[`<a href ="https://github.com/ravgeetdhillon/urlane">
                                                     Click here to visit the github repository</a>`]]
                                ]
                           ),
                    new blog(   "c2b1",
                                "RESTROBAR",
                                ['ADO.NET','MYSQL','FOOD ORDERING SYSTEM','SYSTEM ANALYSIS','SYSTEM DESIGN','HTML','CSS','JAVASCRIPT'],
                                [  ["Introduction" , [`This project is similar to existing online food ordering systems like zomato,swiggy and uber eats.
                                                        I made this project as a practical implementation of some subjects in my course like Asp.net ,
                                                        DBMS and System Analysis and Design . I created a website using ASP.NET framework (C# as backend
                                                        scripting language) and MySql as database managment system , which accepts food orders from the given
                                                        list of food items.I created this website for two kinds of users , one is for customer and another for
                                                        the restaurant order reciever. I solely perform every step of SDLC from Getting User Requirement to testing.
                                                        This was my first project in which i worked as full stack developer.`] ]  , 
                                    [ "challenges " ,  [
                                                        `<h4>Database Design</h4><br><br>
                                                        This was one of the difficult task because this is the first time i was designing the database for
                                                        system and applying my theoretical knowledge into practical work.I have to make the normalised database
                                                        as well as i have to link the different data tables . Understanding the flow of control in database is one of the
                                                        difficult tasks.<br>
                                                        <br>`,
                                                        `<h4>Generating a Unique Order Number</h4><br><br>
                                                        The another major problem is how to generate a unique order number for every order placed by single user.For multiple users
                                                        the differentiation is easy ,we can differentiate them on the basis of there userid but for the same user how we can differentiate
                                                        when the orders are different.so I add a column which contains a number to each row in user database which represent 
                                                        the number of order that the user has placed and every time when user place an order the number was incremented and we create a unique table
                                                        with a name as 'userid + thatnumber' for example the number stored to userid 'jeffscott' is 10 means that jeff has placed
                                                        10 order uptill when jeff place an order,A new table is generated in database as 'jeffscott11' which is unique and this table rows stores
                                                        information about items and there quantity and prices. `
                                                        ]
                                    ],
                                    ['Github link',[`<a href ="https://github.com/sharvan-sharma/restaurant-website">
                                    Click here to visit the github repository</a>`]]
                                ]
                           )
                           ,
                    new blog(   "c2b2",
                                "STOCK MANAGMENT SYSTEM",
                                ['ADO.NET','MS-SQL SERVER','HTML/CSS','SYSTEM DESIGN','DATABASE DESIGN'],
                                [ ["", [`<b>Blog Is Under Construction.</b><br>Content for this blog will be updated soon.<br>
                                           <img style="width:60%" src = "./assets/img/blogimages/404.png" `] ] ]
                            ),
                    new blog(   "c3b1",
                                "IMAGE TO TEXT CONVERTER",
                                ['ALGO DESIGN','PYTHON','PROGRAMMING','PROBLEM SOLVING'],
                                [ ["", [`<b>Blog Is Under Construction.</b><br>Content for this blog will be updated soon.<br>
                                <img style="width:60%" src = "./assets/img/blogimages/404.png" `] ] ]
                            ),
                    new blog(   "c3b2",
                                "TEXT TO IMAGE CONVERTER",
                                ['ALGO DESIGN','PYTHON','PROGRAMMING','PROBLEM SOLVING','NETWORKING','ENCRYPTION'],
                                [ ["", [`<b>Blog Is Under Construction.</b><br>Content for this blog will be updated soon.<br>
                                           <img style="width:60%" src = "./assets/img/blogimages/404.png" `] ] ]
                            ),
                    new blog(   "c4b1",
                                "INFYTQ",
                                ['INFOSYS CERTIFICATION','PYTHON','DS','DBMS'],
                                [ ["", [`<b>Blog Is Under Construction.</b><br>Content for this blog will be updated soon.<br>
                                           <img style="width:60%" src = "./assets/img/blogimages/404.png" `] ] ]
                            ), 
                    new blog(   "c4b2",
                                "TCS CODEVITA",
                                ['PROBLEM SOLVING','6 HOUR CONTEST'],
                                [ ["", [`<b>Blog Is Under Construction.</b><br>Content for this blog will be updated soon.<br>
                                           <img style="width:60%" src = "./assets/img/blogimages/404.png" `] ] ]
                             ), 
                     new blog(   "c4b3",
                                "INFYTQ LEVEL-2",
                                ['INFOSYS','LEVEL 2','3 HOURS 3 QUESTION'],
                                [ ["", [`<b>Blog Is Under Construction.</b><br>Content for this blog will be updated soon.<br>
                                           <img style="width:60%" src = "./assets/img/blogimages/404.png" `] ] ]
                            ),     
                ];
//getting the id of blogcontent list
var url = new URL(window.location.href);
var vid= url.searchParams.get("id");
var id=0;var fg="not found";
for(i=0;i<blogcontent.length;i++){
    if (vid === blogcontent[i].id){
       id=i;
       fg="found";
       break
    }
}
if (fg ==="not found"){
    window.location.href="404.html"
}
//object passing to variable
var introduction = blogcontent[id].introduction;
///creating tagstring
var tagstring = "";
var taglist = blogcontent[id].tags; //accessing the tags list  from object
for(j = 0  ; j < taglist.length ; j++){
   tagstring +="<li>"+ taglist[j] +"</li>";
}
var contentarr = blogcontent[id].contentarr;
var st = "";
var st2 ="";
for( k = 0 ; k < contentarr.length ; k++){
    for( t = 0;t < contentarr[k][1].length; t++ ){
            st2 +=`<p>`+contentarr[k][1][t]+`</p><br>` 
    }
    st += `<div class = "header">
                <h2><u>`+contentarr[k][0]+`</u></h2> 
            </div>
            <div class = "headercontent">
                `+st2+`
            </div>`;
    st2 = ""
}
var rightpopulate = document.querySelector("#right .middle");
rightpopulate.innerHTML = ``+st+``;
// project name
var projectname = blogcontent[id].name;
//inner 
var leftpopulate = document.querySelector("#left .middle");
leftpopulate.innerHTML = `
                            <div class = "blogname">
                            <p>`+projectname+`</p>
                            </div>
                            <div class = "blogtags">
                            <ul>
                               `+tagstring+`
                            </ul>
                            </div>
                          `;

