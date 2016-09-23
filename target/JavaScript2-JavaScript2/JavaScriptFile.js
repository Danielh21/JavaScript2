

/*
 * Manipulate the DOM
 1. Change the appearance of your divs
 a. Put 3 div tags in your HTML
 b. Select them in your js file by using document.getElementsByTagName()
 c. Give the divs a new background color.
 */

var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var gdf2 = document.getElementById("demo");

div1.style.color = "red";
div2.style.color = "blue";
div3.style.color = "green";


/*
 * 2. Create an array of person objects - each object having: first name, last name, phone and email
 a. Loop the array and write content to an html table
 b. Each iteration will create a new <tr> and <td> for each property in the person objects
 */

function Person(firstn, lastn, phone, email) {
    this.firstn = firstn;
    this.lastn = lastn;
    this.phone = phone;
    this.email = email;
}
;

var p1 = new Person("Lars", "Larsen", 2223, "Lars@home.dk");
var p2 = new Person("Mete", "Larsen", 4444, "Mette@home.dk");
var p3 = new Person("Kevin", "Larsen", 5555, "Kevin@home.dk");

var arrOfPerson = [p1, p2, p3];
var arrlength = arrOfPerson.length;
var tbody = document.getElementById("tbody");

for (var i = 0; i < arrlength; i++) {
    var row = document.createElement("tr");
    var tempPerson = arrOfPerson[i];
    console.log(tempPerson.firstn);
    row.innerHTML = "<td>" + tempPerson.firstn + "</td>";
    row.innerHTML += "<td>" + tempPerson.lastn + "</td>";
    row.innerHTML += "<td>" + tempPerson.phone + "</td>";
    row.innerHTML += "<td>" + tempPerson.email + "</td>";
    tbody.appendChild(row);

}
;

/*
 * 3. Create 3 divs in html with height and width being 100px and different background colors
 a. Make each of the 3 divs write a different message to the console when it is clicked
 */

var divF = document.getElementById("divFirst");
var divS = document.getElementById("divSecond");
var divT = document.getElementById("divThrid");

divF.onclick = function () {
    alert("Black Clicked");
};

divS.onclick = function () {
    alert("Blue Clicked");
};

divT.onclick = function () {
    alert("Yellow Clicked");
};

/*
 * 4. Create 3 divs in html with height and width being 200px and different border color
 a. Make each div show a different text messag inside whenever the mouse is over the div.
 b. Make the message disappear when the mouse moves away from the div.
 */

var one = document.getElementById("one");
var two = document.getElementById("two");
var weird = document.getElementById("weird");

one.onmouseover = function () {
    one.innerHTML = "You are over me";
};

one.onmouseleave = function () {
    one.innerHTML = "";
};

two.onmouseover = function () {
    two.innerHTML = "You are over me";
};

two.onmouseleave = function () {
    two.innerHTML = "";
};

weird.onmouseover = function () {
    weird.innerHTML = "You are over me";
};

weird.onmouseleave = function () {
    weird.innerHTML = "";
};

/*
 * 5. Create an html form with all the different components: text input fields, radio buttons, check boxes etc.
 a. When the user submits the form write the content to the console.log
 b. Write the content to an html table.
 */


var three = document.getElementById("table2Body");
var bottom = document.getElementById("button");
var tablebody2 = document.getElementById("table2Body");
bottom.onclick = function () {
    var rowtoTable2 = document.createElement("tr");
    var name = document.getElementById("namefield").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    rowtoTable2.innerHTML = "<td>" + name + "</td>";
    rowtoTable2.innerHTML += "<td>" + gender + "</td>";
    tablebody2.appendChild(rowtoTable2);
};

/*
 * 6. Create an html page with a <ul >element (unordered list).
 a. Create 10 list items inside – each containing the name of a person
 b. Give the list item a different background color depending on if it is an even or odd number ind the list.
 c. Make each list item clickable so that by clicking a name we get a greeting to that name in the console.
 d. Make it so that when hovering over a list item – the text in the line becomes twice as tall.
 */

var liList = document.getElementById("list").getElementsByTagName("li");
var largo = liList.length;
var listdiv = document.getElementById("listdiv");

checkList(largo);

function checkList(n) {
    if (n % 2 === 0) {
        listdiv.style.backgroundColor = "red";
    }
    else {
        listdiv.style.backgroundColor = "blue";
    }

}
;

for (var i = 0; i < liList.length; i++) {
    changeFont(liList[i]);
}

function changeFont(listEL) {

    listEL.onclick = function () {
        alert("I Was Fucking Clicked! " + listEL.innerText);
    };
    
    listEL.onmouseover = function () {
    listEL.style.fontSize = "xx-large";
    };
    
    listEL.onmouseleave = function () {
         listEL.style.fontSize = "medium";
    };

}

 