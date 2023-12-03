import {devilFruits, logia, parBody, parEnv, parPow, parSub, zoanAnicent, zoanMythical, zoanNormal} from './data.js';



function search(){

    let input;
   
document.getElementById("searchBar").addEventListener("keyup", function(){
    document.getElementById("searchBox").style.display = "block";
        input = document.getElementById("searchBar").value;
        document.getElementById("allFruit").style.display = "block";
        input = input.toLowerCase();
        
        bottons();
        getLogia();
        getZoan();
        getParamecia();
});

}

function exit(){
    document.getElementById("wrapper").onclick = function() {
        document.getElementById("searchBox").style.display = "none";
        document.getElementById("searchBar").value = "";
        document.getElementById("allFruit").style.display = "none";
    };

    document.getElementById("infoPage").onclick = function() {
        document.getElementById("searchBox").style.display = "none";
        document.getElementById("searchBar").value = "";
        document.getElementById("allFruit").style.display = "none";
    };

    document.getElementById("searchBar").addEventListener("keyup", function(event){

        if(event.key === "Enter"){
            document.getElementById("searchBox").style.display = "none";
            document.getElementById("searchBar").value = "";
            document.getElementById("allFruit").style.display = "none";
        }
    });

    document.getElementById("allFruit").onclick = function() {
        document.getElementById("searchBox").style.display = "none";
        document.getElementById("searchBar").value = "";
        document.getElementById("allFruit").style.display = "none";
        document.getElementById("fruitButton").style.display = "none";
        document.getElementById("user").style.display = "none";
        document.getElementById("fruits").style.display = "block";
        document.getElementById("Ufruit").style.opacity = 1;
    };

    document.getElementById("searchBar").addEventListener("keyup", function(event){
        if( document.getElementById("searchBar").value == ""){
            document.getElementById("searchBox").style.display = "none";
            document.getElementById("allFruit").style.display = "none";
        }
       
    });

}

function bottons(){
    let data = '';

for(let i = 0; i < logia.length; i++){
    data += '<button id="log' + i + '">' + logia[i].name + '<br>' + logia[i].jname + '</button>';
}

for(let i = 0; i < zoanNormal.length; i++){
    data += '<button id="Normal' + i + '">'+ zoanNormal[i].name + '<br>' + zoanNormal[i].jname + '</button>';
}

for(let i = 0; i < zoanAnicent.length; i++){
    data += '<button id="Anicent' + i + '">'+ zoanAnicent[i].name + '<br>' + zoanAnicent[i].jname + '</button>';
}

for(let i = 0; i < zoanMythical.length; i++){
    data += '<button id="Mythical' + i + '">'+ zoanMythical[i].name + '<br>' + zoanMythical[i].jname + '</button>';
}

for(let i = 0; i < parBody.length; i++){
    data += '<button id="Body' + i + '">'+ parBody[i].name + '<br>' + parBody[i].jname + '</button>';
}

for(let i = 0; i < parEnv.length; i++){
    data += '<button id="Env' + i + '">'+ parEnv[i].name + '<br>' + parEnv[i].jname + '</button>';
}

for(let i = 0; i < parSub.length; i++){
    data += '<button id="Sub' + i + '">'+ parSub[i].name + '<br>' + parSub[i].jname + '</button>';
}

for(let i = 0; i < parPow.length; i++){
    data += '<button id="Pow' + i + '">'+ parPow[i].name + '<br>' + parPow[i].jname + '</button>';
}

document.getElementById('allFruit').innerHTML = data; 
}

