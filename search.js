import {devilFruits} from './data.js';


function search(){

    document.getElementById("searchBar").addEventListener("input", e => {
        //turns on the search bar buttons
        document.getElementById("searchBox").style.display = "block";
        document.getElementById("allFruit").style.display = "block";
        //get users value and turns it into lower case
        const value = e.target.value.toLowerCase();
    
        //filters the devilfruits array and turns each element name into lowercase and seeing if it includes the value
        const filteredItems = devilFruits.filter(fruit =>
            fruit.name.toLowerCase().includes(value) || fruit.jname.toLowerCase().includes(value)
        );
    
        //then sends the filtered items to create the new buttons 
        makebutton(filteredItems);
    });
    
    function makebutton(filteredItems) {
        let data = '';
    
        //creates new buttons for each filtered items an gives unique id
        for (let i = 0; i < filteredItems.length; i++) {
            data += '<button id="' + i + '">' + filteredItems[i].name + '<br>' + filteredItems[i].jname + '</button>';
        }
    
        document.querySelector('#oL').style.display = "flex";
        document.getElementById("allFruit").innerHTML = data;

        //gets all the buttons created and makes an onclick function where the value clicked becomes target
        document.getElementById("allFruit").onclick = function (e) {
            const buttonId = e.target;
            document.getElementById("searchBox").style.display = "none";
            document.getElementById("searchBar").value = "";
            document.getElementById("allFruit").style.display = "none";
            document.getElementById("fruitButton").style.display = "none";
            document.getElementById("user").style.display = "none";
            document.getElementById("fruits").style.display = "block";
            document.getElementById("Ufruit").style.opacity = 1;
            //sets index to the buttons id number made in line 27
                const index = parseInt(buttonId.id);

                button(filteredItems[index]);
            
        };
    }
    
    function button(selectedItem) {
        document.getElementById('fruitButton').style.display = "none" 
        if(selectedItem.type === "logia"){
        document.getElementById('Dname').innerHTML = selectedItem.name + " (" + selectedItem.jname + ")";
        document.getElementById('Duser').innerHTML = selectedItem.user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + selectedItem.element;
        document.getElementById('Dinfo').innerHTML = selectedItem.info;
        document.getElementById('extra').innerHTML = selectedItem.manga + "<br>" + selectedItem.anime;
        document.getElementById('fruits').src = selectedItem.fruit;
        document.getElementById('user').src = selectedItem.acharacter;

        selectedItem.character == null ? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
        document.getElementById('char').src = selectedItem.character;

        selectedItem.fruit == null ? document.getElementById('hat').style.display = "none" : document.getElementById('hat').style.display = "block";

        selectedItem.fruit == null ? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

        selectedItem.fruit == null ? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
        document.getElementById('user1').src = selectedItem.acharacter;

        selectedItem.ufruit == "" ? console.log("...") : document.getElementById('userButton').style.display = "block";

        selectedItem.ufruit == "" ? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
        document.getElementById('Ufruit').src = selectedItem.ufruit;

        selectedItem.fruitbox == "" ? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
        document.getElementById('fruitBox').src = selectedItem.fruitbox;

        selectedItem.imginfo == null ? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
        document.getElementById('imgInfo').src = selectedItem.imginfo;
       

        document.getElementById("gifters").style.display = "none";
        document.getElementById("kaido").style.display = "none";
        document.getElementById("smile").style.display = "none";
    
        document.getElementById('infoPage').style.display = "block";
        document.querySelector('#optionBox').style.display = "none";
        document.getElementById('wrapper').style.display = "none";

    }else if(selectedItem.type === "zoannormal"){

        document.getElementById('Dname').innerHTML = selectedItem.name + " (" + selectedItem.jname + ")";
            document.getElementById('Duser').innerHTML = selectedItem.user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + selectedItem.element;
            document.getElementById('Dinfo').innerHTML = selectedItem.info;
            document.getElementById('extra').innerHTML = selectedItem.manga + "<br>" + selectedItem.anime;
            document.getElementById('fruits').src = selectedItem.fruit;
            document.getElementById('user').src = selectedItem.acharacter;

            selectedItem.character == null ? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
            document.getElementById('char').src = selectedItem.character;

            selectedItem.fruit == null ? document.getElementById('hat').style.display = "none" : document.getElementById('hat').style.display = "block";

            selectedItem.fruit == null ? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

            selectedItem.fruit == null ? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
            document.getElementById('user1').src = selectedItem.acharacter;

            selectedItem.ufruit == null ? console.log("...") : document.getElementById('userButton').style.display = "block";

            selectedItem.ufruit == null ? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
            document.getElementById('Ufruit').src = selectedItem.ufruit;

            selectedItem.fruitbox == null ? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
            document.getElementById('fruitBox').src = selectedItem.fruitbox;

            selectedItem.imginfo == null ? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
            document.getElementById('imgInfo').src = selectedItem.imginfo;

    }else if(selectedItem.type === "zoananicent"){
    document.getElementById('Dname').innerHTML = selectedItem.name + " (" + selectedItem.jname + ")";
    document.getElementById('Duser').innerHTML = selectedItem.user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + selectedItem.element;
    document.getElementById('Dinfo').innerHTML = selectedItem.info;
    document.getElementById('extra').innerHTML = selectedItem.manga + "<br>" + selectedItem.anime;
    document.getElementById('fruits').src = selectedItem.fruit;
    document.getElementById('user').src = selectedItem.acharacter;

    selectedItem.character == null ? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
    document.getElementById('char').src = selectedItem.character;

    selectedItem.fruit == null ? document.getElementById('hat').style.display = "none" : document.getElementById('hat').style.display = "block";

    selectedItem.fruit == null ? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

    selectedItem.fruit == null ? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
    document.getElementById('user1').src = selectedItem.acharacter;

    selectedItem.ufruit == null ? console.log("...") : document.getElementById('userButton').style.display = "block";

    selectedItem.ufruit == null ? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
    document.getElementById('Ufruit').src = selectedItem.ufruit;

    selectedItem.fruitbox == null ? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
    document.getElementById('fruitBox').src = selectedItem.fruitbox;

    selectedItem.imginfo == null ? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
    document.getElementById('imgInfo').src = selectedItem.imginfo;

    }else if(selectedItem.type === "zoanmythical"){
    document.getElementById('Dname').innerHTML = selectedItem.name + " (" + selectedItem.jname + ")";
    document.getElementById('Duser').innerHTML = selectedItem.user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + selectedItem.element;
    document.getElementById('Dinfo').innerHTML = selectedItem.info;
    document.getElementById('extra').innerHTML = selectedItem.manga + "<br>" + selectedItem.anime;
    document.getElementById('fruits').src = selectedItem.fruit;
    document.getElementById('user').src = selectedItem.acharacter;

    selectedItem.character == null ? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
    document.getElementById('char').src = selectedItem.character;

    selectedItem.fruit == null ? document.getElementById('hat').style.display = "none" : document.getElementById('hat').style.display = "block";

    selectedItem.fruit == null ? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

    selectedItem.fruit == null ? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
    document.getElementById('user1').src = selectedItem.acharacter;

    selectedItem.ufruit == null ? console.log("...") : document.getElementById('userButton').style.display = "block";

    selectedItem.ufruit == null ? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
    document.getElementById('Ufruit').src = selectedItem.ufruit;

    selectedItem.fruitbox == null ? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
    document.getElementById('fruitBox').src = selectedItem.fruitbox;

    selectedItem.imginfo == null ? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
    document.getElementById('imgInfo').src = selectedItem.imginfo;
    }else if(selectedItem.type === "parbody"){
    document.getElementById('Dname').innerHTML = selectedItem.name + " (" + selectedItem.jname + ")";
    document.getElementById('Duser').innerHTML = selectedItem.user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + selectedItem.element;
    document.getElementById('Dinfo').innerHTML = selectedItem.info;
    document.getElementById('extra').innerHTML = selectedItem.manga + "<br>" + selectedItem.anime;
    document.getElementById('fruits').src = selectedItem.fruit;
    document.getElementById('user').src = selectedItem.acharacter;

    selectedItem.character == null ? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
    document.getElementById('char').src = selectedItem.character;

    selectedItem.fruit == null ? document.getElementById('hat').style.display = "none" : document.getElementById('hat').style.display = "block";

    selectedItem.fruit == null ? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

    selectedItem.fruit == null ? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
    document.getElementById('user1').src = selectedItem.acharacter;

    selectedItem.ufruit == null ? console.log("...") : document.getElementById('userButton').style.display = "block";

    selectedItem.ufruit == null ? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
    document.getElementById('Ufruit').src = selectedItem.ufruit;

    selectedItem.fruitbox == null ? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
    document.getElementById('fruitBox').src = selectedItem.fruitbox;

    selectedItem.imginfo == null ? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
    document.getElementById('imgInfo').src = selectedItem.imginfo;
    }else if(selectedItem.type === "parsub"){
    document.getElementById('Dname').innerHTML = selectedItem.name + " (" + selectedItem.jname + ")";
    document.getElementById('Duser').innerHTML = selectedItem.user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + selectedItem.element;
    document.getElementById('Dinfo').innerHTML = selectedItem.info;
    document.getElementById('extra').innerHTML = selectedItem.manga + "<br>" + selectedItem.anime;
    document.getElementById('fruits').src = selectedItem.fruit;
    document.getElementById('user').src = selectedItem.acharacter;

    selectedItem.character == null ? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
    document.getElementById('char').src = selectedItem.character;

    selectedItem.fruit == null ? document.getElementById('hat').style.display = "none" : document.getElementById('hat').style.display = "block";

    selectedItem.fruit == null ? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

    selectedItem.fruit == null ? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
    document.getElementById('user1').src = selectedItem.acharacter;

    selectedItem.ufruit == null ? console.log("...") : document.getElementById('userButton').style.display = "block";

    selectedItem.ufruit == null ? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
    document.getElementById('Ufruit').src = selectedItem.ufruit;

    selectedItem.fruitbox == null ? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
    document.getElementById('fruitBox').src = selectedItem.fruitbox;

    selectedItem.imginfo == null ? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
    document.getElementById('imgInfo').src = selectedItem.imginfo;
    }else if(selectedItem.type === "parenv"){
    document.getElementById('Dname').innerHTML = selectedItem.name + " (" + selectedItem.jname + ")";
    document.getElementById('Duser').innerHTML = selectedItem.user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + selectedItem.element;
    document.getElementById('Dinfo').innerHTML = selectedItem.info;
    document.getElementById('extra').innerHTML = selectedItem.manga + "<br>" + selectedItem.anime;
    document.getElementById('fruits').src = selectedItem.fruit;
    document.getElementById('user').src = selectedItem.acharacter;

    selectedItem.character == null ? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
    document.getElementById('char').src = selectedItem.character;

    selectedItem.fruit == null ? document.getElementById('hat').style.display = "none" : document.getElementById('hat').style.display = "block";

    selectedItem.fruit == null ? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

    selectedItem.fruit == null ? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
    document.getElementById('user1').src = selectedItem.acharacter;

    selectedItem.ufruit == null ? console.log("...") : document.getElementById('userButton').style.display = "block";

    selectedItem.ufruit == null ? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
    document.getElementById('Ufruit').src = selectedItem.ufruit;

    selectedItem.fruitbox == null ? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
    document.getElementById('fruitBox').src = selectedItem.fruitbox;

    selectedItem.imginfo == null ? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
    document.getElementById('imgInfo').src = selectedItem.imginfo;
    }else if(selectedItem.type === "parpow"){
    document.getElementById('Dname').innerHTML = selectedItem.name + " (" + selectedItem.jname + ")";
    document.getElementById('Duser').innerHTML = selectedItem.user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + selectedItem.element;
    document.getElementById('Dinfo').innerHTML = selectedItem.info;
    document.getElementById('extra').innerHTML = selectedItem.manga + "<br>" + selectedItem.anime;
    document.getElementById('fruits').src = selectedItem.fruit;
    document.getElementById('user').src = selectedItem.acharacter;

    selectedItem.character == null ? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
    document.getElementById('char').src = selectedItem.character;

    selectedItem.fruit == null ? document.getElementById('hat').style.display = "none" : document.getElementById('hat').style.display = "block";

    selectedItem.fruit == null ? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

    selectedItem.fruit == null ? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
    document.getElementById('user1').src = selectedItem.acharacter;

    selectedItem.ufruit == null ? console.log("...") : document.getElementById('userButton').style.display = "block";

    selectedItem.ufruit == null ? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
    document.getElementById('Ufruit').src = selectedItem.ufruit;

    selectedItem.fruitbox == null ? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
    document.getElementById('fruitBox').src = selectedItem.fruitbox;

    selectedItem.imginfo == null ? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
    document.getElementById('imgInfo').src = selectedItem.imginfo;
}
    }
}
   
function exit(){
    document.getElementById("wrapper").onclick = function() {
        document.getElementById("searchBox").style.display = "none";
        document.getElementById("searchBar").value = "";
        document.getElementById("allFruit").style.display = "none";
        document.getElementById('error').style.display = "none"; 
        document.getElementById('error').style.display = "none";
    };

    document.getElementById("infoPage").onclick = function() {
        document.getElementById("searchBox").style.display = "none";
        document.getElementById("searchBar").value = "";
        document.getElementById("allFruit").style.display = "none";
        document.getElementById('error').style.display = "none";
    };

    document.getElementById("searchBar").addEventListener("keyup", function(event){

        if(event.key === "Enter"){
            document.getElementById("searchBox").style.display = "none";
            document.getElementById("searchBar").value = "";
            document.getElementById("allFruit").style.display = "none";
            document.getElementById('error').style.display = "none";
        }
    });


    document.getElementById("searchBar").addEventListener("keyup", function(event){
        if( document.getElementById("searchBar").value == ""){
            document.getElementById("searchBox").style.display = "none";
            document.getElementById("allFruit").style.display = "none";
        }
       
    });

}

search();
exit();