var github = require('./../js/github.js');

$(document).ready(function(){
  $('#submitButton').click(function(){
    //clear github users info after submit incase there is information there..
    $('#userResults, #repoResults').html('');
    github.getRepos($('#userInput').val());
  });
});
