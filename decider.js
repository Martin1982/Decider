      var decisionFormEl = document.getElementById('decisionForm');
      
      decisionFormEl.addEventListener('submit', function(event){
        event.preventDefault();

        var decisionEl = document.getElementById('decision'),
            numChoices = document.getElementById('availableChoices').value,
            choice = Math.floor((Math.random() * numChoices) + 1);

        decisionEl.innerHTML = "We think you should pick number: " + choice;
        decisionEl.style.display = "block";
      });

