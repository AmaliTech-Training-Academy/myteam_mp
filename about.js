const box = document.querySelectorAll('.flip-card-inner');
box.forEach(function(card) {
  card.addEventListener('click', function() {
    card.classList.toggle('flip');
  });
});
