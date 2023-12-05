import {logia, parBody, parEnv, parPow, parSub, zoanAnicent, zoanMythical, zoanNormal} from './data.js';



function search(){

document.getElementById("searchBar").addEventListener("input", e =>{
    document.getElementById("searchBox").style.display = "block";
        const value = e.target.value.toLowerCase();
        document.getElementById("allFruit").style.display = "block";
    
        const filteredItems = [];

        logia.forEach((fruit, index) => {
            if (fruit.name.toLowerCase().includes(value) || fruit.jname.toLowerCase().includes(value)) {
                filteredItems.push({ type: 'log', index });
            }
        });

        zoanNormal.forEach((fruit, index) => {
            if (fruit.name.toLowerCase().includes(value) || fruit.jname.toLowerCase().includes(value)) {
                filteredItems.push({ type: 'nor', index });
            }
        });

        zoanAnicent.forEach((fruit, index) => {
            if (fruit.name.toLowerCase().includes(value) || fruit.jname.toLowerCase().includes(value)) {
                filteredItems.push({ type: 'anc', index });
            }
        });

        zoanMythical.forEach((fruit, index) => {
            if (fruit.name.toLowerCase().includes(value) || fruit.jname.toLowerCase().includes(value)) {
                filteredItems.push({ type: 'myth', index });
            }
        });
        
        parBody.forEach((fruit, index) => {
            if (fruit.name.toLowerCase().includes(value) || fruit.jname.toLowerCase().includes(value)) {
                filteredItems.push({ type: 'body', index });
            }
        });

        parEnv.forEach((fruit, index) => {
            if (fruit.name.toLowerCase().includes(value) || fruit.jname.toLowerCase().includes(value)) {
                filteredItems.push({ type: 'env', index });
            }
        });

        parSub.forEach((fruit, index) => {
            if (fruit.name.toLowerCase().includes(value) || fruit.jname.toLowerCase().includes(value)) {
                filteredItems.push({ type: 'sub', index });
            }
        });

        parPow.forEach((fruit, index) => {
            if (fruit.name.toLowerCase().includes(value) || fruit.jname.toLowerCase().includes(value)) {
                filteredItems.push({ type: 'pow', index });
            }
        });

        generateButtons(filteredItems);


if (filteredItems.length >= 0) {
    const type = filteredItems[0].type;
    switch (type) {
        case 'nor':
            getZoanNormal(filteredItems);
            break;
        case 'anc':
            getZoanAncient(filteredItems);
            break;
        case 'myth':
            getZoanMythical(filteredItems);
            break;
        case 'body':
            getParBody(filteredItems);
            break;
        case 'env':
            getParEnv(filteredItems);
            break;
        case 'sub':
            getParSub(filteredItems);
            break;
        case 'pow':
            getParPow(filteredItems);
            break;
        case 'log':
            getLogia(filteredItems);
            break;
        default:
            break;
    }
}
});
}

function generateButtons(filteredItems) {
    let data = '';

    if (filteredItems.length > 0) {
        for (let i = 0; i < filteredItems.length; i++) {
            const { type, index } = filteredItems[i];
            const currentItem = getItemByTypeAndIndex(type, index);

            data += `<button id="${type}${index}">${currentItem.name}<br>${currentItem.jname}</button>`;
        }
    } else {
        data = '<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspNo matching items found</p>';
    }

    document.getElementById('allFruit').innerHTML = data;
}

