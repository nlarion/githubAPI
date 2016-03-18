var apiKey = require('./../.env').apiKey;
exports.getRepos = function(user){
  $.get('https://api.github.com/users/'+user+'?access_token=' + apiKey).then(function(response){
    $('#userResults').prepend('<div><img src="'+response.avatar_url+'"/></div><br>');
    $('#userResults').append('<div>User Name: '+response.name+'</div><br>');
    $('#userResults').append('<div>User GitHub profile: <a href="'+response.html_url+'" target="_blank">'+response.html_url+'</a></div><br>');
    $.get('https://api.github.com/users/'+user+'/repos?direction=desc&access_token=' + apiKey).then(function(response){
      for (var i = 0; i < response.length; i++) {
        var htmlToAdd = '<div class="repos"><span id="repo">Repo:</span> '+response[i].name;
        if(response[i].description.length != 0){
          htmlToAdd += ' <span id="description">Description:</span> '+response[i].description;
        }
        htmlToAdd+=' <span id="created">Created: '+moment(response[i].created_at).format("YYYY-MM-DD")+'</span>';
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