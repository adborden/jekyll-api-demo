(function ($) {
  $(document).ready(function () {
    var $jsFruit = $('#js-fruit');
    if (!$jsFruit.length) {
      return;
    }

    var fruits = ['apple', 'banana', 'orange'];

    // Random fruit
    var fruit = fruits[Math.floor(Math.random() * fruits.length)];

    $.ajax(window.API_URL + '/fruits/' + fruit + '.json')
      .then(function (fruit) {
        $jsFruit
          .append($('<pre></pre><br>').text(JSON.stringify(fruit, null, 2)))
          .append(fruit.description);
      });
  });
})(window.jQuery);