function getItemByTypeAndIndex(type, index) {
    switch (type) {
        case 'log':
            return logia[index];
        case 'nor':
            return zoanNormal[index];
        case 'anc':
            return zoanAnicent[index];
        case 'myth':
            return zoanMythical[index];
        case 'body':
            return parBody[index];
        case 'env':
            return parEnv[index];
        case 'sub':
            return parSub[index];
        case 'pow':
            return parPow[index];
        default:
            return null;
    }
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

function getLogia(filteredItems) {
    document.getElementById('fruits').style.opacity = 1;
    document.querySelector('#pbutton').style.display = "none";
    document.querySelector('#optionBox').style.display = "none";
    document.querySelector('#gifters').style.display = 'none';
    document.querySelector('#kaido').style.display = 'none';
    document.querySelector('#smile').style.display = 'none';


     for (let i = 0; i < filteredItems.length; i++) {
        let option = document.getElementById('log' + filteredItems[i].index);

        option.onclick = function () {
            console.log(option);

            document.getElementById('Dname').innerHTML = logia[filteredItems[i].index].name + " (" + logia[filteredItems[i].index].jname + ")";
            document.getElementById('Duser').innerHTML = logia[filteredItems[i].index].user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + logia[filteredItems[i].index].element;
            document.getElementById('Dinfo').innerHTML = logia[filteredItems[i].index].info;
            document.getElementById('extra').innerHTML = logia[filteredItems[i].index].manga + "<br>" + logia[filteredItems[i].index].anime;
            document.getElementById('fruits').src = logia[filteredItems[i].index].fruit;
            document.getElementById('user').src = logia[filteredItems[i].index].aCharacter;

            logia[filteredItems[i].index].character == null ? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
            document.getElementById('char').src = logia[filteredItems[i].index].character;

            logia[filteredItems[i].index].fruit == null ? document.getElementById('hat').style.display = "none" : document.getElementById('hat').style.display = "block";

            logia[filteredItems[i].index].fruit == null ? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

            logia[filteredItems[i].index].fruit == null ? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
            document.getElementById('user1').src = logia[filteredItems[i].index].aCharacter;

            logia[filteredItems[i].index].ufruit == "" ? console.log("...") : document.getElementById('userButton').style.display = "block";

            logia[filteredItems[i].index].ufruit == "" ? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
            document.getElementById('Ufruit').src = logia[filteredItems[i].index].ufruit;

            logia[filteredItems[i].index].fruitBox == "" ? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
            document.getElementById('fruitBox').src = logia[filteredItems[i].index].fruitBox;

            logia[filteredItems[i].index].imgInfo == null ? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
            document.getElementById('imgInfo').src = logia[filteredItems[i].index].imgInfo;

            document.getElementById('infoPage').style.display = "block";
            document.querySelector('#optionBox').style.display = "none";
            document.getElementById('wrapper').style.display = "none";
        };
    }
}

function getZoanNormal(filteredItems){
    document.getElementById('fruits').style.opacity = 1;
    document.querySelector('#pbutton').style.display = "none";
    document.querySelector('#optionBox').style.display = "none";
    document.querySelector('#gifters').style.display = 'none';
    document.querySelector('#kaido').style.display = 'none';
    document.querySelector('#smile').style.display = 'none';


     for (let i = 0; i < filteredItems.length; i++) {
        let option = document.getElementById('nor' + filteredItems[i].index);

        option.onclick = function () {
            console.log(option);

            document.getElementById('Dname').innerHTML = zoanNormal[filteredItems[i].index].name + " (" + zoanNormal[filteredItems[i].index].jname + ")";
            document.getElementById('Duser').innerHTML = zoanNormal[filteredItems[i].index].user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + zoanNormal[filteredItems[i].index].element;
            document.getElementById('Dinfo').innerHTML = zoanNormal[filteredItems[i].index].info;
            document.getElementById('extra').innerHTML = zoanNormal[filteredItems[i].index].manga + "<br>" + zoanNormal[filteredItems[i].index].anime;
            document.getElementById('fruits').src = zoanNormal[filteredItems[i].index].fruit;
            document.getElementById('user').src = zoanNormal[filteredItems[i].index].aCharacter;

            zoanNormal[filteredItems[i].index].character == null ? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
            document.getElementById('char').src = zoanNormal[filteredItems[i].index].character;

            zoanNormal[filteredItems[i].index].fruit == null ? document.getElementById('hat').style.display = "none" : document.getElementById('hat').style.display = "block";

            zoanNormal[filteredItems[i].index].fruit == null ? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

            zoanNormal[filteredItems[i].index].fruit == null ? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
            document.getElementById('user1').src = zoanNormal[filteredItems[i].index].aCharacter;

            zoanNormal[filteredItems[i].index].ufruit == null ? console.log("...") : document.getElementById('userButton').style.display = "block";

            zoanNormal[filteredItems[i].index].ufruit == null ? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
            document.getElementById('Ufruit').src = zoanNormal[filteredItems[i].index].ufruit;

            zoanNormal[filteredItems[i].index].fruitBox == null ? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
            document.getElementById('fruitBox').src = zoanNormal[filteredItems[i].index].fruitBox;

            zoanNormal[filteredItems[i].index].imgInfo == null ? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
            document.getElementById('imgInfo').src = zoanNormal[filteredItems[i].index].imgInfo;

            document.getElementById('infoPage').style.display = "block";
            document.querySelector('#optionBox').style.display = "none";
            document.getElementById('wrapper').style.display = "none";
        };
    }
}

function getZoanAncient(filteredItems){
    document.getElementById('fruits').style.opacity = 1;
    document.querySelector('#pbutton').style.display = "none";
    document.querySelector('#optionBox').style.display = "none";
    document.querySelector('#gifters').style.display = 'none';
    document.querySelector('#kaido').style.display = 'none';
    document.querySelector('#smile').style.display = 'none';


     for (let i = 0; i < filteredItems.length; i++) {
        let option = document.getElementById('anc' + filteredItems[i].index);

        option.onclick = function () {
            console.log(option);

            document.getElementById('Dname').innerHTML = zoanAnicent[filteredItems[i].index].name + " (" + zoanAnicent[filteredItems[i].index].jname + ")";
            document.getElementById('Duser').innerHTML = zoanAnicent[filteredItems[i].index].user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + zoanAnicent[filteredItems[i].index].element;
            document.getElementById('Dinfo').innerHTML = zoanAnicent[filteredItems[i].index].info;
            document.getElementById('extra').innerHTML = zoanAnicent[filteredItems[i].index].manga + "<br>" + zoanAnicent[filteredItems[i].index].anime;
            document.getElementById('fruits').src = zoanAnicent[filteredItems[i].index].fruit;
            document.getElementById('user').src = zoanAnicent[filteredItems[i].index].aCharacter;

            zoanAnicent[filteredItems[i].index].character == null ? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
            document.getElementById('char').src = zoanAnicent[filteredItems[i].index].character;

            zoanAnicent[filteredItems[i].index].fruit == null ? document.getElementById('hat').style.display = "none" : document.getElementById('hat').style.display = "block";

            zoanAnicent[filteredItems[i].index].fruit == null ? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

            zoanAnicent[filteredItems[i].index].fruit == null ? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
            document.getElementById('user1').src = zoanAnicent[filteredItems[i].index].aCharacter;

            zoanAnicent[filteredItems[i].index].ufruit == null ? console.log("...") : document.getElementById('userButton').style.display = "block";

            zoanAnicent[filteredItems[i].index].ufruit == null ? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
            document.getElementById('Ufruit').src = zoanAnicent[filteredItems[i].index].ufruit;

            zoanAnicent[filteredItems[i].index].fruitBox == null ? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
            document.getElementById('fruitBox').src = zoanAnicent[filteredItems[i].index].fruitBox;

            zoanAnicent[filteredItems[i].index].imgInfo == null ? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
            document.getElementById('imgInfo').src = zoanAnicent[filteredItems[i].index].imgInfo;

            document.getElementById('infoPage').style.display = "block";
            document.querySelector('#optionBox').style.display = "none";
            document.getElementById('wrapper').style.display = "none";
        };
    }
}

function getZoanMythical(filteredItems){
    document.getElementById('fruits').style.opacity = 1;
    document.querySelector('#pbutton').style.display = "none";
    document.querySelector('#optionBox').style.display = "none";
    document.querySelector('#gifters').style.display = 'none';
    document.querySelector('#kaido').style.display = 'none';
    document.querySelector('#smile').style.display = 'none';


     for (let i = 0; i < filteredItems.length; i++) {
        let option = document.getElementById('myth' + filteredItems[i].index);

        option.onclick = function () {
            console.log(option);

            document.getElementById('Dname').innerHTML = zoanMythical[filteredItems[i].index].name + " (" + zoanMythical[filteredItems[i].index].jname + ")";
            document.getElementById('Duser').innerHTML = zoanMythical[filteredItems[i].index].user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + zoanMythical[filteredItems[i].index].element;
            document.getElementById('Dinfo').innerHTML = zoanMythical[filteredItems[i].index].info;
            document.getElementById('extra').innerHTML = zoanMythical[filteredItems[i].index].manga + "<br>" + zoanMythical[filteredItems[i].index].anime;
            document.getElementById('fruits').src = zoanMythical[filteredItems[i].index].fruit;
            document.getElementById('user').src = zoanMythical[filteredItems[i].index].aCharacter;

            zoanMythical[filteredItems[i].index].character == null ? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
            document.getElementById('char').src = zoanMythical[filteredItems[i].index].character;

            zoanMythical[filteredItems[i].index].fruit == null ? document.getElementById('hat').style.display = "none" : document.getElementById('hat').style.display = "block";

            zoanMythical[filteredItems[i].index].fruit == null ? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

            zoanMythical[filteredItems[i].index].fruit == null ? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
            document.getElementById('user1').src = zoanMythical[filteredItems[i].index].aCharacter;

            zoanMythical[filteredItems[i].index].ufruit == null ? console.log("...") : document.getElementById('userButton').style.display = "block";

            zoanMythical[filteredItems[i].index].ufruit == null ? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
            document.getElementById('Ufruit').src = zoanMythical[filteredItems[i].index].ufruit;

            zoanMythical[filteredItems[i].index].fruitBox == null ? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
            document.getElementById('fruitBox').src = zoanMythical[filteredItems[i].index].fruitBox;

            zoanMythical[filteredItems[i].index].imgInfo == null ? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
            document.getElementById('imgInfo').src = zoanMythical[filteredItems[i].index].imgInfo;

            document.getElementById('infoPage').style.display = "block";
            document.querySelector('#optionBox').style.display = "none";
            document.getElementById('wrapper').style.display = "none";
        };
    }
}

function getParBody(filteredItems){
    document.getElementById('fruits').style.opacity = 1;
    document.querySelector('#pbutton').style.display = "none";
    document.querySelector('#optionBox').style.display = "none";
    document.querySelector('#gifters').style.display = 'none';
    document.querySelector('#kaido').style.display = 'none';
    document.querySelector('#smile').style.display = 'none';


     for (let i = 0; i < filteredItems.length; i++) {
        let option = document.getElementById('body' + filteredItems[i].index);

        option.onclick = function () {
            console.log(option);

            document.getElementById('Dname').innerHTML = parBody[filteredItems[i].index].name + " (" + parBody[filteredItems[i].index].jname + ")";
            document.getElementById('Duser').innerHTML = parBody[filteredItems[i].index].user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + parBody[filteredItems[i].index].element;
            document.getElementById('Dinfo').innerHTML = parBody[filteredItems[i].index].info;
            document.getElementById('extra').innerHTML = parBody[filteredItems[i].index].manga + "<br>" + parBody[filteredItems[i].index].anime;
            document.getElementById('fruits').src = parBody[filteredItems[i].index].fruit;
            document.getElementById('user').src = parBody[filteredItems[i].index].aCharacter;

            parBody[filteredItems[i].index].character == null ? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
            document.getElementById('char').src = parBody[filteredItems[i].index].character;

            parBody[filteredItems[i].index].fruit == null ? document.getElementById('hat').style.display = "none" : document.getElementById('hat').style.display = "block";

            parBody[filteredItems[i].index].fruit == null ? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

            parBody[filteredItems[i].index].fruit == null ? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
            document.getElementById('user1').src = parBody[filteredItems[i].index].aCharacter;

            parBody[filteredItems[i].index].ufruit == null ? console.log("...") : document.getElementById('userButton').style.display = "block";

            parBody[filteredItems[i].index].ufruit == null ? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
            document.getElementById('Ufruit').src = parBody[filteredItems[i].index].ufruit;

            parBody[filteredItems[i].index].fruitBox == null ? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
            document.getElementById('fruitBox').src = parBody[filteredItems[i].index].fruitBox;

            parBody[filteredItems[i].index].imgInfo == null ? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
            document.getElementById('imgInfo').src = parBody[filteredItems[i].index].imgInfo;

            document.getElementById('infoPage').style.display = "block";
            document.querySelector('#optionBox').style.display = "none";
            document.getElementById('wrapper').style.display = "none";
        };
    }
}

function getParEnv(filteredItems){
    document.getElementById('fruits').style.opacity = 1;
    document.querySelector('#pbutton').style.display = "none";
    document.querySelector('#optionBox').style.display = "none";
    document.querySelector('#gifters').style.display = 'none';
    document.querySelector('#kaido').style.display = 'none';
    document.querySelector('#smile').style.display = 'none';


     for (let i = 0; i < filteredItems.length; i++) {
        let option = document.getElementById('env' + filteredItems[i].index);

        option.onclick = function () {
            console.log(option);

            document.getElementById('Dname').innerHTML = parEnv[filteredItems[i].index].name + " (" + parEnv[filteredItems[i].index].jname + ")";
            document.getElementById('Duser').innerHTML = parEnv[filteredItems[i].index].user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + parEnv[filteredItems[i].index].element;
            document.getElementById('Dinfo').innerHTML = parEnv[filteredItems[i].index].info;
            document.getElementById('extra').innerHTML = parEnv[filteredItems[i].index].manga + "<br>" + parEnv[filteredItems[i].index].anime;
            document.getElementById('fruits').src = parEnv[filteredItems[i].index].fruit;
            document.getElementById('user').src = parEnv[filteredItems[i].index].aCharacter;

            parEnv[filteredItems[i].index].character == null ? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
            document.getElementById('char').src = parEnv[filteredItems[i].index].character;

            parEnv[filteredItems[i].index].fruit == null ? document.getElementById('hat').style.display = "none" : document.getElementById('hat').style.display = "block";

            parEnv[filteredItems[i].index].fruit == null ? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

            parEnv[filteredItems[i].index].fruit == null ? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
            document.getElementById('user1').src = parEnv[filteredItems[i].index].aCharacter;

            parEnv[filteredItems[i].index].ufruit == null ? console.log("...") : document.getElementById('userButton').style.display = "block";

            parEnv[filteredItems[i].index].ufruit == null ? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
            document.getElementById('Ufruit').src = parEnv[filteredItems[i].index].ufruit;

            parEnv[filteredItems[i].index].fruitBox == null ? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
            document.getElementById('fruitBox').src = parEnv[filteredItems[i].index].fruitBox;

            parEnv[filteredItems[i].index].imgInfo == null ? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
            document.getElementById('imgInfo').src = parEnv[filteredItems[i].index].imgInfo;

            document.getElementById('infoPage').style.display = "block";
            document.querySelector('#optionBox').style.display = "none";
            document.getElementById('wrapper').style.display = "none";
        };
    }
}

function getParSub(filteredItems){
    document.getElementById('fruits').style.opacity = 1;
    document.querySelector('#pbutton').style.display = "none";
    document.querySelector('#optionBox').style.display = "none";
    document.querySelector('#gifters').style.display = 'none';
    document.querySelector('#kaido').style.display = 'none';
    document.querySelector('#smile').style.display = 'none';


     for (let i = 0; i < filteredItems.length; i++) {
        let option = document.getElementById('sub' + filteredItems[i].index);

        option.onclick = function () {
            console.log(option);

            document.getElementById('Dname').innerHTML = parSub[filteredItems[i].index].name + " (" + parSub[filteredItems[i].index].jname + ")";
            document.getElementById('Duser').innerHTML = parSub[filteredItems[i].index].user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + parSub[filteredItems[i].index].element;
            document.getElementById('Dinfo').innerHTML = parSub[filteredItems[i].index].info;
            document.getElementById('extra').innerHTML = parSub[filteredItems[i].index].manga + "<br>" + parSub[filteredItems[i].index].anime;
            document.getElementById('fruits').src = parSub[filteredItems[i].index].fruit;
            document.getElementById('user').src = parSub[filteredItems[i].index].aCharacter;

            parSub[filteredItems[i].index].character == null ? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
            document.getElementById('char').src = parSub[filteredItems[i].index].character;

            parSub[filteredItems[i].index].fruit == null ? document.getElementById('hat').style.display = "none" : document.getElementById('hat').style.display = "block";

            parSub[filteredItems[i].index].fruit == null ? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

            parSub[filteredItems[i].index].fruit == null ? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
            document.getElementById('user1').src = parSub[filteredItems[i].index].aCharacter;

            parSub[filteredItems[i].index].ufruit == null ? console.log("...") : document.getElementById('userButton').style.display = "block";

            parSub[filteredItems[i].index].ufruit == null ? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
            document.getElementById('Ufruit').src = parSub[filteredItems[i].index].ufruit;

            parSub[filteredItems[i].index].fruitBox == null ? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
            document.getElementById('fruitBox').src = parSub[filteredItems[i].index].fruitBox;

            parSub[filteredItems[i].index].imgInfo == null ? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
            document.getElementById('imgInfo').src = parSub[filteredItems[i].index].imgInfo;

            document.getElementById('infoPage').style.display = "block";
            document.querySelector('#optionBox').style.display = "none";
            document.getElementById('wrapper').style.display = "none";
        };
    }
}

function getParPow(filteredItems){
    document.getElementById('fruits').style.opacity = 1;
    document.querySelector('#pbutton').style.display = "none";
    document.querySelector('#optionBox').style.display = "none";
    document.querySelector('#gifters').style.display = 'none';
    document.querySelector('#kaido').style.display = 'none';
    document.querySelector('#smile').style.display = 'none';


     for (let i = 0; i < filteredItems.length; i++) {
        let option = document.getElementById('pow' + filteredItems[i].index);

        option.onclick = function () {
            console.log(option);

            document.getElementById('Dname').innerHTML = parPow[filteredItems[i].index].name + " (" + parPow[filteredItems[i].index].jname + ")";
            document.getElementById('Duser').innerHTML = parPow[filteredItems[i].index].user + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + parPow[filteredItems[i].index].element;
            document.getElementById('Dinfo').innerHTML = parPow[filteredItems[i].index].info;
            document.getElementById('extra').innerHTML = parPow[filteredItems[i].index].manga + "<br>" + parPow[filteredItems[i].index].anime;
            document.getElementById('fruits').src = parPow[filteredItems[i].index].fruit;
            document.getElementById('user').src = parPow[filteredItems[i].index].aCharacter;

            parPow[filteredItems[i].index].character == null ? document.getElementById('char').style.display = "none" : document.getElementById('char').style.display = "block";
            document.getElementById('char').src = parPow[filteredItems[i].index].character;

            parPow[filteredItems[i].index].fruit == null ? document.getElementById('hat').style.display = "none" : document.getElementById('hat').style.display = "block";

            parPow[filteredItems[i].index].fruit == null ? document.getElementById('userButton').style.display = "none" : document.getElementById('userButton').style.display = "block";

            parPow[filteredItems[i].index].fruit == null ? document.getElementById('user1').style.display = "block" : document.getElementById('user1').style.display = "none";
            document.getElementById('user1').src = parPow[filteredItems[i].index].aCharacter;

            parPow[filteredItems[i].index].ufruit == null ? console.log("...") : document.getElementById('userButton').style.display = "block";

            parPow[filteredItems[i].index].ufruit == null ? document.getElementById('Ufruit').style.display = "none" : document.getElementById('Ufruit').style.display = "block";
            document.getElementById('Ufruit').src = parPow[filteredItems[i].index].ufruit;

            parPow[filteredItems[i].index].fruitBox == null ? document.getElementById('fruitBox').style.display = "none" : document.getElementById('fruitBox').style.display = "block";
            document.getElementById('fruitBox').src = parPow[filteredItems[i].index].fruitBox;

            parPow[filteredItems[i].index].imgInfo == null ? document.getElementById('imgInfo').style.display = "none" : document.getElementById('imgInfo').style.display = "block";
            document.getElementById('imgInfo').src = parPow[filteredItems[i].index].imgInfo;

            document.getElementById('infoPage').style.display = "block";
            document.querySelector('#optionBox').style.display = "none";
            document.getElementById('wrapper').style.display = "none";
        };
    }
}

search();
exit();