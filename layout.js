import {devilFruits, zoanArtificial} from './data.js';

function fruits(){
//Print logia fruits
document.getElementById('ld').onclick = function (){
    //query selectors turning certain things off and on
document.getElementById('fruits').style.opacity = 1;
    document.querySelector('#oz1').style.display = "none";
        document.querySelector('#op1').style.display = "none";
            document.querySelector('#pbutton').style.display = "none";
                document.querySelector('#oz').style.display = "none";
                    document.querySelector('#oz1').style.display = "none";
                        document.querySelector('#op').style.display = "none";
                            document.querySelector('#optionBox').style.display = "block";
                                document.querySelector('#gifters').style.display = 'none';
                                    document.querySelector('#kaido').style.display = 'none';
                                        document.querySelector('#smile').style.display = 'none';
                                            document.getElementById('fruits').style.display = 'block';
                                                document.getElementById('Ufruit').style.display = "none";
                                                    document.getElementById('char').style.display = "none";
                                                        document.getElementById('imgInfo').style.display = "none";
                                                            document.getElementById('smileFruit').style.display = 'none';
    //loop that prints all the names and japanes names of the devil fruits and appends them as button into a ul
        let data = '';
            for(let i = 0; i < devilFruits.length; i++){
                if(devilFruits[i].type === "logia"){
                data += '<button id="logia' + i + '">' + devilFruits[i].name + '<br>' + devilFruits[i].jname + '</button>';
                }
            }
            document.querySelector('#oL').style.display = "flex";
        document.getElementById('oL').innerHTML = data;
    //second for loop that activates when you click on a certain index. Grabs the index and paste it as the i value only printing out the values for that object
        for(let i = 0; i < devilFruits.length; i++){
            if(devilFruits[i].type === "logia"){
           let option = document.getElementById('logia'+ i); 
           
                option.onclick = function(){
                    console.log(option);
                        document.getElementById('Dname').innerHTML = devilFruits[i].name + " (" + devilFruits[i].jname + ")";
                            document.getElementById('Duser').innerHTML = devilFruits[i].user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ devilFruits[i].element;
                                document.getElementById('Dinfo').innerHTML = devilFruits[i].info;
                                    document.getElementById('extra').innerHTML =devilFruits[i].manga + "<br>" + devilFruits[i].anime;
                                        document.getElementById('fruits').src = devilFruits[i].fruit;
                                            document.getElementById('user').src = devilFruits[i].acharacter;

                                                devilFruits[i].fruit == null? document.getElementById('hat').style.display = "none": document.getElementById('hat').style.display = "block";
                                            
                                                devilFruits[i].fruit == null? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

                                                devilFruits[i].fruit == null? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
                                                    document.getElementById('user1').src = devilFruits[i].acharacter;
                                                
                                                devilFruits[i].ufruit == ""? console.log("...") : document.getElementById('userButton').style.display = "block";

                                                devilFruits[i].ufruit == ""? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
                                                    document.getElementById('Ufruit').src = devilFruits[i].ufruit;

                                                devilFruits[i].fruitbox == ""? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                                    document.getElementById('fruitBox').src = devilFruits[i].fruitbox;

                                                devilFruits[i].imginfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                                    document.getElementById('imgInfo').src = devilFruits[i].imginfo;
                                          
                                document.getElementById('infoPage').style.display = "block";
                            document.querySelector('#optionBox').style.display = "none"; 
                        document.getElementById('wrapper').style.display = "none";
                }
               
        } else{
        //for some reason without this else statement the code doesnt work it can be completely emtpy but without the code falls apart.
        }
    }     
};


//print zoan fruits
document.getElementById('zd').onclick = function (){
    document.querySelector('#oz1').style.display = "none";
        document.querySelector('#op1').style.display = "none";
            document.querySelector('#pbutton').style.display = "none";
                document.querySelector('#oL').style.display = "none";
                    document.querySelector('#op').style.display = "none";
                        document.querySelector('#optionBox').style.display = "block";
                            document.querySelector('#oz').style.display = "block";
                                document.querySelector('#zbutton').style.display = "block";
                                    document.querySelector('#gifters').style.display = 'none';
                                        document.querySelector('#kaido').style.display = 'none';
                                            document.querySelector('#smile').style.display = 'none';
                                                document.getElementById('Ufruit').style.display = "none"
                                                    document.getElementById('char').style.display = "none";
                                                        document.getElementById('imgInfo').style.display = "none";
                                                            document.getElementById('fruits').style.display = 'block';
                                                                document.getElementById('smileFruit').style.display = 'none';
                                                                    document.getElementById('fruits').style.opacity = 1;
//print normal zoan        
document.getElementById('normal').onclick = function (){
    document.querySelector('#back').style.display = "block";
        document.querySelector('#zbutton').style.display = "none";
        let data = '';
            for(let i = 0; i < devilFruits.length; i++){
                if(devilFruits[i].type === "zoannormal"){
                data += '<button id="zoannormal' + i  + '">'+ devilFruits[i].name + '<br>' + devilFruits[i].jname + '</button>';
                }
            }
        document.querySelector('#oz1').style.display = "flex";
    document.getElementById('oz1').innerHTML = data;

    for(let i = 0; i < devilFruits.length; i++){
        if(devilFruits[i].type === "zoannormal"){
        let option = document.getElementById('zoannormal'+ i); 
            
             option.onclick = function(){
                 console.log(option);
                     document.getElementById('Dname').innerHTML = devilFruits[i].name + " (" + devilFruits[i].jname + ")";
                        document.getElementById('Duser').innerHTML = devilFruits[i].user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ devilFruits[i].element;
                            document.getElementById('Dinfo').innerHTML = devilFruits[i].info;
                                document.getElementById('extra').innerHTML =devilFruits[i].manga + "<br>" + devilFruits[i].anime;
                                    document.getElementById('fruits').src = devilFruits[i].fruit;
                                        document.getElementById('user').src = devilFruits[i].acharacter;

                                        devilFruits[i].fruit == null? document.getElementById('hat').style.display = "none": document.getElementById('hat').style.display = "block";
                                        
                                        devilFruits[i].fruit == null? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
                                        document.getElementById('user1').src = devilFruits[i].acharacter;
                                    
                                        devilFruits[i].fruit == null? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

                                        devilFruits[i].ufruit == null? console.log("...") : document.getElementById('userButton').style.display = "block";

                                        devilFruits[i].fruitbox == null? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                            document.getElementById('fruitBox').src = devilFruits[i].fruitbox;

                                        devilFruits[i].character == null? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
                                            document.getElementById('char').src = devilFruits[i].character;

                                        devilFruits[i].ufruit == null? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
                                            document.getElementById('Ufruit').src = devilFruits[i].ufruit;

                                        devilFruits[i].imginfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                            document.getElementById('imgInfo').src = devilFruits[i].imginfo;

                             document.getElementById('infoPage').style.display = "block";
                         document.querySelector('#optionBox').style.display = "none"; 
                     document.getElementById('wrapper').style.display = "none";
                }
            }else{
                //for some reason without this else statement the code doesnt work it can be completely emtpy but without the code falls apart.
            }    
        } 
 }

 //print ancient zoan        
document.getElementById('ancient').onclick = function (){
    document.querySelector('#back').style.display = "block";
        document.querySelector('#zbutton').style.display = "none";
        let data = '';
            for(let i = 0; i < devilFruits.length; i++){
                if(devilFruits[i].type === "zoananicent"){
                data += '<button id="zoananicent' + i + '">'+ devilFruits[i].name + '<br>' + devilFruits[i].jname + '</button>';
                }
            }
        document.querySelector('#oz1').style.display = "flex";
    document.getElementById('oz1').innerHTML = data;

    for(let i = 0; i < devilFruits.length; i++){
        if(devilFruits[i].type === "zoananicent"){
        let option = document.getElementById('zoananicent'+ i);      
             option.onclick = function(){
                 console.log(option);
                     document.getElementById('Dname').innerHTML = devilFruits[i].name + " (" + devilFruits[i].jname + ")";
                        document.getElementById('Duser').innerHTML = devilFruits[i].user  + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ devilFruits[i].element;
                            document.getElementById('Dinfo').innerHTML = devilFruits[i].info;
                                document.getElementById('extra').innerHTML =devilFruits[i].manga + "<br>" + devilFruits[i].anime;
                                    document.getElementById('fruits').src = devilFruits[i].fruit;
                                        document.getElementById('user').src = devilFruits[i].acharacter;

                                        devilFruits[i].fruit == null? document.getElementById('hat').style.display = "none": document.getElementById('hat').style.display = "block";                                 

                                        devilFruits[i].fruit == null? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
                                        document.getElementById('user1').src = devilFruits[i].acharacter;

                                        devilFruits[i].fruit == null? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

                                        devilFruits[i].ufruit == null? console.log("...") : document.getElementById('userButton').style.display = "block";

                                        devilFruits[i].fruitbox == ""? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                            document.getElementById('fruitBox').src = devilFruits[i].fruitbox;

                                        devilFruits[i].imginfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                            document.getElementById('imgInfo').src = devilFruits[i].imginfo;

                             document.getElementById('infoPage').style.display = "block";
                         document.querySelector('#optionBox').style.display = "none"; 
                     document.getElementById('wrapper').style.display = "none";
                } 
            }else{
                //for some reason without this else statement the code doesnt work it can be completely emtpy but without the code falls apart.
            }   
        }
 }
//print mythical zoan
document.getElementById('mythical').onclick = function (){
    document.querySelector('#zbutton').style.display = "none";
        document.querySelector('#back').style.display = "block";
        let data = '';
            for(let i = 0; i < devilFruits.length; i++){
                if(devilFruits[i].type === "zoanmythical"){
                data += '<button id="zoanMythical' + i + '">'+ devilFruits[i].name + '<br>' + devilFruits[i].jname + '</button>';
                }
            }
        document.querySelector('#oz1').style.display = "flex";
    document.getElementById('oz1').innerHTML = data;

    
    for(let i = 0; i < devilFruits.length; i++){
        if(devilFruits[i].type === "zoanmythical"){
        let option = document.getElementById('zoanMythical'+ i);
            
             option.onclick = function(){
                 console.log(option);
                     document.getElementById('Dname').innerHTML = devilFruits[i].name + " (" + devilFruits[i].jname + ")";
                        document.getElementById('Duser').innerHTML = devilFruits[i].user  + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ devilFruits[i].element;
                            document.getElementById('Dinfo').innerHTML = devilFruits[i].info;
                                document.getElementById('extra').innerHTML =devilFruits[i].manga + "<br>" + devilFruits[i].anime;
                                    document.getElementById('fruits').src = devilFruits[i].fruit;
                                        document.getElementById('user').src = devilFruits[i].acharacter;

                                    devilFruits[i].fruit == null? document.getElementById('hat').style.display = "none": document.getElementById('hat').style.display = "block";

                                    devilFruits[i].fruit == null? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
                                        document.getElementById('user1').src = devilFruits[i].acharacter;

                                    devilFruits[i].fruit == null? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

                                    devilFruits[i].ufruit == null? console.log("...") : document.getElementById('userButton').style.display = "block";

                                    devilFruits[i].ufruit == null? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
                                        document.getElementById('Ufruit').src = devilFruits[i].ufruit;

                                    devilFruits[i].fruitbox == ""? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                        document.getElementById('fruitBox').src = devilFruits[i].fruitbox;
                   
                                    devilFruits[i].imginfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                        document.getElementById('imgInfo').src = devilFruits[i].imginfo;

                             document.getElementById('infoPage').style.display = "block";
                         document.querySelector('#optionBox').style.display = "none"; 
                     document.getElementById('wrapper').style.display = "none";
                }  
            }else{
                //for some reason without this else statement the code doesnt work it can be completely emtpy but without the code falls apart.
            }  
        }
}
//print artificial zoan
document.getElementById('artificial').onclick = function (){
//different then other options in zoan option box as it directlty sends you to first index of the array
    document.querySelector('#zbutton').style.display = "none";
        document.getElementById('smile').style.display = "block";
            document.getElementById('Dname').innerHTML = zoanArtificial[0].name + " (" + zoanArtificial[0].jname + ")";
                document.getElementById('Duser').innerHTML = zoanArtificial[0].user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ zoanArtificial[0].element;
                    document.getElementById('Dinfo').innerHTML = zoanArtificial[0].info; 
                        document.getElementById('extra').innerHTML =zoanArtificial[0].manga + "<br>" + zoanArtificial[0].anime;
                            document.getElementById('Ufruit').src = zoanArtificial[0].ufruit;
                                document.getElementById('user').src = zoanArtificial[0].acharacter;

                                zoanArtificial[0].fruit == null? document.getElementById('hat').style.display = "none": document.getElementById('hat').style.display = "block";

                                    zoanArtificial[0].fruit == null? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
                                        document.getElementById('user1').src = zoanArtificial[0].acharacter;

                                    zoanArtificial[0].fruit == null? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

                                    zoanArtificial[0].ufruit == null? console.log("...") : document.getElementById('userButton').style.display = "block";

                                            zoanArtificial[0].ufruit == null? console.log("...") : document.getElementById('userButton').style.display = "block";

                                            zoanArtificial[0].imginfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                                document.getElementById('imgInfo').src = zoanArtificial[0].imginfo;
                                                 
                                            zoanArtificial[0].fruitbox ==   null? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                                document.getElementById('fruitBox').src = zoanArtificial[0].fruitbox;

                            document.getElementById('Ufruit').style.display = 'block'; 
                        document.getElementById('infoPage').style.display = "block";
                    document.querySelector('#kaido').style.display = 'block';
                document.querySelector('#optionBox').style.display = "none"; 
            document.getElementById('wrapper').style.display = "none";
        document.getElementById('fruits').style.opacity = 0;
                

//seperate button that sends you to a page about smile fruits
    document.getElementById('smile').onclick = function (){
            document.getElementById('Dname').innerHTML = zoanArtificial[1].name + ": " ;
                document.getElementById('Duser').innerHTML = " ";
                    document.getElementById('Dinfo').innerHTML = zoanArtificial[1].info;
                        document.getElementById('extra').innerHTML =zoanArtificial[1].manga + "<br>" + zoanArtificial[1].anime;
                            document.getElementById('smile').style.display = "none";
                                document.querySelector('#gifters').style.display = 'block';
                                    document.querySelector('#kaido').style.display = 'none';
                                        document.getElementById('Ufruit').style.display = 'none';
                                            document.getElementById('smileFruit').style.display = 'block';
                                                document.getElementById('smileFruit').src = zoanArtificial[1].fruit;
                                                    document.getElementById('userButton').style.display = "none";
                                                        document.getElementById('user1').style.display = "none";
                                                            document.getElementById('fruits').style.display = "none";
                                                                document.getElementById('user').style.display = "none";
                                                                    document.getElementById('fruitButton').style.display = "none";
                                                                        document.getElementById('hat').style.display = "none";

                                                

                                                zoanArtificial[1].fruitbox == null? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                                    document.getElementById('fruitBox').src = zoanArtificial[1].fruitbox;

                                                zoanArtificial[1].imginfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                                    document.getElementById('imgInfo').src = zoanArtificial[1].imginfo;
                                                     
                                                zoanArtificial[1].fruitbox ==   null? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                                    document.getElementById('fruitBox').src = zoanArtificial[1].fruitbox;
                                         
    }
//BUG i need to double click user button if momonosuke was shown
    document.getElementById('kaido').onclick = function (){
        document.getElementById('user').style.display= "none";
            document.getElementById('Dname').innerHTML = devilFruits[183].name + " (" + devilFruits[183].jname + ")";
                document.getElementById('Duser').innerHTML = devilFruits[183].user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ devilFruits[8].element;
                    document.getElementById('Dinfo').innerHTML = devilFruits[183].info;
                        document.getElementById('extra').innerHTML =devilFruits[183].manga + "<br>" + devilFruits[183].anime;
                            document.getElementById('fruits').src = devilFruits[183].fruit;
                                document.getElementById('user').src = devilFruits[183].acharacter;

                                devilFruits[183].fruitbox == ""? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                    document.getElementById('fruitBox').src = devilFruits[183].fruitbox;

                                
                                devilFruits[183].imginfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                    document.getElementById('imgInfo').src = devilFruits[183].imginfo;

                                    document.getElementById('fruits').style.opacity = 1;
                                document.getElementById('fruits').style.display = 'block';  
                            document.getElementById('Ufruit').style.display = 'none';  
                        document.querySelector('#kaido').style.display = 'none'; 
                    document.getElementById('infoPage').style.display = "block";
                document.querySelector('#optionBox').style.display = "none"; 
            document.getElementById('wrapper').style.display = "none";
        document.getElementById('smile').style.display = "none";
    }
//button of when you click shows all Gifter users
    document.getElementById('gifters').onclick = function (){
            document.querySelector('#optionBox').style.display = "block";
                document.querySelector('#pbutton').style.display = "none";
                    document.querySelector('#zbutton').style.display = "none";

        let data = '';

            for(let i = 2; i < zoanArtificial.length; i++){
            data += '<button id="zoanArtificial' + i + '">'+ zoanArtificial[i].name + '<br>' + zoanArtificial[i].user + '</button>';
            }
                document.querySelector('#oz1').style.display = "flex";
            document.getElementById('oz1').innerHTML = data;
    }
}  
};

//print paramecia fruits
document.getElementById('pd').onclick = function (){
    document.querySelector('#oz1').style.display = "none";
        document.querySelector('#op1').style.display = "none";
            document.querySelector('#oL').style.display = "none";
                document.querySelector('#oz').style.display = "none";
                    document.querySelector('#zbutton').style.display = "none";
                        document.querySelector('#pbutton').style.display = "block";
                            document.querySelector('#optionBox').style.display = "block";
                                document.querySelector('#op').style.display = "block";
                                    document.querySelector('#gifters').style.display = 'none';
                                        document.querySelector('#kaido').style.display = 'none';
                                            document.querySelector('#smile').style.display = 'none';
                                                document.getElementById('Ufruit').style.display = "none";
                                                    document.getElementById('char').style.display = "none";
                                                        document.getElementById('imgInfo').style.display = "none";
                                                            document.getElementById('smileFruit').style.display = 'none';
                                                                document.getElementById('fruits').style.opacity = 1;
document.getElementById('body').onclick = function (){
//prints para body
document.querySelector('#back').style.display = "block";
    document.querySelector('#pbutton').style.display = "none";
        let data = '';
            for(let i = 0; i < devilFruits.length; i++){
                if(devilFruits[i].type === "parbody"){
                data += '<button id="parBody' + i + '">'+ devilFruits[i].name + '<br>' + devilFruits[i].jname + '</button>';
                }
            }
            document.querySelector('#op1').style.display = "flex";
         document.getElementById('op1').innerHTML = data;

         for(let i = 0; i < devilFruits.length; i++){
            if(devilFruits[i].type === "parbody"){
            let option = document.getElementById('parBody'+ i); 
                
                 option.onclick = function(){
                     console.log(option);
                         document.getElementById('Dname').innerHTML = devilFruits[i].name + " (" + devilFruits[i].jname + ")";
                            document.getElementById('Duser').innerHTML = devilFruits[i].user  + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ devilFruits[i].element;
                                document.getElementById('Dinfo').innerHTML = devilFruits[i].info;
                                    document.getElementById('extra').innerHTML =devilFruits[i].manga + "<br>" + devilFruits[i].anime;
                                        document.getElementById("fruits").src = devilFruits[i].fruit;
                                            document.getElementById('user').src = devilFruits[i].acharacter;

                                devilFruits[i].fruit == null? document.getElementById('hat').style.display = "none": document.getElementById('hat').style.display = "block";

                                devilFruits[i].fruit == null? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
                                    document.getElementById('user1').src = devilFruits[i].acharacter;
                                            
                                devilFruits[i].fruit == null? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";
        
                                devilFruits[i].ufruit == null? console.log("...") : document.getElementById('userButton').style.display = "block";
        
                                devilFruits[i].ufruit == null? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
                                    document.getElementById('Ufruit').src = devilFruits[i].ufruit;

                                devilFruits[i].imginfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                    document.getElementById('imgInfo').src = devilFruits[i].imginfo;
                                             
                                devilFruits[i].fruitbox ==   null? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                    document.getElementById('fruitBox').src = devilFruits[i].fruitbox;
  
                                 document.getElementById('infoPage').style.display = "block";
                             document.querySelector('#optionBox').style.display = "none"; 
                         document.getElementById('wrapper').style.display = "none";
                }   
            }else{
                    //for some reason without this else statement the code doesnt work it can be completely emtpy but without the code falls apart.
            } 
        }
}


//print para environment     
document.getElementById('environment').onclick = function (){
    document.querySelector('#back').style.display = "block";
        document.querySelector('#pbutton').style.display = "none";
            let data = '';
                for(let i = 0; i < devilFruits.length; i++){
                    if(devilFruits[i].type === "parenv"){
                    data += '<button id="parEnv' + i + '">'+ devilFruits[i].name + '<br>' + devilFruits[i].jname + '</button>';
                    }
                }
                document.querySelector('#op1').style.display = "flex";
            document.getElementById('op1').innerHTML = data;

            for(let i = 0; i < devilFruits.length; i++){
                if(devilFruits[i].type === "parenv"){
                let option = document.getElementById('parEnv'+ i); 
                    
                     option.onclick = function(){
                         console.log(option);
                             document.getElementById('Dname').innerHTML = devilFruits[i].name + " (" + devilFruits[i].jname + ")";
                                document.getElementById('Duser').innerHTML = devilFruits[i].user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ devilFruits[i].element;
                                    document.getElementById('Dinfo').innerHTML = devilFruits[i].info;
                                        document.getElementById('extra').innerHTML =devilFruits[i].manga + "<br>" + devilFruits[i].anime;
                                            document.getElementById('fruits').src = devilFruits[i].fruit;
                                                document.getElementById('user').src = devilFruits[i].acharacter;

                                devilFruits[i].fruit == null? document.getElementById('hat').style.display = "none": document.getElementById('hat').style.display = "block";

                                devilFruits[i].fruit == null? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
                                    document.getElementById('user1').src = devilFruits[i].acharacter;
                                    
                                devilFruits[i].fruit == null? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

                                devilFruits[i].ufruit == null? console.log("...") : document.getElementById('userButton').style.display = "block";

                                devilFruits[i].ufruit == null? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
                                    document.getElementById('Ufruit').src = devilFruits[i].ufruit;

                                devilFruits[i].imginfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                    document.getElementById('imgInfo').src = devilFruits[i].imginfo;
                                             
                                devilFruits[i].fruitbox ==   null? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                    document.getElementById('fruitBox').src = devilFruits[i].fruitbox;

                                     document.getElementById('infoPage').style.display = "block";
                                 document.querySelector('#optionBox').style.display = "none"; 
                             document.getElementById('wrapper').style.display = "none";
                     }    
                    }else{
                        
                    }
            }
}
//print para substance
document.getElementById('substance').onclick = function (){
    document.querySelector('#pbutton').style.display = "none";
        document.querySelector('#back').style.display = "block";
            let data = '';
                for(let i = 0; i < devilFruits.length; i++){
                    if(devilFruits[i].type === "parsub"){
                    data += '<button id="parSub' + i + '">'+ devilFruits[i].name + '<br>' + devilFruits[i].jname + '</button>';
                    }
                }
                document.querySelector('#op1').style.display = "flex";
            document.getElementById('op1').innerHTML = data;

            for(let i = 0; i < devilFruits.length; i++){
                if(devilFruits[i].type === "parsub"){
                let option = document.getElementById('parSub'+ i); 
                    
                     option.onclick = function(){
                         console.log(option);
                             document.getElementById('Dname').innerHTML = devilFruits[i].name + " (" + devilFruits[i].jname + ")";
                                document.getElementById('Duser').innerHTML = devilFruits[i].user  + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ devilFruits[i].element;
                                    document.getElementById('Dinfo').innerHTML = devilFruits[i].info;
                                        document.getElementById('extra').innerHTML =devilFruits[i].manga + "<br>" + devilFruits[i].anime;
                                            document.getElementById('fruits').src = devilFruits[i].fruit;
                                                document.getElementById('user').src = devilFruits[i].acharacter;

                                    devilFruits[i].fruit == null? document.getElementById('hat').style.display = "none": document.getElementById('hat').style.display = "block";

                                    devilFruits[i].fruit == null? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
                                        document.getElementById('user1').src = devilFruits[i].acharacter;
                                    
                                    devilFruits[i].fruit == null? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

                                    devilFruits[i].ufruit == null? console.log("...") : document.getElementById('userButton').style.display = "block";

                                    devilFruits[i].ufruit == null? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
                                        document.getElementById('Ufruit').src = devilFruits[i].ufruit;

                                    devilFruits[i].imginfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                        document.getElementById('imgInfo').src = devilFruits[i].imginfo;
                                                 
                                    devilFruits[i].fruitbox ==   null? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                        document.getElementById('fruitBox').src = devilFruits[i].fruitbox;

                                    devilFruits[i].character == null? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
                                        document.getElementById('char').src = devilFruits[i].character;
                          
                                        document.getElementById('infoPage').style.display = "block";
                                 document.querySelector('#optionBox').style.display = "none"; 
                             document.getElementById('wrapper').style.display = "none";
                     } 
                    }else{

                    }   
            }
}
//print para power
document.getElementById('power').onclick = function (){
    document.querySelector('#pbutton').style.display = "none";
        document.querySelector('#back').style.display = "block";
            let data = '';
                for(let i = 0; i < devilFruits.length; i++){
                    if(devilFruits[i].type === "parpow"){
                    data += '<button id="parPow' + i + '">'+ devilFruits[i].name + '<br>' + devilFruits[i].jname + '</button>';
                    }
                }
                document.querySelector('#op1').style.display = "flex";
            document.getElementById('op1').innerHTML = data;

            for(let i = 0; i < devilFruits.length; i++){
                 if(devilFruits[i].type === "parpow"){
                let option = document.getElementById('parPow'+ i); 
                    
                     option.onclick = function(){
                         console.log(option);
                             document.getElementById('Dname').innerHTML = devilFruits[i].name + " (" + devilFruits[i].jname + ")" ;
                                document.getElementById('Duser').innerHTML = devilFruits[i].user  + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ devilFruits[i].element;
                                    document.getElementById('Dinfo').innerHTML = devilFruits[i].info;
                                        document.getElementById('extra').innerHTML =devilFruits[i].manga + "<br>" + devilFruits[i].anime;
                                            document.getElementById('fruits').src = devilFruits[i].fruit ;
                                                document.getElementById('user').src = devilFruits[i].acharacter;

                                            devilFruits[i].fruit == null? document.getElementById('hat').style.display = "none": document.getElementById('hat').style.display = "block";

                                            devilFruits[i].fruit == null? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
                                                document.getElementById('user1').src = devilFruits[i].acharacter;
                                                        
                                            devilFruits[i].fruit == null? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";
                    
                                            devilFruits[i].ufruit == null? console.log("...") : document.getElementById('userButton').style.display = "block";
                    

                                            devilFruits[i].ufruit == null? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
                                                document.getElementById('Ufruit').src = devilFruits[i].ufruit;
        
                                            devilFruits[i].imginfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                                document.getElementById('imgInfo').src = devilFruits[i].imginfo;
                                                         
                                            devilFruits[i].fruitbox ==   null? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                                document.getElementById('fruitBox').src = devilFruits[i].fruitbox;

                                     document.getElementById('infoPage').style.display = "block";
                                 document.querySelector('#optionBox').style.display = "none"; 
                             document.getElementById('wrapper').style.display = "none";
                     }    
                 }else{

                 }
            }
}
};


};

