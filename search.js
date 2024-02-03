import {devilFruits} from './data.js';
//BIG BUG all the code works the only issue is the search bar
//when you type it filters all the fruits the problem is that since all my fruits are separated into the different arrays 
//it only lets whatever array is on top to work while the rest dont until they reach the top like a stack(the buttons that get generated)
//so if i type hito in the search bar 4 fruits will appear one from the zoanNormal array and 3 from zoanMythical but only zoanNormal button will work since its array is on top
//while the rest dont. I honestly gave up as theres 3 ways I can go about this problem

//1: rewrite my data.js file to be one array of object and put in a (type) to seperate the different fruits but then i would have to also rewrite the layout.js file
//2: rewrite my search.js file from scratch again
//3: make it so you have to type the name of the fruit exactly but i would also have to rewrite the search.js file as when the buttons get generated the names are printed as log0 etc not the name
//so it would be compared to that and not the name so my value would never match

/*let shown = false;

document.getElementById('searchBar').onclick = function () {
    if (shown == false) {
        document.getElementById('error').style.display = "block";  
        shown = true;   
    }
}
document.getElementById('x-error').onclick = function () {
    document.getElementById('error').style.display = "none";
}*/

function search(){

    document.getElementById("searchBar").addEventListener("input", e => {

        document.getElementById("searchBox").style.display = "block";
        document.getElementById("allFruit").style.display = "block";

        const value = e.target.value.toLowerCase();
    
        const filteredItems = devilFruits.filter(fruit =>
            fruit.name.toLowerCase().includes(value) || fruit.jname.toLowerCase().includes(value)
        );
    
        generateButtons(filteredItems);
    });
    
    function generateButtons(filteredItems) {
        let data = '';
    
        for (let i = 0; i < filteredItems.length; i++) {
            data += '<button id="devilFruit' + i + '">' + filteredItems[i].name + '<br>' + filteredItems[i].jname + '</button>';
        }
    
        document.querySelector('#oL').style.display = "flex";
        document.getElementById("allFruit").innerHTML = data;

        document.getElementById("allFruit").onclick = function (e) {

            const target = e.target;

            if (target.tagName === "BUTTON") {
                const index = parseInt(target.id.replace("devilFruit", ""));

                button(filteredItems[index]);
            }
        };
    }
    
    function button(selectedItem) {

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

    document.getElementById("allFruit").onclick = function() {
        document.getElementById('error').style.display = "none";
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

search();
exit();