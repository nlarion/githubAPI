var github = require('./../js/github.js');

$(document).ready(function(){
  $('#submitButton').click(function(){
    $('#userResults').html('');
    $('#repoResults').html('');
    github.getRepos($('#userInput').val());

  });
});
