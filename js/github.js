var apiKey = require('./../.env').apiKey;
exports.getRepos = function(user){
  $.get('https://api.github.com/users/'+user+'?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#userResults').prepend('<div><img src="'+response.avatar_url+'"/></div><br>');
    $('#userResults').append('<div>User Name: '+response.name+'</div><br>');
    $.get('https://api.github.com/users/'+user+'/repos?access_token=' + apiKey).then(function(response){
      console.log(response);
      for (var i = 0; i < response.length; i++) {
        $('#repoResults').prepend('<div>Repo Name: '+response[i].name+'</div><br>');
      }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};