function getLogia(){
    document.getElementById('fruits').style.opacity = 1;
            document.querySelector('#pbutton').style.display = "none";
                document.querySelector('#optionBox').style.display = "none";
                    document.querySelector('#gifters').style.display = 'none';
                        document.querySelector('#kaido').style.display = 'none';
                            document.querySelector('#smile').style.display = 'none';
    for(let i = 0; i < logia.length; i++){
        let option = document.getElementById('log'+ i); 
            
             option.onclick = function(){
                 console.log(option);
                     document.getElementById('Dname').innerHTML = logia[i].name + " (" + logia[i].jname + ")";
                         document.getElementById('Duser').innerHTML = logia[i].user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ logia[i].element;
                             document.getElementById('Dinfo').innerHTML = logia[i].info;
                                 document.getElementById('extra').innerHTML =logia[i].manga + "<br>" + logia[i].anime;
                                     document.getElementById('fruits').src = logia[i].fruit;
                                         document.getElementById('user').src = logia[i].aCharacter;

                                            logia[i].character == null? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
                                                    document.getElementById('char').src = logia[i].character;

                                             logia[i].fruit == null? document.getElementById('hat').style.display = "none": document.getElementById('hat').style.display = "block";
                                         
                                             logia[i].fruit == null? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";


                                             logia[i].fruit == null? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
                                                 document.getElementById('user1').src = logia[i].aCharacter;
                                             
                                             logia[i].ufruit == ""? console.log("...") : document.getElementById('userButton').style.display = "block";

                                             logia[i].ufruit == ""? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
                                                 document.getElementById('Ufruit').src = logia[i].ufruit;

                                             logia[i].fruitBox == ""? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                                 document.getElementById('fruitBox').src = logia[i].fruitBox;

                                             logia[i].imgInfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                                 document.getElementById('imgInfo').src = logia[i].imgInfo;
                                       
                             document.getElementById('infoPage').style.display = "block";
                         document.querySelector('#optionBox').style.display = "none"; 
                     document.getElementById('wrapper').style.display = "none";
             }
            
     }     
}

function getZoan(){
    
    for(let i = 0; i < zoanNormal.length; i++){
        let option = document.getElementById('Normal'+ i); 
            
             option.onclick = function(){
                 console.log(option);
                     document.getElementById('Dname').innerHTML = zoanNormal[i].name + " (" + zoanNormal[i].jname + ")";
                        document.getElementById('Duser').innerHTML = zoanNormal[i].user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ zoanNormal[i].element;
                            document.getElementById('Dinfo').innerHTML = zoanNormal[i].info;
                                document.getElementById('extra').innerHTML =zoanNormal[i].manga + "<br>" + zoanNormal[i].anime;
                                    document.getElementById('fruits').src = zoanNormal[i].fruit;
                                        document.getElementById('user').src = zoanNormal[i].aCharacter;
                                            document.getElementById('char').style.display = "block";

                                        zoanNormal[i].fruit == null? document.getElementById('hat').style.display = "none": document.getElementById('hat').style.display = "block";
                                        
                                        zoanNormal[i].fruit == null? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
                                        document.getElementById('user1').src = zoanNormal[i].aCharacter;
                                    
                                        zoanNormal[i].fruit == null? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

                                        zoanNormal[i].ufruit == null? console.log("...") : document.getElementById('userButton').style.display = "block";

                                        zoanNormal[i].fruitBox == null? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                            document.getElementById('fruitBox').src = zoanNormal[i].fruitBox;

                                        zoanNormal[i].character == null? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
                                            document.getElementById('char').src = zoanNormal[i].character;

                                        zoanNormal[i].ufruit == null? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
                                            document.getElementById('Ufruit').src = zoanNormal[i].ufruit;

                                        zoanNormal[i].imgInfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                            document.getElementById('imgInfo').src = zoanNormal[i].imgInfo;

                             document.getElementById('infoPage').style.display = "block";
                         document.querySelector('#optionBox').style.display = "none"; 
                     document.getElementById('wrapper').style.display = "none";
                }    
        } 

        for(let i = 0; i < zoanAnicent.length; i++){
            let option = document.getElementById('Anicent'+ i); 
                
                 option.onclick = function(){
                     console.log(option);
                         document.getElementById('Dname').innerHTML = zoanAnicent[i].name + " (" + zoanAnicent[i].jname + ")";
                            document.getElementById('Duser').innerHTML = zoanAnicent[i].user  + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ zoanAnicent[i].element;
                                document.getElementById('Dinfo').innerHTML = zoanAnicent[i].info;
                                    document.getElementById('extra').innerHTML =zoanAnicent[i].manga + "<br>" + zoanAnicent[i].anime;
                                        document.getElementById('fruits').src = zoanAnicent[i].fruit;
                                            document.getElementById('user').src = logia[i].aCharacter;
    
                                            zoanAnicent[i].fruit == null? document.getElementById('hat').style.display = "none": document.getElementById('hat').style.display = "block";                                 
    
                                            zoanAnicent[i].fruit == null? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
                                            document.getElementById('user1').src = zoanAnicent[i].aCharacter;
    
                                            zoanAnicent[i].fruit == null? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";
    
                                            zoanAnicent[i].ufruit == null? console.log("...") : document.getElementById('userButton').style.display = "block";
    
                                            zoanAnicent[i].fruitBox == ""? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                                document.getElementById('fruitBox').src = zoanAnicent[i].fruitBox;
    
                                            zoanAnicent[i].imgInfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                                document.getElementById('imgInfo').src = zoanAnicent[i].imgInfo;
    
                                 document.getElementById('infoPage').style.display = "block";
                             document.querySelector('#optionBox').style.display = "none"; 
                         document.getElementById('wrapper').style.display = "none";
                    }    
            }

            for(let i = 0; i < zoanMythical.length; i++){
                let option = document.getElementById('Mythical'+ i);
                    
                     option.onclick = function(){
                         console.log(option);
                             document.getElementById('Dname').innerHTML = zoanMythical[i].name + " (" + zoanMythical[i].jname + ")";
                                document.getElementById('Duser').innerHTML = zoanMythical[i].user  + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ zoanMythical[i].element;
                                    document.getElementById('Dinfo').innerHTML = zoanMythical[i].info;
                                        document.getElementById('extra').innerHTML =zoanMythical[i].manga + "<br>" + zoanMythical[i].anime;
                                            document.getElementById('fruits').src = zoanMythical[i].fruit;
                                                document.getElementById('user').src = zoanMythical[i].aCharacter;
        
                                            zoanMythical[i].fruit == null? document.getElementById('hat').style.display = "none": document.getElementById('hat').style.display = "block";
        
                                            zoanMythical[i].fruit == null? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
                                                document.getElementById('user1').src = zoanMythical[i].aCharacter;
        
                                            zoanMythical[i].fruit == null? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";
        
                                            zoanMythical[i].ufruit == null? console.log("...") : document.getElementById('userButton').style.display = "block";
        
                                            zoanMythical[i].ufruit == null? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
                                                document.getElementById('Ufruit').src = zoanMythical[i].ufruit;
        
                                            zoanMythical[i].fruitBox == ""? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                                document.getElementById('fruitBox').src = zoanMythical[i].fruitBox;
                           
                                            zoanMythical[i].imgInfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                                document.getElementById('imgInfo').src = zoanMythical[i].imgInfo;
        
                                     document.getElementById('infoPage').style.display = "block";
                                 document.querySelector('#optionBox').style.display = "none"; 
                             document.getElementById('wrapper').style.display = "none";
                     }
            }
}

