angular.module('trello').controller('listController', function(listFactory, cardFactory){
    this.removeList = function(list){
        listFactory.removeList(list);
    };

    this.getCards = function(list){
        return cardFactory.getCards(list);
    };

    this.createCard = function(list){
        cardFactory.addCard(list, this.cardDescription);
        this.cardDescription = '';
    };
});