var app = angular.module('myApp',[]);
app.controller("myCtrl", function($scope)
{
$scope.articles;
$scope.sortby=[
    {'id':"title",'label':"Title"},
    {'id':"author",'label':"Author"},
    {'id':"publishedAt",'label':"Date"}
]
$scope.sortedby="title";

$scope.languages;
$scope.language="fr";

$scope.GetNewsByCountry = function(country,keyword=""){
    $.ajax({

        url : "https://newsapi.org/v2/top-headlines?country="+country+"&q="+keyword+"&apiKey=8a79c5a41319449793411ee855e21b7b",
        method:"GET",
        headers: { "Accept": "application/json" },
        async: false,
        cache: false,  
        success: function (data) {
        
            $scope.articles=data.articles
        }
        });

};
$scope.GetNewsByCountry("fr");


$scope.searchNewsbyKeywork= function(keyword){

    $.ajax({

        url : "https://newsapi.org/v2/top-headlines?q="+keyword+"&apiKey=8a79c5a41319449793411ee855e21b7b",
        method:"GET",
        headers: { "Accept": "application/json" },
        async: false,
        cache: false,  
        success: function (data) {
        
            $scope.articles=data.articles
        }
        });

}

        // Get all languages
        $.ajax({

            url : "https://restcountries.eu/rest/v2/all",
            method:"GET",
            headers: { "Accept": "application/json" },
            async: false,
            cache: false,  
            success: function (data) {
            
                $scope.languages=data
            }
            });
  

});

