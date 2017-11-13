(function ($) {
  $(document).ready(function () {
    var fruits = ['apple', 'banana', 'orange'];

    // Random fruit
    var fruit = fruits[Math.floor(Math.random() * fruits.length)];

    $.ajax('/api/' + window.API_VERSION + '/fruits/' + fruit + '.json')
      .then(function (fruit) {
        $('#js-fruit')
          .append($('<code></code><br>').text(JSON.stringify(fruit)))
          .append(fruit.description);
      });
  });
})(window.jQuery);
