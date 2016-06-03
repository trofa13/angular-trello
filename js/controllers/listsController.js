angular.module('trello').controller('listsController', function(listFactory){
    this.lists = listFactory.getLists();

    this.addlist = function(){
        listFactory.addList(this.listName);
        this.listName = '';
    };
});