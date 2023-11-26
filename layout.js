import {devilFruits, logia, parBody, parEnv, parPow, parSub, zoanAnicent, zoanArtificial, zoanMythical, zoanNormal} from './data.js';
//Dark mode

fruits();
option();

function fruits(){

//Print logia fruits
document.getElementById('ld').onclick = function (){
    //query selectors turning certain things off and on
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
            for(let i = 0; i < logia.length; i++){
                data += '<button id="logia' + i + '">' + logia[i].name + '<br>' + logia[i].jname + '</button>';
            }
            document.querySelector('#oL').style.display = "flex";
        document.getElementById('oL').innerHTML = data;
    //second for loop that activates when you click on a certain index. Grabs the index and paste it as the i value only printing out the values for that object
        for(let i = 0; i < logia.length; i++){
           let option = document.getElementById('logia'+ i); 
               
                option.onclick = function(){
                    console.log(option);
                        document.getElementById('Dname').innerHTML = logia[i].name + " (" + logia[i].jname + ")";
                            document.getElementById('Duser').innerHTML = logia[i].user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ logia[i].element;
                                document.getElementById('Dinfo').innerHTML = logia[i].info;
                                    document.getElementById('extra').innerHTML =logia[i].manga + "<br>" + logia[i].anime;
                                        document.getElementById('fruits').src = logia[i].fruit;
                                            document.getElementById('user').src = logia[i].aCharacter;
                                            
                                                logia[i].fruit == null? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

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
//print normal zoan        
document.getElementById('normal').onclick = function (){
    document.querySelector('#back').style.display = "block";
        document.querySelector('#zbutton').style.display = "none";
        let data = '';
            for(let i = 0; i < zoanNormal.length; i++){
                data += '<button id="zoanNormal' + i + '">'+ zoanNormal[i].name + '<br>' + zoanNormal[i].jname + '</button>';
            }
        document.querySelector('#oz1').style.display = "flex";
    document.getElementById('oz1').innerHTML = data;

    for(let i = 0; i < zoanNormal.length; i++){
        let option = document.getElementById('zoanNormal'+ i); 
            
             option.onclick = function(){
                 console.log(option);
                     document.getElementById('Dname').innerHTML = zoanNormal[i].name + " (" + zoanNormal[i].jname + ")";
                        document.getElementById('Duser').innerHTML = zoanNormal[i].user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ zoanNormal[i].element;
                            document.getElementById('Dinfo').innerHTML = zoanNormal[i].info;
                                document.getElementById('extra').innerHTML =zoanNormal[i].manga + "<br>" + zoanNormal[i].anime;
                                    document.getElementById('fruits').src = zoanNormal[i].fruit;

                                    
                                        zoanNormal[i].fruit == ""? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

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
 }
 //print ancient zoan        
document.getElementById('ancient').onclick = function (){
    document.querySelector('#back').style.display = "block";
        document.querySelector('#zbutton').style.display = "none";
        let data = '';
            for(let i = 0; i < zoanAnicent.length; i++){
                data += '<button id="zoanAnicent' + i + '">'+ zoanAnicent[i].name + '<br>' + zoanAnicent[i].jname + '</button>';
            }
        document.querySelector('#oz1').style.display = "flex";
    document.getElementById('oz1').innerHTML = data;

    for(let i = 0; i < zoanAnicent.length; i++){
        let option = document.getElementById('zoanAnicent'+ i); 
            
             option.onclick = function(){
                 console.log(option);
                     document.getElementById('Dname').innerHTML = zoanAnicent[i].name + " (" + zoanAnicent[i].jname + ")";
                        document.getElementById('Duser').innerHTML = zoanAnicent[i].user  + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ zoanAnicent[i].element;
                            document.getElementById('Dinfo').innerHTML = zoanAnicent[i].info;
                                document.getElementById('extra').innerHTML =zoanAnicent[i].manga + "<br>" + zoanAnicent[i].anime;
                                    document.getElementById('fruits').src = zoanAnicent[i].fruit;
//                                  document.getElementById('user').src = logia[i].aCharacter;

                                        zoanAnicent[i].fruit == ""? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

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
 }
//print mythical zoan
document.getElementById('mythical').onclick = function (){
    document.querySelector('#zbutton').style.display = "none";
        document.querySelector('#back').style.display = "block";
        let data = '';
            for(let i = 0; i < zoanMythical.length; i++){
                data += '<button id="zoanMythical' + i + '">'+ zoanMythical[i].name + '<br>' + zoanMythical[i].jname + '</button>';
            }
        document.querySelector('#oz1').style.display = "flex";
    document.getElementById('oz1').innerHTML = data;

    
    for(let i = 0; i < zoanMythical.length; i++){
        let option = document.getElementById('zoanMythical'+ i);
            
             option.onclick = function(){
                 console.log(option);
                     document.getElementById('Dname').innerHTML = zoanMythical[i].name + " (" + zoanMythical[i].jname + ")";
                        document.getElementById('Duser').innerHTML = zoanMythical[i].user  + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ zoanMythical[i].element;
                            document.getElementById('Dinfo').innerHTML = zoanMythical[i].info;
                                document.getElementById('extra').innerHTML =zoanMythical[i].manga + "<br>" + zoanMythical[i].anime;
                                    document.getElementById('fruits').src = zoanMythical[i].fruit;
//                                    document.getElementById('user').src = logia[i].aCharacter;

                                    zoanMythical[i].fruit == ""? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

                                    zoanMythical[i].ufruit == null? console.log("...") : document.getElementById('userButton').style.display = "block";

                                    zoanMythical[i].ufruit == ""? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
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
//print artificial zoan
document.getElementById('artificial').onclick = function (){
//different then other options in zoan option box as it directlty sends you to first index of the array
    document.querySelector('#zbutton').style.display = "none";
        document.getElementById('smile').style.display = "block";
            document.getElementById('Dname').innerHTML = zoanArtificial[0].name + " (" + zoanArtificial[0].jname + ")";
                document.getElementById('Duser').innerHTML = zoanArtificial[0].user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ zoanArtificial[0].element;
                    document.getElementById('Dinfo').innerHTML = zoanArtificial[0].info; 
                        document.getElementById('extra').innerHTML =zoanArtificial[0].manga + "<br>" + zoanArtificial[0].anime;
                            document.getElementById('Ufruit').src = zoanArtificial[0].ufruit;
                            
                            zoanArtificial[0].fruit == ""? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

                            zoanArtificial[0].ufruit == null? console.log("...") : document.getElementById('userButton').style.display = "block";

                                            zoanArtificial[0].imgInfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                                document.getElementById('imgInfo').src = zoanArtificial[0].imgInfo;
                                                 
                                            zoanArtificial[0].fruitBox ==   null? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                                document.getElementById('fruitBox').src = zoanArtificial[0].fruitBox;

                                document.getElementById('Ufruit').style.display = 'block';  
                        document.getElementById('infoPage').style.display = "block";
                    document.querySelector('#kaido').style.display = 'block';
                document.querySelector('#optionBox').style.display = "none"; 
            document.getElementById('wrapper').style.display = "none";
        document.getElementById('fruits').style.display = 'none';
                

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

                                                zoanArtificial[1].fruitBox == null? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                                    document.getElementById('fruitBox').src = zoanArtificial[1].fruitBox;

                                                zoanArtificial[1].imgInfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                                    document.getElementById('imgInfo').src = zoanArtificial[1].imgInfo;
                                                     
                                                zoanArtificial[1].fruitBox ==   null? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                                    document.getElementById('fruitBox').src = zoanArtificial[1].fruitBox;
                                         
        }

        document.getElementById('kaido').onclick = function (){
            document.getElementById('Dname').innerHTML = zoanMythical[8].name + " (" + zoanMythical[8].jname + ")";
                document.getElementById('Duser').innerHTML = zoanMythical[8].user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ zoanMythical[8].element;
                    document.getElementById('Dinfo').innerHTML = zoanMythical[8].info;
                        document.getElementById('extra').innerHTML =zoanMythical[8].manga + "<br>" + zoanMythical[8].anime;
                            document.getElementById('fruits').src = zoanMythical[8].fruit;

                                zoanMythical[8].fruitBox == ""? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                    document.getElementById('fruitBox').src = zoanMythical[8].fruitBox;

                                
                                zoanMythical[8].imgInfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                    document.getElementById('imgInfo').src = zoanMythical[8].imgInfo;

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
document.getElementById('body').onclick = function (){
//prints para body
document.querySelector('#back').style.display = "block";
    document.querySelector('#pbutton').style.display = "none";
        let data = '';
            for(let i = 0; i < parBody.length; i++){
                data += '<button id="parBody' + i + '">'+ parBody[i].name + '<br>' + parBody[i].jname + '</button>';
            }
            document.querySelector('#op1').style.display = "flex";
         document.getElementById('op1').innerHTML = data;

         for(let i = 0; i < parBody.length; i++){
            let option = document.getElementById('parBody'+ i); 
                
                 option.onclick = function(){
                     console.log(option);
                         document.getElementById('Dname').innerHTML = parBody[i].name + " (" + parBody[i].jname + ")";
                            document.getElementById('Duser').innerHTML = parBody[i].user  + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ parBody[i].element;
                                document.getElementById('Dinfo').innerHTML = parBody[i].info;
                                    document.getElementById('extra').innerHTML =parBody[i].manga + "<br>" + parBody[i].anime;
                                        document.getElementById("fruits").src = parBody[i].fruit;

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
}
//print para environment     
document.getElementById('environment').onclick = function (){
    document.querySelector('#back').style.display = "block";
        document.querySelector('#pbutton').style.display = "none";
            let data = '';
                for(let i = 0; i < parEnv.length; i++){
                    data += '<button id="parEnv' + i + '">'+ parEnv[i].name + '<br>' + parEnv[i].jname + '</button>';
                }
                document.querySelector('#op1').style.display = "flex";
            document.getElementById('op1').innerHTML = data;

            for(let i = 0; i < parEnv.length; i++){
                let option = document.getElementById('parEnv'+ i); 
                    
                     option.onclick = function(){
                         console.log(option);
                             document.getElementById('Dname').innerHTML = parEnv[i].name + " (" + parEnv[i].jname + ")";
                                document.getElementById('Duser').innerHTML = parEnv[i].user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ parEnv[i].element;
                                    document.getElementById('Dinfo').innerHTML = parEnv[i].info;
                                        document.getElementById('extra').innerHTML =parEnv[i].manga + "<br>" + parEnv[i].anime;
                                            document.getElementById('fruits').src = parEnv[i].fruit;

                                parEnv[i].ufruit == null? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
                                    document.getElementById('Ufruit').src = parEnv[i].ufruit;

                                parEnv[i].imgInfo == null? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
                                    document.getElementById('imgInfo').src = parEnv[i].imgInfo;
                                             
                                parEnv[i].fruitBox ==   null? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
                                    document.getElementById('fruitBox').src = parEnv[i].fruitBox;

                                parEnv[i].character == null? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
                                    document.getElementById('char').src = parEnv[i].character;

        //                                   document.getElementById('user').src =;
                                     document.getElementById('infoPage').style.display = "block";
                                 document.querySelector('#optionBox').style.display = "none"; 
                             document.getElementById('wrapper').style.display = "none";
                     }    
            }
}
//print para substance
document.getElementById('substance').onclick = function (){
    document.querySelector('#pbutton').style.display = "none";
        document.querySelector('#back').style.display = "block";
            let data = '';
                for(let i = 0; i < parSub.length; i++){
                    data += '<button id="parSub' + i + '">'+ parSub[i].name + '<br>' + parSub[i].jname + '</button>';
                }
                document.querySelector('#op1').style.display = "flex";
            document.getElementById('op1').innerHTML = data;

            for(let i = 0; i < parSub.length; i++){
                let option = document.getElementById('parSub'+ i); 
                    
                     option.onclick = function(){
                         console.log(option);
                             document.getElementById('Dname').innerHTML = parSub[i].name + " (" + parSub[i].jname + ")";
                                document.getElementById('Duser').innerHTML = parSub[i].user  + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ parSub[i].element;
                                    document.getElementById('Dinfo').innerHTML = parSub[i].info;
                                        document.getElementById('extra').innerHTML =parSub[i].manga + "<br>" + parSub[i].anime;
                                            document.getElementById('fruits').src = parSub[i].fruit;

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
}
//print para power
document.getElementById('power').onclick = function (){
    document.querySelector('#pbutton').style.display = "none";
        document.querySelector('#back').style.display = "block";
            let data = '';
                for(let i = 0; i < parPow.length; i++){
                    data += '<button id="parPow' + i + '">'+ parPow[i].name + '<br>' + parPow[i].jname + '</button>';
                }
                document.querySelector('#op1').style.display = "flex";
            document.getElementById('op1').innerHTML = data;

            for(let i = 0; i < parPow.length; i++){
                let option = document.getElementById('parPow'+ i); 
                    
                     option.onclick = function(){
                         console.log(option);
                             document.getElementById('Dname').innerHTML = parPow[i].name + " (" + parPow[i].jname + ")" ;
                                document.getElementById('Duser').innerHTML = parPow[i].user  + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ parPow[i].element;
                                    document.getElementById('Dinfo').innerHTML = parPow[i].info;
                                        document.getElementById('extra').innerHTML =parPow[i].manga + "<br>" + parPow[i].anime;
                                            document.getElementById('fruits').src = parPow[i].fruit ;

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
};
}

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
};

document.getElementById('userButton').onclick = function(){
    document.getElementById("fruits").style.display = "none";
        document.getElementById("user").style.display = "block";
            document.getElementById("fruitButton").style.display = "block";
                document.getElementById('userButton').style.display = "none";
};
    
document.getElementById('fruitButton').onclick = function(){
    document.getElementById("fruits").style.display = "block";
        document.getElementById("user").style.display = "none";
            document.getElementById("fruitButton").style.display = "none";
                document.getElementById('userButton').style.display = "block";
};   

document.getElementById("darkmode").addEventListener ('click', function () {
    document.body.classList.toggle("dark-theme");
});
}



 














