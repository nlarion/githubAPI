var github = require('./../js/github.js');

$(document).ready(function(){
  console.log('yo! I am working!');
  github.getRepos();
});
