var github = require('./../js/github.js');

$(document).ready(function(){
  $('#submitButton').click(function(){
    console.log($('#userInput').val());
  });
  github.getRepos();
});