function option(){
//x button to close the option box
document.getElementById('x').onclick = function (){
    document.querySelector('#zbutton').style.display = "block";
        document.querySelector('#pbutton').style.display = "block";
    document.querySelector('#optionBox').style.display = "none"; 
        document.querySelector('#oz1').style.display = "none";
            document.querySelector('#op1').style.display = "none";
                document.querySelector('#back').style.display = "none";
                    document.getElementById('smile').style.display = "none";   
};
//back button to go back from list of devil fruits back to option box
document.getElementById('back').onclick = function (){
    document.querySelector('#pbutton').style.display = "block";
        document.querySelector('#zbutton').style.display = "block";
    document.querySelector('#oz1').style.display = "none";
        document.querySelector('#op1').style.display = "none";
            document.querySelector('#back').style.display = "none";
                document.getElementById('smile').style.display = "none";
};
//return button is just an website title that becomes an a link to return back to main page
document.getElementById('r').onclick = function(){
    document.getElementById('back').style.display = 'none';
        document.getElementById('wrapper').style.display = "block";
            document.getElementById('infoPage').style.display = "none";
                document.getElementById('smile').style.display = "none";
                    document.getElementById('optionBox').style.display = "none";
                        document.getElementById("fruitButton").style.display = "none";
                            document.getElementById("user").style.display = "none";
                                document.getElementById("fruits").style.display = "block";
                                    document.getElementById("Ufruit").style.opacity = 1;
};

document.getElementById('userButton').onclick = function(){
    document.getElementById("fruits").style.display = "none";
        document.getElementById("Ufruit").style.opacity = 0;
            document.getElementById("user").style.display = "block";
                document.getElementById("fruitButton").style.display = "block";
                    document.getElementById('userButton').style.display = "none";
};
    
document.getElementById('fruitButton').onclick = function(){
    document.getElementById("fruits").style.display = "block";
        document.getElementById("user").style.display = "none";
            document.getElementById("Ufruit").style.opacity = 1;
                document.getElementById("fruitButton").style.display = "none";
                    document.getElementById('userButton').style.display = "block";         
};   

document.getElementById("darkmode").addEventListener ('click', function () {
    document.body.classList.toggle("dark-theme");
    
});


}

fruits();
option();