function getParamecia(){
    for(let i = 0; i < parBody.length; i++){
        let option = document.getElementById('Body'+ i); 
            
             option.onclick = function(){
                 console.log(option);
                     document.getElementById('Dname').innerHTML = parBody[i].name + " (" + parBody[i].jname + ")";
                        document.getElementById('Duser').innerHTML = parBody[i].user  + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ parBody[i].element;
                            document.getElementById('Dinfo').innerHTML = parBody[i].info;
                                document.getElementById('extra').innerHTML =parBody[i].manga + "<br>" + parBody[i].anime;
                                    document.getElementById("fruits").src = parBody[i].fruit;
                                        document.getElementById('user').src = parBody[i].aCharacter;

                            parBody[i].fruit == null? document.getElementById('hat').style.display = "none": document.getElementById('hat').style.display = "block";

                            parBody[i].fruit == null? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
                                document.getElementById('user1').src = parBody[i].aCharacter;
                                        
                            parBody[i].fruit == null? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";
    
                            parBody[i].ufruit == null? console.log("...") : document.getElementById('userButton').style.display = "block";
    
                            parBody[i].ufruit == null? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
                                document.getElementById('Ufruit').src = parBody[i].ufruit;

                            parBody[i].imgInfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                document.getElementById('imgInfo').src = parBody[i].imgInfo;
                                         
                            parBody[i].fruitBox ==   null? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                document.getElementById('fruitBox').src = parBody[i].fruitBox;

                             document.getElementById('infoPage').style.display = "block";
                         document.querySelector('#optionBox').style.display = "none"; 
                     document.getElementById('wrapper').style.display = "none";
            }    
    }

    for(let i = 0; i < parEnv.length; i++){
        let option = document.getElementById('Env'+ i); 
            
             option.onclick = function(){
                 console.log(option);
                     document.getElementById('Dname').innerHTML = parEnv[i].name + " (" + parEnv[i].jname + ")";
                        document.getElementById('Duser').innerHTML = parEnv[i].user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ parEnv[i].element;
                            document.getElementById('Dinfo').innerHTML = parEnv[i].info;
                                document.getElementById('extra').innerHTML =parEnv[i].manga + "<br>" + parEnv[i].anime;
                                    document.getElementById('fruits').src = parEnv[i].fruit;
                                        document.getElementById('user').src = parEnv[i].aCharacter;

                        parEnv[i].fruit == null? document.getElementById('hat').style.display = "none": document.getElementById('hat').style.display = "block";

                        parEnv[i].fruit == null? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
                            document.getElementById('user1').src = parEnv[i].aCharacter;
                            
                        parEnv[i].fruit == null? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

                        parEnv[i].ufruit == null? console.log("...") : document.getElementById('userButton').style.display = "block";

                        parEnv[i].ufruit == null? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
                            document.getElementById('Ufruit').src = parEnv[i].ufruit;

                        parEnv[i].imgInfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                            document.getElementById('imgInfo').src = parEnv[i].imgInfo;
                                     
                        parEnv[i].fruitBox ==   null? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                            document.getElementById('fruitBox').src = parEnv[i].fruitBox;

                             document.getElementById('infoPage').style.display = "block";
                         document.querySelector('#optionBox').style.display = "none"; 
                     document.getElementById('wrapper').style.display = "none";
             }    
    }

    for(let i = 0; i < parSub.length; i++){
        let option = document.getElementById('Sub'+ i); 
            
             option.onclick = function(){
                 console.log(option);
                     document.getElementById('Dname').innerHTML = parSub[i].name + " (" + parSub[i].jname + ")";
                        document.getElementById('Duser').innerHTML = parSub[i].user  + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ parSub[i].element;
                            document.getElementById('Dinfo').innerHTML = parSub[i].info;
                                document.getElementById('extra').innerHTML =parSub[i].manga + "<br>" + parSub[i].anime;
                                    document.getElementById('fruits').src = parSub[i].fruit;
                                        document.getElementById('user').src = parSub[i].aCharacter;

                            parSub[i].fruit == null? document.getElementById('hat').style.display = "none": document.getElementById('hat').style.display = "block";

                            parSub[i].fruit == null? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
                                document.getElementById('user1').src = parSub[i].aCharacter;
                            
                            parSub[i].fruit == null? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

                            parSub[i].ufruit == null? console.log("...") : document.getElementById('userButton').style.display = "block";

                            parSub[i].ufruit == null? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
                                document.getElementById('Ufruit').src = parSub[i].ufruit;

                            parSub[i].imgInfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                document.getElementById('imgInfo').src = parSub[i].imgInfo;
                                         
                            parSub[i].fruitBox ==   null? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                document.getElementById('fruitBox').src = parSub[i].fruitBox;

                            parSub[i].character == null? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
                                document.getElementById('char').src = parSub[i].character;
                  
                                document.getElementById('infoPage').style.display = "block";
                         document.querySelector('#optionBox').style.display = "none"; 
                     document.getElementById('wrapper').style.display = "none";
             }    
    }
    for(let i = 0; i < parPow.length; i++){
        let option = document.getElementById('Pow'+ i); 
            
             option.onclick = function(){
                 console.log(option);
                     document.getElementById('Dname').innerHTML = parPow[i].name + " (" + parPow[i].jname + ")" ;
                        document.getElementById('Duser').innerHTML = parPow[i].user  + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ parPow[i].element;
                            document.getElementById('Dinfo').innerHTML = parPow[i].info;
                                document.getElementById('extra').innerHTML =parPow[i].manga + "<br>" + parPow[i].anime;
                                    document.getElementById('fruits').src = parPow[i].fruit ;
                                        document.getElementById('user').src = parPow[i].aCharacter;

                                    parPow[i].fruit == null? document.getElementById('hat').style.display = "none": document.getElementById('hat').style.display = "block";

                                    parPow[i].fruit == null? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
                                        document.getElementById('user1').src = parPow[i].aCharacter;
                                                
                                    parPow[i].fruit == null? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";
            
                                    parPow[i].ufruit == null? console.log("...") : document.getElementById('userButton').style.display = "block";
            

                                    parPow[i].ufruit == null? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
                                        document.getElementById('Ufruit').src = parPow[i].ufruit;

                                    parPow[i].imgInfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                        document.getElementById('imgInfo').src = parPow[i].imgInfo;
                                                 
                                    parPow[i].fruitBox ==   null? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                        document.getElementById('fruitBox').src = parPow[i].fruitBox;

                             document.getElementById('infoPage').style.display = "block";
                         document.querySelector('#optionBox').style.display = "none"; 
                     document.getElementById('wrapper').style.display = "none";
             }    
    }
}

search();
exit();