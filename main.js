(function ($) {
  $(document).ready(function () {
    var fruits = ['apple', 'banana', 'orange'];

    // Random fruit
    var fruit = fruits[Math.floor(Math.random() * fruits.length)];

    $.ajax('window.API_URL + '/fruits/' + fruit + '.json')
      .then(function (fruit) {
        $('#js-fruit')
          .append($('<pre></pre><br>').text(JSON.stringify(fruit, null, 2)))
          .append(fruit.description);
      });
  });
})(window.jQuery);
