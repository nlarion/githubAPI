var apiKey = require('./../.env').apiKey;
exports.getRepos = function(user){
  $.get('https://api.github.com/users/'+user+'?access_token=' + apiKey).then(function(response){
    $('#userResults').prepend('<div><img src="'+response.avatar_url+'"/></div><br>');
    $('#userResults').append('<div>User Name: '+response.name+'</div><br>');
    $('#userResults').append('<div>User GitHub profile: <a href="'+response.html_url+'" target="_blank">'+response.html_url+'</a></div><br>');
    $.get('https://api.github.com/users/'+user+'/repos?direction=desc&access_token=' + apiKey).then(function(response){
      console.log(response);
      for (var i = 0; i < response.length; i++) {
        var htmlToAdd = '<div>Repo: '+response[i].name;
        if(response[i].description.length != 0){
          htmlToAdd += ' Description: '+response[i].description;
          console.log(response[i].description);
        }
        htmlToAdd+='</div>';
        $('#repoResults').prepend(htmlToAdd);
      }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};