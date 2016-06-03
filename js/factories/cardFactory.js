angular.module('trello').factory('cardFactory', function(){
    var service = {};
    var cards = [
        {
            id: 1,
            description: 'Fix bug in bugs',
            list_id: 1
        },
        {
            id: 2,
            description: 'Fix bug in bugs 2',
            list_id: 1
        },
        {
            id: 3,
            description: 'Fix bug in bugs 3',
            list_id: 2
        }
    ];

    service.getCards = function(list){
        return _.filter(cards, {list_id: list.id});
    };

    service.addCard = function(list, cardDescription){
        cards.push({
            id: _.uniqueId('card_'),
            description: cardDescription,
            list_id: list.id
        });
    };

    service.deleteCard = function(card){
        _.pull(cards, card);
    };

    service.updateCard = function(updatingCard){
        var card = _.filter( cards, _.matches({ id:updatingCard.id }) )[0];
        card.description = updatingCard.description;
        card.list_id = updatingCard.list_id;
    };

    return service;
});