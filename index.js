/*
1.enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
2.check and uncheck items on the list by clicking the "Check" button
3. permanently remove items from the list
*/

 //function to enter items 
function enterItem(){
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        const userInput = $(this).find('#shopping-list-entry').val();
        //Add new item to the list
        const list = `<li><span class="shopping-item">${userInput}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`; 
       //Add list if there is user input
        if(userInput !== ''){ $('.shopping-list').append(list);  }
    });
}

//function to check/uncheck box
function check(){
    $('ul').on('click', '.shopping-item-toggle',function(event){    
    //Add/remove class 
    $(this).closest(".shopping-item-controls").prev("span").toggleClass("shopping-item__checked");
    });
}


//function to remove items
function removeItem(){
    $('ul').on('click', '.shopping-item-delete', function(event){  
    //remove the list  
       $(this).closest("li").remove();
        });
}


$(enterItem);
$(check);
$(removeItem);
