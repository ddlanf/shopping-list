/*
1.enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
2.check and uncheck items on the list by clicking the "Check" button
3. permanently remove items from the list
*/
/*
$('*').on( "click", function() {
    alert("Hello");
  });
 */

 //function to enter items
 
function enterItem(){
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        const userInput = $(this).find('#shopping-list-entry').val();
        //Add new item to te list
        //Still need to reject a stirng with not letter
        const list = `<li><span class="shopping-item">${userInput}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`; 
        $('.shopping-list').append(list); 
    });
}

/*
function check(){
}

//function to remove items
function removeItem(){

}
*/

$(enterItem);

