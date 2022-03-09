function newItem(){


//1 Adding a new item to the list  of items:
let li = $('<li></li>');
let inputValue = $('#input').val(); 
li.append(inputValue);

/*Turns out this was unnecessary=>   $('inputValue').click(function (){
    let inputValue = $('#input').val();
*/
    //What I learned with Edwards help.. 
    if(inputValue === " "){
        alert("You must write something!");
    }else{
        $('#list').append(li);
    }
   /* What I wrote first and isn't correct..
    if (inputValue().length < 1) {
        alert("You must write something!")
    }
    */


//2 Crossing out an item from the list of items:
function crossOut() {
    li.addClass("strike");
}
$('li').on("dblclick", crossOut); 

//3(i) Adding the delete button "X": 
let  crossOutButton = $('<button>X</button>');
$('button').append(addEventListener("dblclick",crossOut));
li.append(crossOutButton);
/* not sure how I'm supposed to use this.  
deleteButton.append(document.createTextNode('X'));
*/ 

//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
function deleteListItem(){
    let li = $('<li></li>');
    li.addClass("delete");
}

// 4. Reordering the items: 
$('#list').sortable();
}
