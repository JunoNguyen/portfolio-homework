var repos = document.getElementById('repos');
var repoBtn = document.getElementById('repobutton');

function getApi(){

    var requestUrl = 'https://api.github.com/users/junonguyen/repos';

    fetch(requestUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            for (var i = 0; i < data.length; i++) {
            var listRepo = document.createElement('li');
            // listRepo.textContent = data[i].name;
            listRepo.textContent = data[i].html_url;
            repos.appendChild(listRepo);
            }
        })
};

repoBtn.addEventListener("click", getApi);
