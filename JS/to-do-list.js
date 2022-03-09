function newItem(){


//1 Adding a new item to the list  of items:
let li = $('<li></li>');
let inputValue = $('#input').val(); 
li.append(inputValue);
/*Turns out this was unnecessary=>   $('inputValue').click(function (){
    let inputValue = $('#input').val();
*/
//What I learned with Edwards helped.. 
    if(inputValue === ''){
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
    li.toggleClass("strike");
}

li.on("dblclick", function crossOut(){
    li.toggleClass("strike");
});

//3(i) Adding the delete button "X": 
let  crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

crossOutButton.on('click', deleteListItem);
/* my attempt 
$(crossOutButton).on('click', function()){
    li.remove();
}
*/ 
/* not sure how I'm supposed to use this.  
deleteButton.append(document.createTextNode('X'));
*/ 

//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
function deleteListItem(){
    //why not crossOutButton? Is is because li is appended to crossOutButton?
    li.addClass('delete');
}
// $('#input').on('click', function () {
//     //let li = $('<li></li>');
//     li.addClass("delete");
//   });

// 4. Reordering the items: 
$('#list').sortable();
}

newItem();
