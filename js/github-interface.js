var github = require('./../js/github.js');

$(document).ready(function(){
  $('#submitButton').click(function(){
    github.getRepos($('#userInput').val());
  });
});
