var apiKey = require('./../.env').apiKey;
exports.getRepos = function(user){
  $.get('https://api.github.com/users/'+user+'/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    for (var i = 0; i < response.length; i++) {
      $('#results').prepend('<div>Repo Name: '+response[i].name+'</div><br>');
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};