function newItem(){


//1 Adding a new item to the list  of items:
let li = $(<li></li>);
let inputValue = $('#input').val();
$('#input').append(document.createTextNode(inputValue));     
li.append(inputValue);

$('inputValue').each(function (i){
    let inputValue = $('#input').val();
    if (inputValue().length < 1) {
        alert("You must write something!")
    }
});

//2 Crossing out an item from the list of items:
function crossOut() {
    li.addClass("strike");
}
$('li').on("dblclick", crossOut); 

//3(i) Adding the delete button "X": 
let  crossOutButton = $(<button></button>);
$('button').append(addEventListener("dblclick",crossOut));
/* not sure how I'm supposed to use this.  
deleteButton.append(document.createTextNode('X'));
*/ 

//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
function deleteListItem(){
    let li = $(<li></li>);
    li.addClass("delete");
}

// 4. Reordering the items: 
$('#list').sortable();
}
