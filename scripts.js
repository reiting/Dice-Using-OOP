//create blank array for dice
var diceArray = [];
//dice object
var Die = function () {
    this.number = 0;
    this.die = $('<div class="die"></div>');
    //causes single die to roll when clicked
    this.die.click(function () {
        this.roll();
    }.bind(this));
    //causes die to be removed when double clicked
    this.die.dblclick(function () {
        this.die.remove();
        var index = diceArray.indexOf(this);
        if (index != -1) {
            diceArray.splice(index, 1);
        }
    }.bind(this));
};
//append die object to html element
Die.prototype.insert = function () {
    $('.diceDiv').append(this.die);
}
//roll function to create random number and make the text of die that number
Die.prototype.roll = function () {
    this.number = Math.floor(Math.random() * 6) + 1;
    $(this.die).text(this.number);
}

$(document).ready(function () {
    //on create die button, create a new instance of Die that inserts the new die and pushes to the array. 
    $('#createDie').click(function () {
        var die = new Die();
        die.roll();
        die.insert();
        diceArray.push(die);
    });
    //roll dice button changes the value of the dice
    $('#rollDice').click(function () {
        $(diceArray).each(function (index, value) {
            value.roll();
        });
    });
    //sums up the dice
    $('#addDice').click(function () {
        var sum = diceArray.reduce(function (total, num) {
            return total + num.number;
        }, 0);
        alert('the total is ' + sum);
    });
});