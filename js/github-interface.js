var github = require('./../js/github.js');

$(document).ready(function(){
  $('#submitButton').click(function(){
    $('#userResults, #repoResults').html('');//clear github users info after submit incase there is information there..
    github.getRepos($('#userInput').val());
  });
});
