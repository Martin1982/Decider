(function () {
    "use strict";
    var decisionFormEl = document.getElementById('decisionForm');

    decisionFormEl.addEventListener('submit', function (event) {
        var decisionEl = document.getElementById('decision'),
            numChoices = document.getElementById('availableChoices').value,
            choice = Math.floor((Math.random() * numChoices) + 1);
        event.preventDefault();
        decisionEl.innerHTML = "We think you should pick number: " + choice;
        decisionEl.style.display = "block";
    });
}());

